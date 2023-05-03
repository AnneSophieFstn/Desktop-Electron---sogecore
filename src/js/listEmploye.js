const dataEmployes = document.querySelector("#nomEmploye");
console.log(dataEmployes);

const getAllEmployes = async () => {
    listeEmployes = await main.getAllEmployes();
    renderProducts(listeEmployes);
  };
  
  
  async function init() {
    getAllEmployes();
  };
  
  init();

  function renderProducts(users) {
    console.log(users);
    users.forEach((user) => {
      dataEmployes.innerHTML += `
        <option value="${user.user_name}">${user.user_name}</option>
      `;
    });
  }