# XRWay’26 GitHub Pages Website

This folder is a complete static GitHub Pages package for **The 1st International Workshop on XR on the Way (XRWay’26): XR for Walking, Driving, and Everyday Mobility**.

## Quick upload

1. Create a GitHub repository, for example `xrway26`.
2. Upload **all files and folders in this package** to the root of the repository.
3. In GitHub, open **Settings → Pages**.
4. Set **Source** to `Deploy from a branch`, choose `main`, and choose `/ (root)`.
5. Wait for GitHub Pages to publish the site.

No build system is required. The site is plain HTML/CSS/JavaScript and includes `.nojekyll` so GitHub serves the files exactly as uploaded.

## Replace images

Use the same filenames already referenced in `index.html`.

| Image | Path | Recommended resolution | Notes |
|---|---|---:|---|
| Workshop 대문이미지 / hero | `assets/images/hero.jpg` | **2400 × 1350 px** | 16:9 banner. Keep the subject centered or slightly right; the title overlays the left side. |
| Social preview image | `assets/images/og-image.jpg` | **1200 × 630 px** | Used by social media previews. |
| Organizer 사진 | `assets/images/organizers/*.jpg` | **800 × 800 px** | Square portrait. Replace each placeholder using the same file name. |

Current organizer photo filenames:

- `gwangbin-kim.jpg`
- `ammar-al-taie.jpg`
- `ahmed-elsharkawy.jpg`
- `juwon-um.jpg`
- `dohyeon-yeo.jpg`
- `joseph-delpreto.jpg`
- `hiroshi-yasuda.jpg`
- `ian-oakley.jpg`
- `seungjun-kim.jpg`

## Things to update before public launch

- Replace the EasyChair placeholder link in the `#submissions` section of `index.html`.
- Confirm the final ISMAR 2026 wording, dates, publication statement, and registration policy.
- Replace the hero and organizer photo placeholders.
- Add a dedicated workshop contact email if you create one.
- Update the page title/URL metadata if the repository URL changes.

## Content included

- Workshop overview
- Topics of interest
- Multiple submission tracks: Regular Research, Position/WIP, and Case Study/Demo
- Submission instructions
- Important dates
- Preliminary full-day program
- Organizer cards with bios, email links, and homepage links
- Contact section
- CFP as a Markdown file in `assets/docs/CFP.md`
- Calendar file for the workshop date in `assets/calendar/xrway26.ics`

Program Committee Members are intentionally not included.
