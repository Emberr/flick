import socket
import http.server as server

#read databse.json from file and save it to a variable
with open('database.json') as f:
    database = f.read()

address = ('', 8000)
print("Running a server on http://localhost:{}".format(address[1]))

httpd = server.HTTPServer(address, server.CGIHTTPRequestHandler)
httpd.serve_forever()

