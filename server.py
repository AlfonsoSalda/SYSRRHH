import webbrowser
import os
import http.server
import socketserver

# Obtén el directorio actual
current_dir = os.path.dirname(os.path.realpath(__file__))

# Define el puerto en el que se ejecutará el servidor
port = 8000

# Cambia al directorio del proyecto
os.chdir(current_dir)

# Inicia el servidor en el puerto especificado
Handler = http.server.SimpleHTTPRequestHandler
httpd = socketserver.TCPServer(("", port), Handler)

print(f"Servidor en http://localhost:{port}")

# Abre el navegador con la página principal
webbrowser.open(f"http://localhost:{port}")

# Espera a que el servidor sea cerrado manualmente (Ctrl+C)
httpd.serve_forever()
