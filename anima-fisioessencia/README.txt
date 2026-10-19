Static copy of www.anima-fisioessencia.com (made on 2026-10-19)
===============================================================

Preview: https://babutxa.github.io/anima-fisioessencia/
This folder is the only working copy of the site; changes are committed here.

To view it locally, serve this folder (some carousels need a web server):
  python3 -m http.server 8765 --directory anima-fisioessencia
and open http://127.0.0.1:8765/

Pages:
  index.html                                  Home (Inici)
  activitats-a-fissioessencia/index.html      Activities (Activitats)
  contactar/index.html                        Contact (Contactar)
  privacy-policy/index.html                   Privacy policy
  project/<activity>/index.html               Activity detail pages (11), linked from Activities

Notes:
  - All pages carry <meta name="robots" content="noindex, nofollow">.
  - Everything loads locally; nothing is fetched from other servers.
    The map on the Contact page is a static image
    (wp-content/uploads/contact-map.jpg) that links to Google Maps.
  - wp-content/site/mobile-spacing.css reduces the large vertical spacing of
    the desktop design on phones (max-width 767px). It overrides rules from
    wp-content/uploads/elementor/css/post-*.css.

IMPORTANT if the site is ever published again on a server:
  - Do NOT restore the old WordPress backup from the hosting provider: it is infected.
  - Change all passwords (WordPress, hosting/FTP, database, email).
