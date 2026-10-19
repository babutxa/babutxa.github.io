# Plan: move anima-fisioessencia.com to GitHub Pages

Goal: the cleaned static site is served at www.anima-fisioessencia.com from a
GitHub account owned by Aina, and she only pays for the domain
(around 15-17 EUR/year at cdmon, without VAT).

Context:

- Preview: https://babutxa.github.io/anima-fisioessencia/ (noindex).
- Domain and old hosting are both at cdmon, on Aina's account.
- The old server (WordPress) is infected. Do not open it, and do not
  restore any backup from it.

## 1. cdmon (Aina)

The domain expires on **2026-11-23** (WHOIS). It has renewed every year since
2020, so automatic renewal is probably on, but this is not confirmed.

- [ ] Aina calls cdmon support (93 826 49 11) and asks:
  - [ ] Help to get back into her account (then she sets a new password).
  - [ ] Does the domain renew automatically, and with which card?
  - [ ] If she cancels the hosting, does the domain stay as it is (is it
        part of the hosting package)?
- [ ] If the domain is not affected, cancel the hosting right away (the old
      site is infected). The address shows nothing until step 3 is done.
- [ ] Make sure the domain is renewed before 2026-11-23. With automatic
      renewal, cdmon charges it 14 days before expiry (around 2026-11-09).
      In the panel: Renewals → Renewal center; the auto-renewal icon of the
      domain must be green, and it needs a saved card or account balance.

## 2. GitHub account for Aina

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

## 3. Point the domain to GitHub Pages

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

## 4. Email

- [ ] Aina cancels Google Workspace (the hola@ email), after saving anything
      she wants to keep. Then remove the Google MX/TXT records at cdmon.
- [ ] Optional: keep receiving mail sent to hola@anima-fisioessencia.com
      with a free cdmon email redirect to Aina's Gmail (needs only the
      domain at cdmon, no hosting). Create the redirect in the panel,
      validate it with the code sent to the Gmail (valid 48 h), and point
      the MX record to cdmon. Receive only: she cannot send as hola@.
      Docs: https://helpdesk.cdmon.com/portal/en/kb/articles/how-to-set-up-email-redirects-in-static-dns

## 5. Cleanup

- [ ] Remove the preview from babutxa.github.io (delete the
      `anima-fisioessencia/` folder there).
- [ ] Update README.txt with the new repo and URL.

## Optional site tweaks

- [ ] Rename `project/recuperacio-post-part-u-abdominals-hipopressius`
      ("-u-" typo in the original URL) and update the links.
