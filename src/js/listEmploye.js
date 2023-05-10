const dataEmployes = document.querySelector("#nomEmploye");

const getAllEmployes = async () => {
    listeEmployes = await main.getAllEmployes();
    renderProducts(listeEmployes);
  };
  
  
  async function init() {
    getAllEmployes();
  };
  
  init();

  function renderProducts(users) {
    users.forEach((user) => {
      dataEmployes.innerHTML += `
        <option value="${user.user_name}">${user.user_name}</option>
      `;
    });
  }