from playwright.sync_api import sync_playwright

def verify_fonts():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        page.goto("http://localhost:8080")

        # Verify font variables are applied to body
        font_family = page.evaluate("getComputedStyle(document.body).fontFamily")
        print(f"Body font family: {font_family}")

        # Open Playground tab
        page.click("button[data-view='playground']")
        # The tab 'O Laboratório' is active by default in the HTML when Playground view opens
        # but let's make sure by clicking.
        # Check if the button is visible
        lab_btn = page.locator("button[data-i18n='tab_lab']")
        if lab_btn.is_visible():
            lab_btn.click()

        # Wait for the view to be active
        page.wait_for_selector('.lab-aesthetic')

        # Verify Monospace for Lab
        # .lab-aesthetic .playground-header h1 might not be inside .lab-aesthetic if the class is on the content div
        # Let's check structure.
        # Structure: <main id="playground-view"> <header class="playground-header"> ... <div id="tab-experiments" class="pg-tab-content active lab-aesthetic">

        # The CSS change was:
        # .lab-aesthetic .playground-header h1 -> This implies .playground-header is INSIDE .lab-aesthetic
        # BUT in index.html:
        # <main id="playground-view">
        #    <header class="playground-header">...</header>
        #    <div id="tab-experiments" class="lab-aesthetic">...</div>
        # </main>

        # Ah! The previous CSS was:
        # .lab-aesthetic .playground-header h1 { ... }
        # This selector would only work if playground-header was a descendant of .lab-aesthetic.
        # Let's check index.html again.
        # Line 776: <main id="playground-view"> ... <header class="playground-header"> ...
        # Line 783: <div id="tab-experiments" class="pg-tab-content active lab-aesthetic">

        # So the selector `.lab-aesthetic .playground-header h1` would NEVER match in the current HTML structure
        # unless I misread the CSS or the HTML.
        # The CSS I edited was existing code.
        # "Atue como Code Janitor... varra o projeto...".
        # Maybe I found a bug? Or maybe JS moves things?
        # JS doesn't seem to move the header.

        # Let's check if there is another .lab-aesthetic applied higher up? No.

        # However, for verification purposes, let's check elements that ARE inside .lab-aesthetic.
        # .lab-aesthetic h2 (e.g., "Simulação de Fluidos" inside experiment view)

        # The dashboard grid is inside #tab-experiments (lab-aesthetic).
        # .app-info h3 is inside .lab-aesthetic.

        # Let's check .app-info h3 font family.
        # We need to wait for the grid to render (JS injection).
        page.wait_for_selector('.app-info h3')

        lab_h3_font = page.evaluate("getComputedStyle(document.querySelector('.lab-aesthetic .app-info h3')).fontFamily")
        print(f"Lab H3 font: {lab_h3_font}")

        page.screenshot(path="verification/lab_fonts.png")

        # Open Insight Log
        page.click("button[data-i18n='tab_insights']")
        page.wait_for_selector('.log-aesthetic')

        # Verify Serif for Log
        # .log-aesthetic h2
        log_header_font = page.evaluate("getComputedStyle(document.querySelector('.log-aesthetic h2')).fontFamily")
        print(f"Log header font: {log_header_font}")

        page.screenshot(path="verification/log_fonts.png")

        browser.close()

if __name__ == "__main__":
    verify_fonts()
