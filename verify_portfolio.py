from playwright.sync_api import sync_playwright

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        try:
            page.goto("http://localhost:5173")
            page.wait_for_load_state("networkidle")

            # Check for Download Resume button
            print("Checking for Download Resume button...")
            download_btn = page.get_by_text("Download Resume")
            if download_btn.is_visible():
                print("Download Resume button found.")
            else:
                print("Download Resume button NOT found.")

            # Take screenshot of Hero section
            page.screenshot(path="hero_screenshot.png")
            print("Hero screenshot taken.")

            # Check for Testimonials
            print("Checking for Testimonials section...")
            testimonials_header = page.get_by_text("What People Say")
            testimonials_header.scroll_into_view_if_needed()

            if testimonials_header.is_visible():
                print("Testimonials header found.")
            else:
                print("Testimonials header NOT found.")

            # Take screenshot of Testimonials section
            # We can select the section by id
            page.locator("#testimonials").screenshot(path="testimonials_screenshot.png")
            print("Testimonials screenshot taken.")

            # Check Footer LinkedIn link
            footer_link = page.locator("footer a[href*='linkedin.com']")
            if footer_link.is_visible():
                 print(f"LinkedIn link found: {footer_link.get_attribute('href')}")
            else:
                 print("LinkedIn link NOT found.")

        except Exception as e:
            print(f"Error: {e}")
        finally:
            browser.close()

if __name__ == "__main__":
    run()
