#!/usr/bin/env python3
"""Simple HTTP server to serve the Appex portfolio"""

import http.server
import socketserver
import os
import webbrowser

PORT = 8000
DIRECTORY = "dist"

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

if __name__ == "__main__":
    # Use current directory
    with socketserver.TCPServer(("", PORT), Handler) as httpd:
        print(f"🚀 Appex Portfolio serving at http://localhost:{PORT}")
        print("📁 Serving from:", os.path.abspath(DIRECTORY))
        print("🔐 Cybersecurity Operations Online")
        print("\nPress Ctrl+C to stop the server")
        
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\n🛡️  Server stopped. Stay secure!")