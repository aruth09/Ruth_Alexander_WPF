// Systems supported by EmulatorJS that work well in mobile Safari.
// `core` is the EmulatorJS system id passed as EJS_core.
const SYSTEMS = {
    nes:       { name: "NES / Famicom",        core: "nes",       exts: ["nes", "fds", "unf", "unif"] },
    snes:      { name: "Super Nintendo",       core: "snes",      exts: ["smc", "sfc", "swc", "fig", "bs"] },
    gb:        { name: "Game Boy / Color",      core: "gb",        exts: ["gb", "gbc", "dmg"] },
    gba:       { name: "Game Boy Advance",     core: "gba",       exts: ["gba", "agb"] },
    n64:       { name: "Nintendo 64",          core: "n64",       exts: ["n64", "z64", "v64"] },
    nds:       { name: "Nintendo DS",          core: "nds",       exts: ["nds"] },
    vb:        { name: "Virtual Boy",          core: "vb",        exts: ["vb", "vboy"] },
    segaMS:    { name: "Sega Master System",   core: "segaMS",    exts: ["sms"] },
    segaMD:    { name: "Sega Genesis / Mega Drive", core: "segaMD", exts: ["md", "gen", "smd", "68k", "sgd"] },
    segaGG:    { name: "Sega Game Gear",       core: "segaGG",    exts: ["gg"] },
    sega32x:   { name: "Sega 32X",             core: "sega32x",   exts: ["32x"] },
    psx:       { name: "PlayStation",          core: "psx",       exts: ["pbp"] },
    pce:       { name: "PC Engine / TurboGrafx-16", core: "pce",  exts: ["pce", "sgx"] },
    ngp:       { name: "Neo Geo Pocket",       core: "ngp",       exts: ["ngp", "ngc"] },
    ws:        { name: "WonderSwan",           core: "ws",        exts: ["ws", "wsc"] },
    lynx:      { name: "Atari Lynx",           core: "lynx",      exts: ["lnx"] },
    atari2600: { name: "Atari 2600",           core: "atari2600", exts: ["a26"] },
    atari7800: { name: "Atari 7800",           core: "atari7800", exts: ["a78"] },
    coleco:    { name: "ColecoVision",         core: "coleco",    exts: ["col"] },
    arcade:    { name: "Arcade (FinalBurn Neo)", core: "arcade",  exts: [] }
};

// Extensions that could belong to several systems; the user picks one.
const AMBIGUOUS_EXTS = ["zip", "7z", "bin", "iso", "cue", "chd", "img", "rom"];

function fileExtension(name) {
    const dot = name.lastIndexOf(".");
    return dot === -1 ? "" : name.slice(dot + 1).toLowerCase();
}

// Returns a system key, or null if the user needs to choose.
function detectSystem(fileName) {
    const ext = fileExtension(fileName);
    if (AMBIGUOUS_EXTS.includes(ext)) return null;
    for (const key in SYSTEMS) {
        if (SYSTEMS[key].exts.includes(ext)) return key;
    }
    return null;
}

function gameTitle(fileName) {
    const dot = fileName.lastIndexOf(".");
    return (dot > 0 ? fileName.slice(0, dot) : fileName).trim();
}
