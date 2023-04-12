const deletebtn = document.querySelector(".deleteBtn");

const deleteTicket = async(id) => {
    const reponse = confirm("ou lé sur ?");
    if(reponse){
        await main.deleteATicket(id);
        document.location.href="index.html";

    }

    return;
    
}