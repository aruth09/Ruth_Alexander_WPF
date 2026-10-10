# Retro Arcade

A small web app for playing retro games on an iPhone (or any phone or computer) in the browser.
It uses [EmulatorJS](https://emulatorjs.org), which runs RetroArch/libretro emulator cores as WebAssembly.

- **Your games stay on your phone.** ROM files you add get copied into the site's on-device storage (IndexedDB).
  They are never uploaded.
- **Works offline.** After the first time you play a system, the emulator for it is cached, so you can play
  with no internet.
- **Saves are kept.** In-game saves are written to the device every 30 seconds and whenever you leave the game
  or switch apps. Save states from the in-game menu also stay on the device.
- **Touch controls.** You get an on-screen gamepad, and Bluetooth controllers (Xbox, PlayStation, MFi) work too.

## Supported systems

NES, SNES, Game Boy / Color, Game Boy Advance, Nintendo 64, Nintendo DS, Virtual Boy, Sega Master System,
Genesis / Mega Drive, Game Gear, 32X, PlayStation, PC Engine / TurboGrafx-16, Neo Geo Pocket, WonderSwan,
Atari Lynx / 2600 / 7800, ColecoVision and arcade (FinalBurn Neo).

The system is picked from the file extension. For `.zip`, `.7z`, `.bin`, `.iso`, `.cue` and `.chd` files,
the app asks you which system the file is for.

## Putting it on your iPhone

The site has to be served over **HTTPS**, because iOS only enables offline caching on secure sites.
GitHub Pages works and costs nothing:

1. On GitHub, open the repository and go to **Settings → Pages**.
2. Under **Build and deployment**, pick **Deploy from a branch**, then choose `master` and `/ (root)`. Click **Save**.
3. After a minute, open `https://aruth09.github.io/Ruth_Alexander_WPF/retro-arcade/` in **Safari** on your iPhone.
4. Tap **Share → Add to Home Screen**. Always launch it from the home screen icon. That way it opens full screen,
   and iOS won't delete its storage, which Safari can do to sites you haven't visited in a while.

## Adding and playing games

1. Put your ROM files somewhere the Files app can see, like iCloud Drive or On My iPhone.
2. In the app, tap **+ Add games** and pick one or more files.
3. Tap a game, then **Tap to play**. To get back, tap **‹ Library**. The ☰ menu has save and load state,
   control settings and more.

Only use ROMs you have the right to use, such as dumps of cartridges you own or homebrew games.
This project doesn't include or link to any games.

## Notes and limits

- PlayStation games run without a BIOS file thanks to the core's built-in BIOS replacement. Compatibility is
  good but not perfect.
- Older iPhones may struggle with N64 and DS games. 8-bit and 16-bit systems and the GBA run well on pretty much
  any iPhone.
- On iOS 17 and later, sound plays even when the silent switch is on. On older versions, flip the switch off to hear sound.

## Running it locally

Any static web server works, for example:

```sh
cd retro-arcade
python3 -m http.server 8000
```

Then open <http://localhost:8000>. Note that `localhost` only works on the same computer. A phone needs the
HTTPS (GitHub Pages) version.

## Files

| File | Purpose |
| --- | --- |
| `index.html`, `js/library.js` | The game library: add, list and delete games |
| `play.html`, `js/play.js` | The player: loads the ROM from storage into EmulatorJS |
| `js/systems.js` | Supported systems and file extension detection |
| `js/db.js` | IndexedDB storage for ROMs |
| `sw.js`, `manifest.webmanifest` | Offline support and home-screen app setup |
