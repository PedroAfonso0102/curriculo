from playwright.sync_api import sync_playwright

def verify_resume_site():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Test Portuguese (Default)
        print("Testing Portuguese...")
        page.goto("http://localhost:8000/index.html")
        page.wait_for_selector(".prod-header")

        # Verify Header Links
        pt_span = page.locator(".prod-header span")
        en_link = page.locator("a[href='index-en.html']")
        es_link = page.locator("a[href='index-es.html']")

        if pt_span.inner_text() != "PT":
             print("FAIL: PT span not found")
        if en_link.inner_text() != "EN":
             print("FAIL: EN link not found")

        # Verify Content (PT)
        h1 = page.locator("h1")
        if "Pedro Afonso" not in h1.inner_text():
             print(f"FAIL: H1 incorrect: {h1.inner_text()}")

        page.screenshot(path="verification_pt.png")
        print("PT Screenshot saved.")

        # Test English
        print("Testing English...")
        page.goto("http://localhost:8000/index-en.html")
        page.wait_for_selector(".prod-header")

        # Verify Content (EN)
        summary = page.locator("h2[data-i18n='section_summary']")
        if "Summary" not in summary.inner_text():
             print(f"FAIL: Summary title incorrect in EN: {summary.inner_text()}")

        # Check specific translation
        role = page.locator(".role")
        if "Commercial Management" not in role.inner_text():
            print(f"FAIL: Role translation incorrect in EN: {role.inner_text()}")

        page.screenshot(path="verification_en.png")
        print("EN Screenshot saved.")

        # Test Spanish
        print("Testing Spanish...")
        page.goto("http://localhost:8000/index-es.html")
        page.wait_for_selector(".prod-header")

        # Verify Content (ES)
        summary_es = page.locator("h2[data-i18n='section_summary']")
        if "Resumen" not in summary_es.inner_text():
             print(f"FAIL: Summary title incorrect in ES: {summary_es.inner_text()}")

        page.screenshot(path="verification_es.png")
        print("ES Screenshot saved.")

        browser.close()

if __name__ == "__main__":
    verify_resume_site()
