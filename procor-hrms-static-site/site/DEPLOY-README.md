# Procor HRMS website — deployment & owner guide

Written for someone who is not a developer. Follow it top to bottom.

---

## What you have

| File | What it is |
|---|---|
| `procor-hrms-static-site.zip` | **The website.** 25 pages plus shared assets. This is what goes on www.procorhrms.com |
| `procor-hrms.html` | The same site as a single file. Useful for previewing or emailing to someone. Not for the live site. |
| `sitemap.xml`, `robots.txt` | Already inside the zip. Loose copies included for reference. |

Tech stack: plain HTML, CSS and JavaScript. No framework, no build step, no server code, no database. That is deliberate — nothing to update, nothing to break, and any web host can serve it.

---

## Step 1 — Connect lead notifications (do this first)

**Right now nothing emails you automatically.** If someone submits the form today, their mail client opens pre-filled to info@procor.co.in and they have to press send. Most people will. Some will not.

Fifteen minutes fixes this permanently. You need a Google account.

1. Go to <https://sheets.new> and create a sheet called **Procor HRMS leads**.
2. Menu: **Extensions → Apps Script**. Delete whatever is in the editor.
3. Paste this in:

```javascript
const NOTIFY = 'info@procor.co.in';   // who gets the email

function doPost(e) {
  const lead = JSON.parse(e.postData.contents);
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];

  if (sheet.getLastRow() === 0) {
    sheet.appendRow(['Received', 'Name', 'Email', 'Company', 'Phone',
                     'Headcount', 'Entities', 'Using today', 'Message', 'Page', 'Fill seconds']);
  }
  sheet.appendRow([new Date(), lead.name || '', lead.email || '', lead.company || '',
                   lead.phone || '', lead.headcount || '', lead.entities || '',
                   lead.current || '', lead.message || '', lead.page || '', lead.fillSeconds || '']);

  MailApp.sendEmail({
    to: NOTIFY,
    subject: 'New website lead: ' + (lead.company || lead.email),
    body: Object.keys(lead).map(function (k) { return k + ': ' + lead[k]; }).join('\n')
  });

  return ContentService.createTextOutput('ok');
}
```

4. Click **Deploy → New deployment → Web app**. Set **Execute as: Me** and **Who has access: Anyone**. Deploy, approve the permission prompt, copy the web app URL.
5. Open `assets/app.js` from the zip in Notepad or TextEdit. Near the top find:

```javascript
formEndpoint: '',
```

Paste your URL between the quotes, save, re-upload that one file.

From then on: **visitor submits → row appears in your Google Sheet → email lands in info@procor.co.in → visitor sees a confirmation on screen.** If Google is ever unreachable the form falls back to the visitor's mail client, and the on-screen message gives them your address and phone. A lead is never silently lost.

Spam protection is already built in: a hidden field no human can see, plus the seconds taken to fill the form recorded in the sheet so bots are easy to spot.

## Step 2 — Put it online

1. Unzip `procor-hrms-static-site.zip`.
2. Upload everything **inside** the `site` folder to your web root. You should end up with `index.html`, `sitemap.xml`, `robots.txt` and the folders `assets/`, `modules/`, `compliance/` and so on at the top level.
3. Make sure HTTPS is on. Any host works: Netlify, Vercel, Cloudflare Pages, Hostinger, GoDaddy, cPanel.

If your host lets you set headers, add:

```
Strict-Transport-Security: max-age=31536000; includeSubDomains
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
```

## Step 3 — Tell Google about it

1. <https://search.google.com/search-console> → add property `www.procorhrms.com` → verify (your host or domain registrar can help).
2. Submit `https://www.procorhrms.com/sitemap.xml`.
3. Optional: add Google Analytics by pasting its snippet before `</body>` in each page.

---

## Website owner maintenance guide

### Where everything lives

```
site/
├── index.html                the home page
├── compliance/index.html     one folder per page
├── modules/payroll/index.html
├── assets/
│   ├── app.js                page content + all settings
│   ├── site.css              all styling
│   ├── logo-mark.webp        navbar logo, light theme
│   ├── logo-mark-dark.webp   navbar logo, dark theme
│   ├── logo-full.webp        footer logo, light theme
│   ├── logo-full-dark.webp   footer logo, dark theme
│   ├── og-image.png          picture shown when the site is shared
│   └── favicon.png           browser tab icon
├── sitemap.xml
└── robots.txt
```

**The key thing to understand:** the text for the 11 module pages and the 13 content pages is not in the HTML files. It lives in `assets/app.js`, in two lists called `MODULES` and `PAGES`. That is why there is one template instead of 24 copies to keep in sync.

### Changing your phone, email or address

Open `assets/app.js`, edit the `CONFIG` block near the top, save, upload. It updates the footer, the contact page and the Google listing data at once.

```javascript
const CONFIG = {
  legalEntity: 'Procor LLP',
  address:      'New Delhi',
  phone:        '+91 99999 54416',
  salesEmail:   'info@procor.co.in',
  supportEmail: '',
  portalUrl:    '',      // add your app login URL and "Sign in" reappears in the menu
  formEndpoint: '',      // your Apps Script URL from Step 1
  siteUrl:      'https://www.procorhrms.com'
};
```

### Changing text on a module page

In `assets/app.js` find `const MODULES`, then the module you want, e.g. `payroll`. Each entry has:

- `t` — the name shown as the heading
- `sub` — the line under the heading
- `d` — the intro paragraph
- `cap` — the chips in the grey band
- `f` — the four "What you get" cards
- `who`, `replaces` — two of the three columns lower down
- `faq` — the questions at the bottom

Edit the text between the quotes. Do not remove the quotes or the commas.

### Changing text on the home page

The home page is ordinary HTML. Open `index.html`, use Ctrl+F to find the sentence, and edit it. Anything between `>` and `<` is visible text.

### Changing SEO titles and descriptions

In `assets/app.js` find `const META`. Each line reads `page: ['Title', 'Description', '/url/']`. Keep titles under roughly 60 characters and descriptions under 155.

**Important:** each page's title and description are also written into its own `index.html`. If you change `META`, change the matching `<title>` and `<meta name="description">` in that HTML file too, or Google will keep reading the old one.

### Replacing the logo

Replace the four files in `assets/`, keeping the same filenames. You need a light and a dark version of each, with transparent backgrounds — otherwise the logo disappears when a visitor's phone is in dark mode. That is exactly the bug that was fixed in this pass.

### Adding a whole new page

This one needs a developer, or send it back to me. It means an entry in `PAGES`, a line in `META`, a sitemap entry and a new folder. Roughly twenty minutes.

### Publishing a change

Upload the changed file over the old one, then hard-refresh (Ctrl+Shift+R). No build step, nothing to compile.

### Undoing a bad change

**Keep a copy of the working zip before you edit anything.** To roll back, re-upload the old file. For proper version history, put the `site` folder in a free GitHub repository and connect it to Netlify — then every change is tracked and you can revert in one click. Not required, but worth it if more than one person will edit the site.

### Do you need a CMS?

No. A CMS means a database, logins, updates and a monthly cost, for a site whose text changes a few times a year. If that changes — a blog, regular case studies — revisit it then.

---

## Still outstanding

**Real product screenshots.** Every product view is hand-built and labelled "Sample view" with representative data. Honest, but real screenshots with client data blurred would do more for conversion than anything else left on this list.

**Legal review.** The Privacy, Terms and Cookie pages are written for your actual situation — processor vs controller, the DPDP Act, Indian statutory retention — but they are a starting draft, not counsel's work.

**Client evidence.** You have ruled out testimonials. Anonymised profiles would still help: "a 1,200-employee QSR chain across four states."

**Security page specifics.** It deliberately claims no certifications. Once you can state hosting region, backup frequency and retention periods, add them — enterprise reviewers ask for exactly those three.
