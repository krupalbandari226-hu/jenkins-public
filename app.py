from http.server import BaseHTTPRequestHandler, HTTPServer

class MyServer(BaseHTTPRequestHandler):
    def do_GET(self):
        self.send_response(200)
        self.end_headers()
        self.wfile.write(b"Python Application - QA Branch")

server = HTTPServer(('0.0.0.0', 5000), MyServer)

print("Running on port 5000")

server.serve_forever()

