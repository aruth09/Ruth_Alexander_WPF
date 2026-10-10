const romInput = document.getElementById("rom-input");
const libraryList = document.getElementById("library");
const emptyState = document.getElementById("empty");
const storageInfo = document.getElementById("storage");
const systemDialog = document.getElementById("system-dialog");
const systemSelect = document.getElementById("system-select");
const toast = document.getElementById("toast");

for (const key in SYSTEMS) {
    const option = document.createElement("option");
    option.value = key;
    option.textContent = SYSTEMS[key].name;
    systemSelect.append(option);
}

function showToast(message) {
    toast.textContent = message;
    toast.hidden = false;
    clearTimeout(showToast.timer);
    showToast.timer = setTimeout(() => { toast.hidden = true; }, 3000);
}

function askSystem(fileName) {
    return new Promise(resolve => {
        document.getElementById("system-dialog-file").textContent = fileName;
        systemDialog.returnValue = "";
        systemDialog.addEventListener("close", () => {
            resolve(systemDialog.returnValue === "ok" ? systemSelect.value : null);
        }, { once: true });
        systemDialog.showModal();
    });
}

function formatSize(bytes) {
    if (bytes >= 1073741824) return (bytes / 1073741824).toFixed(1) + " GB";
    if (bytes >= 1048576) return (bytes / 1048576).toFixed(1) + " MB";
    return Math.max(1, Math.round(bytes / 1024)) + " KB";
}

async function importFiles(files) {
    let added = 0;
    for (const file of files) {
        const system = detectSystem(file.name) || await askSystem(file.name);
        if (!system) continue;
        // Copy the bytes so the game no longer depends on the picked file.
        const data = new Blob([await file.arrayBuffer()]);
        await GameDB.put({
            id: crypto.randomUUID ? crypto.randomUUID() : String(Date.now()) + Math.random(),
            title: gameTitle(file.name),
            fileName: file.name,
            system,
            size: file.size,
            added: Date.now(),
            lastPlayed: 0,
            data
        });
        added++;
    }
    if (added) {
        // Ask Safari not to evict our storage (granted automatically for home-screen apps).
        if (navigator.storage && navigator.storage.persist) navigator.storage.persist();
        showToast(`Added ${added} game${added === 1 ? "" : "s"}`);
    }
    render();
}

function gameCard(game) {
    const li = document.createElement("li");
    li.className = "game";

    const play = document.createElement("a");
    play.className = "game-play";
    play.href = "play.html?id=" + encodeURIComponent(game.id);

    const badge = document.createElement("span");
    badge.className = "badge badge-" + game.system;
    badge.textContent = game.system.replace(/^sega/, "").toUpperCase();

    const info = document.createElement("span");
    info.className = "game-info";
    const title = document.createElement("strong");
    title.textContent = game.title;
    const meta = document.createElement("span");
    meta.className = "small muted";
    meta.textContent = `${SYSTEMS[game.system]?.name || game.system} · ${formatSize(game.size)}`;
    info.append(title, meta);
    play.append(badge, info);

    const remove = document.createElement("button");
    remove.className = "game-remove";
    remove.setAttribute("aria-label", "Delete " + game.title);
    remove.textContent = "✕";
    remove.addEventListener("click", async () => {
        if (!confirm(`Delete "${game.title}" from this device?`)) return;
        await GameDB.remove(game.id);
        render();
    });

    li.append(play, remove);
    return li;
}

async function render() {
    const games = await GameDB.list();
    libraryList.replaceChildren(...games.map(gameCard));
    emptyState.hidden = games.length > 0;

    if (navigator.storage && navigator.storage.estimate) {
        const { usage, quota } = await navigator.storage.estimate();
        storageInfo.textContent = `Using ${formatSize(usage || 0)} of ${formatSize(quota || 0)} available storage.`;
    }
}

romInput.addEventListener("change", () => {
    const files = [...romInput.files];
    romInput.value = "";
    importFiles(files).catch(err => showToast("Import failed: " + err.message));
});

const isStandalone = window.matchMedia("(display-mode: standalone)").matches || navigator.standalone;
const isIOS = /iPhone|iPad|iPod/.test(navigator.userAgent) ||
    (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
document.getElementById("install-hint").hidden = !(isIOS && !isStandalone);

if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js");
}

render();
