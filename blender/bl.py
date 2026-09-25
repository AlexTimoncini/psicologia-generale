#!/usr/bin/env python3
"""Parla col Blender live sulla porta 9876 (addon blender-mcp)."""

import json
import socket
import sys

HOST, PORT = "127.0.0.1", 9876


def invia(tipo, params=None, attesa=600):
    s = socket.create_connection((HOST, PORT), timeout=20)
    s.settimeout(attesa)
    s.sendall(json.dumps({"type": tipo, "params": params or {}}).encode())
    buf = b""
    while True:
        pezzo = s.recv(1 << 20)
        if not pezzo:
            break
        buf += pezzo
        try:
            r = json.loads(buf.decode())
            s.close()
            return r
        except json.JSONDecodeError:
            continue
    s.close()
    raise RuntimeError("risposta incompleta: %r" % buf[:400])


def code(src, attesa=600):
    r = invia("execute_code", {"code": src}, attesa=attesa)
    if r.get("status") == "error":
        raise RuntimeError(r.get("message") or r)
    out = (r.get("result") or {})
    if isinstance(out, dict):
        return out.get("result", "")
    return out


def ping():
    return invia("ping", {}, attesa=8)


def scena():
    return invia("get_scene_info", {}, attesa=15)


def screenshot(percorso, max_size=1100):
    return invia("get_viewport_screenshot", {
        "filepath": percorso,
        "max_size": max_size,
        "format": "png",
    }, attesa=60)


if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("uso: bl.py ping|scena|code <file.py>|shot <png>")
        sys.exit(2)
    cmd = sys.argv[1]
    if cmd == "ping":
        print(json.dumps(ping(), indent=2))
    elif cmd == "scena":
        print(json.dumps(scena(), indent=2))
    elif cmd == "code":
        src = open(sys.argv[2], encoding="utf-8").read()
        print(code(src))
    elif cmd == "shot":
        print(json.dumps(screenshot(sys.argv[2]), indent=2))
    else:
        sys.exit("comando sconosciuto: %s" % cmd)
