# Cashback Hub — Image Assets

Drop case-study images for the **Cashback Hub & Edge Shoreline** case study (`/CashbackHub`) into this folder.

## Required filenames

The case study (`src/data/caseStudies.ts → cashbackHubCaseStudy`) references these slugs. Provide each in **.png/.jpg**, **.avif**, **.webp** (plus optional `-mobile-600` / `-mobile-900` variants for hero/intro images):

| Slug | Section | Purpose |
| --- | --- | --- |
| `hero` | Cover / intro | The headline screenshot (seeded from the existing Cashback image — replace anytime). |
| `journey-clarity` | Solution → Journey clarity | Hub redesign with transaction tables / account summary. |
| `stores-search` | Solution → Stores search | Merchant browsing UI with cashback percentages. |
| `edge-shoreline` | Solution → Edge Shoreline pane | Compact companion view in Edge. |
| `campaign-banners` | Solution → Campaign banners | Triple Cashback Tuesday desktop + mobile. |
| `style-guidelines` | Solution → Style guidelines | Tokens / terminology / branding sheet. |
| `process-research` | Process | User research artifacts. |
| `process-eng` | Process | Engineering / responsive specs. |
| `impact-summary` | Impact | Outcome summary frame. |

## Mobile variants

If you want HiDPI / mobile crops, drop `<slug>-mobile-600.{avif,webp}` and `<slug>-mobile-900.{avif,webp}` alongside the desktop file. The `Seo` / responsive image components will pick the right one.

## Regenerating mobile variants

Run from repo root:

```bash
node -e "const s=require('sharp');(async()=>{for(const f of ['hero','journey-clarity','stores-search','edge-shoreline','campaign-banners','style-guidelines','process-research','process-eng','impact-summary'].map(n=>'public/assets/cashback-hub/'+n)){for(const w of [600,900]){try{await s(f+'.png').resize({width:w}).avif({quality:50}).toFile(f+'-mobile-'+w+'.avif');await s(f+'.png').resize({width:w}).webp({quality:60}).toFile(f+'-mobile-'+w+'.webp');}catch(e){}}}})();"
```
