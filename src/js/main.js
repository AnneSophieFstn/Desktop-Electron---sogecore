const { Notification, BrowserWindow } = require("electron");
const { getConnection } = require("./database");

let window;

function createWindow() {
  window = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true, //responsive design
      contextIsolation: false,
    },
  });

  window.loadFile("./src/ui/index.html");
}

module.exports = {
  createWindow,
};
