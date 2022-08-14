
document.getElementById("submit-button").addEventListener("click", () =>{
        const email = document.getElementById("floatingInput").value;
        const password = document.getElementById("floatingPassword").value;
        const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
        if(password.length >= 8 && email.match(emailRegex)){
                window.location.href = "index.html";
        }
}); 
