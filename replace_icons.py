import os
import re

svg_icon = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" style="margin-right: 6px; display: inline-block; vertical-align: -0.125em;"><path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.69-3.117c-.2-.1-1.185-.584-1.37-.652-.185-.067-.32-.1-.453.1-.133.2-.516.652-.633.788-.118.136-.235.153-.435.053-.2-.1-.843-.312-1.605-.985-.592-.528-.992-1.181-1.108-1.375-.117-.195-.012-.3-.112-.399-.09-.09-.2-.233-.3-.35-.1-.117-.133-.2-.2-.33-.067-.136-.034-.25-.017-.35.017-.1 1.37-1.603.453-.633.13-.133.266-.1.4-.067.136.034.266.1.4.2.133.1.2.133.266.267.067.133.034.267-.017.367-.05.1-.453 1.096-.653 1.583-.195.474-.393.41-.54.41-.13 0-.279-.01-.429-.01-.15 0-.395.057-.602.28-.208.224-.796.779-.796 1.898s.812 2.195.925 2.348c.114.153 1.597 2.44 3.868 3.417.54.233.962.373 1.29.479.544.173 1.037.149 1.428.09.435-.064 1.37-.56 1.565-1.1.195-.54.195-1.006.137-1.1-.059-.09-.2-.14-.4-.24M"/></svg>'

svg_icon_btn_submit = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16" style="margin-right: 8px; display: inline-block; vertical-align: -0.125em;"><path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.69-3.117c-.2-.1-1.185-.584-1.37-.652-.185-.067-.32-.1-.453.1-.133.2-.516.652-.633.788-.118.136-.235.153-.435.053-.2-.1-.843-.312-1.605-.985-.592-.528-.992-1.181-1.108-1.375-.117-.195-.012-.3-.112-.399-.09-.09-.2-.233-.3-.35-.1-.117-.133-.2-.2-.33-.067-.136-.034-.25-.017-.35.017-.1 1.37-1.603.453-.633.13-.133.266-.1.4-.067.136.034.266.1.4.2.133.1.2.133.266.267.067.133.034.267-.017.367-.05.1-.453 1.096-.653 1.583-.195.474-.393.41-.54.41-.13 0-.279-.01-.429-.01-.15 0-.395.057-.602.28-.208.224-.796.779-.796 1.898s.812 2.195.925 2.348c.114.153 1.597 2.44 3.868 3.417.54.233.962.373 1.29.479.544.173 1.037.149 1.428.09.435-.064 1.37-.56 1.565-1.1.195-.54.195-1.006.137-1.1-.059-.09-.2-.14-.4-.24M"/></svg>'

svg_icon_float = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16" style="display: block; margin: 0 auto; padding-top: 1px;"><path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.69-3.117c-.2-.1-1.185-.584-1.37-.652-.185-.067-.32-.1-.453.1-.133.2-.516.652-.633.788-.118.136-.235.153-.435.053-.2-.1-.843-.312-1.605-.985-.592-.528-.992-1.181-1.108-1.375-.117-.195-.012-.3-.112-.399-.09-.09-.2-.233-.3-.35-.1-.117-.133-.2-.2-.33-.067-.136-.034-.25-.017-.35.017-.1 1.37-1.603.453-.633.13-.133.266-.1.4-.067.136.034.266.1.4.2.133.1.2.133.266.267.067.133.034.267-.017.367-.05.1-.453 1.096-.653 1.583-.195.474-.393.41-.54.41-.13 0-.279-.01-.429-.01-.15 0-.395.057-.602.28-.208.224-.796.779-.796 1.898s.812 2.195.925 2.348c.114.153 1.597 2.44 3.868 3.417.54.233.962.373 1.29.479.544.173 1.037.149 1.428.09.435-.064 1.37-.56 1.565-1.1.195-.54.195-1.006.137-1.1-.059-.09-.2-.14-.4-.24M"/></svg>'

# Escaped versions for compiled files
svg_icon_esc = svg_icon.replace('"', '\\\"').replace('/', '\\/')
svg_icon_btn_submit_esc = svg_icon_btn_submit.replace('"', '\\\"').replace('/', '\\/')
svg_icon_float_esc = svg_icon_float.replace('"', '\\\"').replace('/', '\\/')

html_files = [f for f in os.listdir('.') if f.endswith('.html') and f != 'index.html']

for file_path in html_files:
    print(f"Processing: {file_path}")
    with open(file_path, 'r', encoding='utf-8') as file:
        content = file.read()
    
    # Replace in unescaped strings (if any)
    content = content.replace("💬 WhatsApp", svg_icon + "WhatsApp")
    content = content.replace("💬 WhatsApp us", svg_icon + "WhatsApp us")
    content = content.replace("💬 Hantar ke WhatsApp kami", svg_icon_btn_submit + " Hantar ke WhatsApp kami")
    content = content.replace('aria-label="WhatsApp FLEKS Epoxy">💬', 'aria-label="WhatsApp FLEKS Epoxy">' + svg_icon_float)
    
    # Replace in escaped strings (inside template string on line 185)
    content = content.replace("💬 WhatsApp", svg_icon_esc + "WhatsApp")
    content = content.replace("💬 WhatsApp us", svg_icon_esc + "WhatsApp us")
    content = content.replace("💬 Hantar ke WhatsApp kami", svg_icon_btn_submit_esc + " Hantar ke WhatsApp kami")
    content = content.replace('aria-label=\\"WhatsApp FLEKS Epoxy\\">💬', 'aria-label=\\"WhatsApp FLEKS Epoxy\\">' + svg_icon_float_esc)
    content = content.replace('aria-label=\\"WhatsApp FLEKS Epoxy\\">💬\\u003c\\/a\\u003e', 'aria-label=\\"WhatsApp FLEKS Epoxy\\">' + svg_icon_float_esc + '\\u003c\\/a\\u003e')
    content = content.replace('\\uD83D\\uDCAC WhatsApp', svg_icon_esc + 'WhatsApp')
    content = content.replace('\\uD83D\\uDCAC', svg_icon_float_esc)
    
    with open(file_path, 'w', encoding='utf-8') as file:
        file.write(content)

print("Replacement complete for all language files!")
