
from playwright.sync_api import sync_playwright
import os

def verify_translation():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        cwd = os.getcwd()

        # 1. Verify Main Page Translations (EN)
        page.goto(f'file://{cwd}/index.html')

        # Switch to English
        page.locator('button[onclick="setLanguage(\'en\')"]').first.click()

        # Check Portfolio Button
        page.get_by_text('Portfolio').first.wait_for()

        # Check Hire Me Flags
        page.locator('button[data-view="hire-me"]').first.click()
        page.get_by_text('What to expect (Green Flags)').wait_for()
        page.screenshot(path='verification/6_hire_me_en.png')

        # 2. Verify Project Page Translations (ES)
        page.goto(f'file://{cwd}/project-btg.html')

        # Switch to Spanish
        page.locator('button[onclick="setLanguage(\'es\')"]').first.click()

        # Check Title translation
        page.get_by_text('El Problema').wait_for()
        page.get_by_text('Ficha Técnica').wait_for()
        page.screenshot(path='verification/7_project_es.png')

        browser.close()

if __name__ == '__main__':
    verify_translation()
