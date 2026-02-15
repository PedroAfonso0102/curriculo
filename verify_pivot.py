from playwright.sync_api import sync_playwright

def verify_pivot():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        # Use PT-BR locale to verify exact text matches
        context = browser.new_context(locale="pt-BR")
        page = context.new_page()

        page.goto("http://localhost:8080/index.html")
        page.wait_for_load_state("networkidle")
        page.evaluate("setLanguage('pt')")
        page.wait_for_timeout(500)

        # 1. Verify Resume "Tech-savvy Salesperson"
        try:
             page.wait_for_selector("h2[data-i18n='section_summary']", timeout=5000)
             summary = page.locator("section").filter(has=page.locator("h2[data-i18n='section_summary']")).inner_text()
             if "vantagem de resolver demandas operacionais de design" in summary:
                 print("Resume Summary: Verified")
             else:
                 print("Resume Summary: FAILED")
                 print(f"Found: {summary[:100]}...")
        except Exception as e:
             print(f"Resume Error: {e}")

        # 2. Verify "Why Me?" Section
        page.evaluate("switchView('hire-me')")
        page.wait_for_timeout(1000)

        try:
            hire_content = page.locator("#hire-me-content")
            hire_text = hire_content.inner_text()
            if "Por que eu?" in hire_text and "Noção técnica para dialogar" in hire_text:
                print("Why Me Section: Verified")
            else:
                print("Why Me Section: FAILED")
                print(f"Found: {hire_text[:100]}...")
        except Exception as e:
             print(f"Why Me Error: {e}")

        page.screenshot(path="verify_whyme.png")

        # 3. Verify Articles Section
        page.evaluate("switchView('playground')")
        page.wait_for_timeout(1000)

        try:
             header = page.locator(".playground-header h1")
             if "Artigos & Reflexões" in header.inner_text():
                 print("Articles Header: Verified")
             else:
                 print("Articles Header: FAILED")

             article_card = page.locator(".article-card h3")
             if "Como usei scripts simples" in article_card.inner_text():
                 print("Article Card: Verified")
             else:
                 print("Article Card: FAILED")
        except Exception as e:
             print(f"Articles Error: {e}")

        page.screenshot(path="verify_articles.png")
        browser.close()

if __name__ == "__main__":
    verify_pivot()
