// Tiny IndexedDB wrapper. ROM files are stored on the device and never uploaded.
const DB_NAME = "retro-arcade";
const DB_VERSION = 1;
const STORE = "games";

function openDb() {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open(DB_NAME, DB_VERSION);
        request.onupgradeneeded = () => {
            const db = request.result;
            if (!db.objectStoreNames.contains(STORE)) {
                db.createObjectStore(STORE, { keyPath: "id" });
            }
        };
        request.onsuccess = () => resolve(request.result);
        request.onerror = () => reject(request.error);
    });
}

async function withStore(mode, fn) {
    const db = await openDb();
    return new Promise((resolve, reject) => {
        const tx = db.transaction(STORE, mode);
        const result = fn(tx.objectStore(STORE));
        tx.oncomplete = () => resolve(result && "result" in result ? result.result : undefined);
        tx.onerror = () => reject(tx.error);
        tx.onabort = () => reject(tx.error);
    });
}

const GameDB = {
    // Metadata only, without the (possibly large) ROM data.
    async list() {
        const games = await withStore("readonly", store => store.getAll());
        return games
            .map(({ data, ...meta }) => meta)
            .sort((a, b) => (b.lastPlayed || b.added) - (a.lastPlayed || a.added));
    },
    get(id) {
        return withStore("readonly", store => store.get(id));
    },
    put(game) {
        return withStore("readwrite", store => store.put(game));
    },
    async update(id, changes) {
        const game = await this.get(id);
        if (!game) return;
        await this.put({ ...game, ...changes });
    },
    remove(id) {
        return withStore("readwrite", store => store.delete(id));
    }
};
