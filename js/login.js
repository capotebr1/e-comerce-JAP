const email = document.getElementById("floatingInput");
const password = document.getElementById("floatingPassword");

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formulario").addEventListener('submit', () => {
        if(email.value > 0 && password.value > 8){
            window.location.href = "/index.html";
        }
    }); 
  });