const main = require("../js/main");
const jwt = require("jsonwebtoken");

const inputEmail = document.querySelector("#inputEmail");
const inputPassword = document.querySelector("#inputPassword");

const submitForm = document.querySelector("#form_login")

let connecter = false;

submitForm.addEventListener("submit", async (e) =>{
    try {
        e.preventDefault();

        const valueEmail = inputEmail.value;
        const valuePassword = inputPassword.value;

        if(valueEmail && valuePassword){

           const test = await main.login(valueEmail, valuePassword)

           if(test.length === 0 ){
      
            console.log("marsbpo")
          }else{
            connecter = true;
            document.location.href = "dashboard.html";
          }

        }



    } catch (error) {
        console.log(error)
    }
})