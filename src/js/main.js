const { Notification, BrowserWindow } = require("electron");
const { getConnection } = require("./database");

let window;

const getAllTickets = async () => {
  const conn = await getConnection();
  const result = await conn.query("SELECT * FROM tickets");
  return result;
};

const ajout = async (ticket) => {
  const conn = await getConnection();
  const result = await conn.query("INSERT INTO tickets SET ?", ticket);
  return await result.json;
};

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
  getAllTickets,
  ajout,
};
