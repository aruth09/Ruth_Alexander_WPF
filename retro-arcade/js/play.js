// EmulatorJS (https://emulatorjs.org) runs the libretro cores as WebAssembly in the browser.
// Pinned to a release so an upstream change can't break the site; cores are cached on-device after first use.
const EMULATORJS_DATA = "https://cdn.emulatorjs.org/4.2.3/data/";

const errorBox = document.getElementById("error");

function showError(message) {
    errorBox.textContent = message;
    errorBox.hidden = false;
}

// Flush in-game (battery) saves to on-device storage.
function flushSaves() {
    const emulator = window.EJS_emulator;
    if (emulator && emulator.started && emulator.gameManager) {
        try { emulator.gameManager.saveSaveFiles(); } catch (e) { console.warn(e); }
    }
}

async function start() {
    const id = new URLSearchParams(location.search).get("id");
    const game = id && await GameDB.get(id);
    if (!game) {
        showError("Game not found. Go back to the library and add it again.");
        return;
    }
    document.title = game.title + " – Retro Arcade";
    GameDB.update(id, { lastPlayed: Date.now() });

    window.EJS_player = "#game";
    window.EJS_core = SYSTEMS[game.system] ? SYSTEMS[game.system].core : game.system;
    window.EJS_gameUrl = new File([game.data], game.fileName);
    // A stable name keys EmulatorJS's save files and save states to this game.
    window.EJS_gameName = game.title;
    window.EJS_pathtodata = EMULATORJS_DATA;
    window.EJS_color = "#7c5cff";
    window.EJS_backgroundColor = "#000";
    window.EJS_startButtonName = "Tap to play";
    // Keep save states on the phone instead of downloading them, and write battery saves often.
    window.EJS_defaultOptions = { "save-state-location": "browser", "save-save-interval": "30" };

    // Let game audio play even when the iPhone's silent switch is on (Safari 17+).
    if (navigator.audioSession) navigator.audioSession.type = "playback";

    const loader = document.createElement("script");
    loader.src = window.EJS_pathtodata + "loader.js";
    loader.onerror = () => showError("Couldn't load the emulator. Connect to the internet once so it can be downloaded and cached.");
    document.body.append(loader);
}

document.getElementById("back").addEventListener("click", event => {
    event.preventDefault();
    flushSaves();
    // Give IndexedDB a moment to persist before leaving the page.
    setTimeout(() => { location.href = "./"; }, 300);
});
document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "hidden") flushSaves();
});
window.addEventListener("pagehide", flushSaves);

if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js");
}

start().catch(err => showError("Couldn't start the game: " + err.message));
