const { remote } = require("electron");
const main = require("../js/main");

const moment = require("moment"); // require

//recupere le formulaire
const Ajoutform = document.querySelector("#AjouterForm");

const Ajouternomemploye = document.querySelector("#nomEmploye");
const Ajoutertypeintervention = document.querySelector("#typeIntervention");
const Ajouterstatutticket = document.querySelector("#statutTicket");

const Ajouterdate = moment().format("YYYY-MM-DD HH:mm:ss");

Ajoutform.addEventListener("submit", async (e) => {
  try {
    e.preventDefault();

    //initialiser les valeurs INPUT vers champs table ticket
    const ticket = {
      attribut_employe: Ajouternomemploye.value,
      type: Ajoutertypeintervention.value,
      status: Ajouterstatutticket.value,
      date_heure_debut_t: Ajouterdate,
      id_user: 1,
    };

    //demande de promesse vers le main
    const Ajouterticket = await main.ajout(ticket);
    console.log(Ajouterticket);
    document.location.href = "dashboard.html";
  } catch (error) {
    console.log(error);
  }
});
