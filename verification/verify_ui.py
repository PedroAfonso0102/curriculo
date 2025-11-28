
from playwright.sync_api import sync_playwright
import os

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        cwd = os.getcwd()
        page.goto(f'file://{cwd}/index.html')

        # Target the desktop one specifically
        page.locator('.nav-right .nav-link[data-view="hire-me"]').click()

        page.wait_for_timeout(1000)
        page.locator('#hire-me-view').screenshot(path='verification/hire_me_minimal.png')

        # Go to Playground
        page.locator('.nav-right .nav-link[data-view="playground"]').click()

        # Click Insight Log tab button explicitly
        page.locator('button.pg-tab-btn[onclick*="insights"]').click()

        page.wait_for_timeout(1000)
        page.locator('#tab-insights').screenshot(path='verification/insight_log_minimal.png')

        browser.close()

if __name__ == '__main__':
    run()
