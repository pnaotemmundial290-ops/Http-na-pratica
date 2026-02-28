# HTTP na Prática 🚀

Projeto educacional em construção...

Este repositório vai ensinar HTTP, APIs REST e backend do zero!

## 🔄 Status
Em desenvolvimento - aguarde a primeira versão completa!

---

## 📱 Weekly Routine Wallpaper

`wallpaper.html` — A dark-themed 1080×1920 mobile wallpaper displaying a full weekly routine (Mon–Sun), built with pure inline HTML/CSS (no external dependencies).

### Features
- **Dark navy/blue** theme with colored accent blocks
- **Mon–Fri** core schedule (8 time blocks, including the 19:00–20:00 split:  
  Martial Arts on Mon/Wed/Fri · Free/Project on Tue/Thu)
- **Sat–Sun** build & restore blocks
- **Footer** with 6 daily micro-tasks
- Fixed 1080 × 1920 px canvas — no scrolling needed

### Export as PNG

**Option A — Chrome/Edge DevTools (recommended, free)**
1. Open `wallpaper.html` in Chrome or Edge.
2. Open DevTools (`F12`) → toggle Device Toolbar (`Ctrl+Shift+M`).
3. Set custom size: **1080 × 1920**.
4. Open Command Palette (`Ctrl+Shift+P`) → run **"Capture full size screenshot"**.  
   The PNG is saved automatically.

**Option B — Puppeteer (Node.js)**
```bash
npx puppeteer-core screenshot \
  --url=file://$(pwd)/wallpaper.html \
  --viewport=1080,1920 \
  --output=wallpaper.png
```

**Option C — Chromium CLI**
```bash
chromium --headless --no-sandbox --screenshot=wallpaper.png \
  --window-size=1080,1920 wallpaper.html
```