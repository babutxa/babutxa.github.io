# Plan: move anima-fisioessencia.com to GitHub Pages

Goal: the cleaned static site is served at www.anima-fisioessencia.com from a
GitHub account owned by Aina, and she only pays for the domain.

Current state (2026-10-19):

- The site is cleaned (malware and spam removed) and fully static.
- Preview: https://babutxa.github.io/anima-fisioessencia/ (noindex).
- Domain and old hosting are both at cdmon, on Aina's account.
- The old server (WordPress) is still infected. Do not open it.

## 1. Urgent

- [ ] Aina renews the domain at cdmon **before 2026-11-23**.
- [ ] Aina recovers access to her cdmon account. She will call cdmon support
      (93 826 49 11), then changes the password.

## 2. Pending content decisions

- [ ] Optional: rename `project/recuperacio-post-part-u-abdominals-hipopressius`
      ("-u-" typo in the original URL) and update the links.

Done:

- [x] Floating WhatsApp button removed (it used the wrong number).
- [x] Google Calendar removed from the activity pages.
- [x] Contact page shows Aina's personal email instead of hola@ (the domain
      email will be cancelled).

## 3. GitHub account for Aina

- [ ] Aina creates a free GitHub account with her own email, and enables
      two-factor authentication.
- [ ] Aina adds Alba (babutxa) as a collaborator, so Alba can keep
      maintaining the site.
- [ ] Create the repo `anima-fisioessencia` (public) in Aina's account.
- [ ] Push this folder with its history:
      ```
      cd ~/Documents/babutxa.github.io
      git subtree split --prefix=anima-fisioessencia -b anima-export
      git push git@github.com:<aina-user>/anima-fisioessencia.git anima-export:main
      git branch -D anima-export
      ```
- [ ] Settings → Pages: deploy from branch `main`, folder `/ (root)`.
- [ ] Check the site at https://<aina-user>.github.io/anima-fisioessencia/.
- [ ] Settings → Pages: verify the domain anima-fisioessencia.com
      (TXT record at cdmon). This prevents other accounts from claiming it.

## 4. Point the domain to GitHub Pages

Do this once the GitHub site works and Aina has cdmon access.

- [ ] Add a `CNAME` file with `www.anima-fisioessencia.com`, or set the
      custom domain in Settings → Pages.
- [ ] DNS at cdmon:
  - Change only the web records. Leave MX/TXT until the email is cancelled.
  - Apex `anima-fisioessencia.com`: replace the A record (185.66.41.44) with:
    - A 185.199.108.153
    - A 185.199.109.153
    - A 185.199.110.153
    - A 185.199.111.153
  - `www`: CNAME → `<aina-user>.github.io.`
- [ ] Wait for DNS propagation, then enable "Enforce HTTPS".
- [ ] Remove `<meta name="robots" content="noindex, nofollow">` from all
      pages, so Google can index the site again.
- [ ] Check every page and link on the real domain.

## 5. Cleanup

- [ ] Cancel the hosting at cdmon. Keep the domain. Do not restore any
      backup: it is infected.
- [ ] Aina cancels Google Workspace (the hola@ email), after saving anything
      she wants to keep. Then remove the Google MX/TXT records at cdmon.
- [ ] Remove the preview from babutxa.github.io (delete the
      `anima-fisioessencia/` folder there).
- [ ] Update README.txt with the new repo and URL.
