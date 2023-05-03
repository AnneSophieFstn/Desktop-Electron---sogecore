 // CONTROLLER EDIT 
 const openModal = document.querySelector(".modal");
 const btnHide = document.querySelectorAll(".closeBtn");
 const modifierform = document.querySelector("#AjouterForm");

 let modifierID;

 const editBtnModal = async(id) => {
    await showModal();    
    
    const ticket = await main.getATicket(id)

    console.log("ticket: ", ticket)
    
    typeIntervention.value = ticket.type;
    nomEmploye.value = ticket.attribut_employe;
    statutTicket.value = ticket.status;
    travail.value = ticket.travail_effectuer;

    modifierID = id;
 };

 const showModal = async () => {
   await openModal.classList.add("show");
   openModal.style.display = "block";
   openModal.removeAttribute("aria-hidden");
 };


 btnHide.forEach((btnC) => {
  btnC.addEventListener("click", async () => {
    try {
    openModal.classList.remove("show");
      openModal.style.display = "none";
    } catch (error) {
      console.log(error);
    }
  });
});

// pour modifier les données
modifierform.addEventListener("submit", async(e) =>{
    try {
        e.preventDefault();

        //initialiser les valeurs INPUT vers champs table tickets
        const modifTicket = {
            type: typeIntervention.value,
            attribut_employe: nomEmploye.value,
            status: statutTicket.value,
            travail_effectuer: travail.value
        };
        console.log(modifTicket);
        //demande de promesse vers le main
        const Modifierticket = await main.setATicket(modifierID, modifTicket);
        document.location.href="index.html";

        

    } catch(error) {
        console.log(error);
    }
});