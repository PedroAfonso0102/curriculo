from playwright.sync_api import sync_playwright
import os

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Load the file directly since we are using vanilla JS/HTML
        cwd = os.getcwd()
        page.goto(f"file://{cwd}/index.html")

        # 1. Take screenshot of Main View (Light Mode)
        page.screenshot(path="verification/resume_light.png")

        # 2. Toggle Sidebar (Mobile view simulation)
        page.set_viewport_size({"width": 375, "height": 812})
        page.click('.menu-toggle')
        # Wait for spring animation
        page.wait_for_timeout(500)
        page.screenshot(path="verification/sidebar_mobile.png")

        # Reset viewport
        page.set_viewport_size({"width": 1280, "height": 800})

        # 3. Switch to Playground
        # Click the button with data-view="playground"
        page.click('button[data-view="playground"]')
        page.wait_for_timeout(500) # Wait for animation
        page.screenshot(path="verification/playground_light.png")

        # 4. Toggle Dark Mode
        # Use first() to click the first theme-toggle button found if there are duplicates
        # In current DOM, there are theme toggles in Resume view AND Playground view.
        # Since Playground view is active, we should target the visible one.
        # The visible one is in the playground view's top bar.

        # Let's target the theme toggle inside the visible container
        page.click('#playground-view .theme-toggle')

        page.wait_for_timeout(200)
        page.screenshot(path="verification/playground_dark.png")

        browser.close()

if __name__ == "__main__":
    run()
