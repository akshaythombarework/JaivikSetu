import glob
import re

html_files = sorted(glob.glob('*.html'))

for filepath in html_files:
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    orig = content

    # Look for the footer quick links section
    # Target: <li><a href="schemes.html" ...>Schemes...</a></li> inside footer
    parts = content.split('<footer', 1)
    if len(parts) == 2:
        before_footer = parts[0]
        footer_part = '<footer' + parts[1]

        # Check if activities.html already in footer
        if 'activities.html' not in footer_part:
            # Pattern matching schemes in footer
            pattern = r'(<li><a\s+href="schemes\.html"[^>]*>.*?</a></li>)'
            m = re.search(pattern, footer_part)
            if m:
                # Find indentation
                indent_match = re.search(r'\n(\s*)<li><a\s+href="schemes\.html"', footer_part)
                indent = indent_match.group(1) if indent_match else '            '
                addition = f'\n{indent}<li><a href="activities.html" data-i18n="nav_activities">Activities</a></li>'
                footer_part = footer_part[:m.end()] + addition + footer_part[m.end():]
                content = before_footer + footer_part
                print(f'[{filepath}] Added Activities to footer quick navigation')

    if content != orig:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f'[{filepath}] Saved successfully.')
