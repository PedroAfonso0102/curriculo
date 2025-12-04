
from playwright.sync_api import sync_playwright
import os

def run():
    # Start a simple HTTP server to serve the static files
    import http.server
    import socketserver
    import threading

    PORT = 8000
    Handler = http.server.SimpleHTTPRequestHandler

    # Check if port is in use
    try:
        httpd = socketserver.TCPServer(('', PORT), Handler)
        thread = threading.Thread(target=httpd.serve_forever)
        thread.daemon = True
        thread.start()
        print(f'Serving at port {PORT}')
    except OSError:
        print(f'Port {PORT} already in use, assuming server running.')

    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()

        # Verify Portuguese (Default/Master)
        page.goto(f'http://localhost:{PORT}/index.html')
        page.set_viewport_size({'width': 1280, 'height': 2000})
        page.wait_for_selector('h1')
        page.screenshot(path='verification/verification_pt.png', full_page=True)
        print('Screenshot PT taken')

        # Verify English
        page.goto(f'http://localhost:{PORT}/index-en.html')
        page.wait_for_selector('h1')
        page.screenshot(path='verification/verification_en.png', full_page=True)
        print('Screenshot EN taken')

        # Verify Spanish
        page.goto(f'http://localhost:{PORT}/index-es.html')
        page.wait_for_selector('h1')
        page.screenshot(path='verification/verification_es.png', full_page=True)
        print('Screenshot ES taken')

        browser.close()

if __name__ == '__main__':
    run()
