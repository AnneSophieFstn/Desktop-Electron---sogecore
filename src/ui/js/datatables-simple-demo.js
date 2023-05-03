const mainD = require("../js/main")

var dataTicket;

const getAllTicketsDB = async () => {
    
    let listeTickets = await mainD.getAllTickets()

    dataTicket = listeTickets

    let myDataMap = {
        headings: [
            "Id",
            "Type",
            "Employé",
            "Créer le",
            "Status",
            "Terminée le",
        ],
        data: dataTicket.map(item => [
            item.id,
            item.type,
            item.attribut_employe,
            moment(item.date_heure_debut_t).format("LL"),
            item.status,
            item.date_heure_fin_t
        ])
    }

    const myTable = document.getElementById("datatablesSimple");
    new simpleDatatables.DataTable(myTable, { data: myDataMap })
}


window.addEventListener('DOMContentLoaded', event => {
    // Simple-DataTables
    // https://github.com/fiduswriter/Simple-DataTables/wiki

    getAllTicketsDB()

});