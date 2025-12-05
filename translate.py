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

    # --- Update Header Navigation (Active State) ---
    # The source (index.html) has PT active:
    # <span class="tab-item active"><span class="tab-label">PT</span></span>
    # <a href="index-es.html" class="tab-item"><span class="tab-label">ES</span></a>
    # <a href="index-en.html" class="tab-item"><span class="tab-label">EN</span></a>

    # We need to construct the block for the target language.

    tab_pt = '<a href="index.html" class="tab-item"><span class="tab-label">PT</span></a>'
    tab_es = '<a href="index-es.html" class="tab-item"><span class="tab-label">ES</span></a>'
    tab_en = '<a href="index-en.html" class="tab-item"><span class="tab-label">EN</span></a>'

    if lang_code == 'pt':
        tab_pt = '<span class="tab-item active"><span class="tab-label">PT</span></span>'
    elif lang_code == 'es':
        tab_es = '<span class="tab-item active"><span class="tab-label">ES</span></span>'
    elif lang_code == 'en':
        tab_en = '<span class="tab-item active"><span class="tab-label">EN</span></span>'

    # Regex to replace the content inside <div class="tab-stretch">...</div>
    # Pattern looks for the div and replaces everything inside it.

    new_tabs_content = f'\n                {tab_pt}\n                {tab_es}\n                {tab_en}\n            '

    new_html = re.sub(
        r'(<div class="tab-stretch">)([\s\S]*?)(</div>)',
        f'\\1{new_tabs_content}\\3',
        new_html
    )

    # --- Translate "Contato" Button ---
    # The button is: <a href="mailto:..." class="action-item">Contato</a>
    # We verify if we have a translation for it. Usually it's hardcoded in HTML but we can regex it.
    contact_translation = "Contact" if lang_code == 'en' else "Contacto" if lang_code == 'es' else "Contato"

    new_html = re.sub(
        r'(<a href="mailto:[^"]+" class="action-item">)(.*?)(</a>)',
        f'\\1{contact_translation}\\3',
        new_html
    )

    # --- General Data-i18n Replacement ---
    lang_data = translations.get(lang_code, {})

    for key, text in lang_data.items():
        if not text:
            continue

        pattern = re.compile(
            r'(<(\w+)[^>]*data-i18n=["\']' + re.escape(key) + r'["\'][^>]*>)(.*?)(</\2>)',
            re.DOTALL
        )

        def replace_match(match):
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
