

## Replace images

The hero section now uses HTML/CSS only, so there is no workshop 대문이미지 file to replace.

Use the same organizer photo filenames already referenced in `index.html`.

| Image | Path | Recommended resolution | Notes |
|---|---|---:|---|
| Social preview image | `assets/images/og-image.jpg` | **1200 × 630 px** | Used by social media previews. |
| Organizer 사진 | `assets/images/organizers/*.jpg` | **800 × 800 px** | Square portrait. Non-square photos are center-cropped to square by CSS. |

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

- Replace the EasyChair placeholder button/text in the `#submissions` section of `index.html` when the submission site is ready.
- Confirm whether the final workshop date is October 5 or October 6, 2026.
- Replace organizer photo placeholders.
- Update the page URL metadata if the repository URL changes.

## Content included

- Workshop overview
- Topics of interest
- Multiple submission tracks: Regular Research, Position/WIP, and Case Study/Demo
- VGTC formatting instructions with official guideline/template links
- Publication and registration statement
- Important dates
- Preliminary full-day program
- Organizer cards with square photos, short bios, and homepage links
- Contact email: `xrontheway@gmail.com`
- CFP as a Markdown file in `assets/docs/CFP.md`
- Calendar file for the tentative October 5–6 workshop date window in `assets/calendar/xrway26.ics`

Program Committee Members are intentionally not included.
