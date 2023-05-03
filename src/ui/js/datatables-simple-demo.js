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
            "Modifier",
            "Supprimer"
        ],
        data: dataTicket.map(item => {
            return [
                item.id,
                item.type,
                item.attribut_employe,
                moment(item.date_heure_debut_t).format("LL"),
                item.status,
                item.date_heure_fin_t,
                `<button class="editBtn btn btn-secondary btn-sm" data-toggle="modal" data-target="#editModal" onClick="editBtnModal('${item.id}')">Modifier</button>`,
                `<button class="deleteBtn btn btn-danger btn-sm" onClick="deleteTicket('${item.id}')">Supprimer</button>`
            ]
    })
    }

    const myTable = document.getElementById("datatablesSimple");
    new simpleDatatables.DataTable(myTable, { data: myDataMap })
}


window.addEventListener('DOMContentLoaded', event => {
    // Simple-DataTables
    // https://github.com/fiduswriter/Simple-DataTables/wiki

    getAllTicketsDB()

});