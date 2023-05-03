const DataTable = require('simple-datatables');

window.addEventListener('DOMContentLoaded', event => {
    // Simple-DataTables
    // https://github.com/fiduswriter/Simple-DataTables/wiki

    const datatablesSimple = document.getElementById('datatablesSimple');
    if (datatablesSimple) {
        new simpleDatatables.DataTable(datatablesSimple, {data: listeTickets}).on('datatable.search', function(query, matched) {
            console.log(query)
        });
    }
});