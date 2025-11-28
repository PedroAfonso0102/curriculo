from playwright.sync_api import sync_playwright

def verify_changes():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        # Force Portuguese locale
        context = browser.new_context(locale="pt-BR")
        page = context.new_page()

        # 1. Navigate to the resume page
        page.goto("http://localhost:8080/index.html")
        page.wait_for_load_state("networkidle")

        # Explicitly set language to PT just in case auto-detection fails
        page.evaluate("setLanguage('pt')")
        page.wait_for_timeout(500)

        # 2. Check Resume Text Update
        try:
             # Wait for the H2 to appear
             page.wait_for_selector("h2[data-i18n='section_summary']", timeout=5000)
             summary_text = page.locator("section").filter(has=page.locator("h2[data-i18n='section_summary']")).inner_text()

             if "Especialista em Eficiência Comercial" in summary_text:
                 print("Resume Text: Verified")
             else:
                 print("Resume Text: FAILED")
                 print(f"Found text: {summary_text[:100]}...")
        except Exception as e:
             print(f"Resume Verification Error: {e}")

        # 3. Check Hire Me Section
        # Switch view to Hire Me
        page.evaluate("switchView('hire-me')")
        page.wait_for_timeout(1000) # Wait for transition

        try:
             hire_me_content = page.locator("#hire-me-content")
             hire_text = hire_me_content.inner_text()
             if "O Que Entrego" in hire_text and "O Que Não Faço" in hire_text:
                  print("Hire Me Split View: Verified")
             else:
                  print("Hire Me Split View: FAILED")
                  print(f"Found hire text: {hire_text[:100]}...")
        except Exception as e:
             print(f"Hire Me Verification Error: {e}")

        # Take Screenshot of Hire Me
        page.screenshot(path="verification_hire_me.png")

        # 4. Check Playground Pivot
        page.evaluate("switchView('playground')")
        page.wait_for_timeout(1000)

        try:
             playground_header = page.locator(".playground-header h1")
             if "Inteligência de Mercado" in playground_header.inner_text():
                 print("Playground Title: Verified")
             else:
                 print("Playground Title: FAILED")
                 print(f"Found Title: {playground_header.inner_text()}")

             # Check Tabs
             tabs = page.locator(".playground-tabs")
             tabs_text = tabs.inner_text()
             if "Artigos Técnicos" in tabs_text and "Ferramentas (Labs)" in tabs_text:
                 print("Playground Tabs: Verified")
             else:
                 print("Playground Tabs: FAILED")
                 print(f"Found Tabs: {tabs_text}")
        except Exception as e:
             print(f"Playground Verification Error: {e}")

        # Take Screenshot of Playground
        page.screenshot(path="verification_playground.png")

        browser.close()

if __name__ == "__main__":
    verify_changes()
