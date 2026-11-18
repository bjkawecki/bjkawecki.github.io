.PHONY: serve build install serve-drafts css a11y a11y-install

# Dev-Server: Tailwind einmal bauen, dann watch + Jekyll (CSS-Änderungen ohne Neustart)
serve:
	npm run serve

# Dev-Server inkl. Entwürfe (--drafts)
serve-drafts:
	npm run serve_d

# Nur Tailwind-CSS neu bauen (Klassen aus HTML/Includes einlesen)
css:
	npx tailwindcss -i ./assets/css/tailwind.css -o ./assets/css/main.css

# Site bauen (Tailwind + Jekyll)
build:
	npm run build

# Abhängigkeiten installieren (Ruby + Node)
install:
	bundle install && npm install

# Playwright Chromium einmalig installieren (für make a11y)
a11y-install:
	npm run a11y:install

# WCAG-Kontrastprüfung (axe) gegen gebaute _site, Light + Dark
a11y: build
	npm run a11y

# Kurzform: "make" startet den Dev-Server
default: serve
