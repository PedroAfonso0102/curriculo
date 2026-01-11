import json
import re
import os

def load_translations(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        return json.loads(f.read())

def translate_html(html_content, translations, lang_code):
    new_html = html_content

    # Update HTML lang attribute
    new_html = re.sub(r'<html lang="pt-BR">', f'<html lang="{lang_code}">', new_html)

    # Update Header Links
    lang_block = ""
    if lang_code == 'en':
        lang_block = '<a href="index.html">PT</a>\n            <span>EN</span>\n            <a href="index-es.html">ES</a>'
    elif lang_code == 'es':
        lang_block = '<a href="index.html">PT</a>\n            <a href="index-en.html">EN</a>\n            <span>ES</span>'

    if lang_block:
        new_html = re.sub(
            r'(<div class="lang-links">)([\s\S]*?)(</div>)',
            f'\\1\n            {lang_block}\n        \\3',
            new_html
        )

    lang_data = translations.get(lang_code, {})

    for key, text in lang_data.items():
        if not text:
            continue

        # Regex to find the element with this data-i18n key and its matching closing tag.
        # We capture the tag name in group 2 (\w+).
        # Then we match content (group 3) until we find </tagname>.
        # Note: This simple regex approach assumes we don't have the same tag nested directly inside itself
        # without sufficient separation, but for this specific HTML content (p, h1, li), it should be safe.
        # Pattern: (<(\w+)[^>]*data-i18n=["']{key}["'][^>]*>)(.*?)(</\2>)

        pattern = re.compile(
            r'(<(\w+)[^>]*data-i18n=["\']' + re.escape(key) + r'["\'][^>]*>)(.*?)(</\2>)',
            re.DOTALL
        )

        def replace_match(match):
            # match.group(1): Opening tag
            # match.group(2): Tag name (internal use)
            # match.group(3): Old Content
            # match.group(4): Closing tag
            return f"{match.group(1)}{text}{match.group(4)}"

        new_html = pattern.sub(replace_match, new_html)

    return new_html

def main():
    try:
        translations = load_translations('translations.json')
        with open('index.html', 'r', encoding='utf-8') as f:
            template_html = f.read()

        print("Generating index-en.html...")
        en_html = translate_html(template_html, translations, 'en')
        with open('index-en.html', 'w', encoding='utf-8') as f:
            f.write(en_html)

        print("Generating index-es.html...")
        es_html = translate_html(template_html, translations, 'es')
        with open('index-es.html', 'w', encoding='utf-8') as f:
            f.write(es_html)

        print("Done.")

    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    main()
