/* MAIN --> Lanceur*/

const { createWindow } = require("./src/js/main");
const { app } = require("electron");

//DATABASE
require("./src/js/database");

require("electron-reload")(__dirname);

app.allowRendererProcessReuse = true;
app.whenReady().then(createWindow);
