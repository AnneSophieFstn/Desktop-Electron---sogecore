const deletebtn = document.querySelector(".deleteBtn");

const deleteTicket = async(id) => {
    const reponse = confirm("Êtes-vous sûr de vouloir supprimer ce ticket ?");
    if(reponse){
        await main.deleteATicket(id);
        document.location.href="dashboard.html";

    }

    return;
    
}