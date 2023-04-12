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

const getATicket = async (id) => {
  const conn = await getConnection();
  const result = await conn.query("SELECT * FROM tickets WHERE id = ? ", id);
  return result[0];
};

const setATicket = async (id, ticket) => {
  const conn = await getConnection();
  const result = await conn.query("UPDATE tickets SET ? WHERE id = ? ", [ticket, id]);
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
  getATicket,
  setATicket
};
