
document.getElementById("submit-button").addEventListener("click", () =>{
        let email = document.getElementById("floatingInput").value;
        let password = document.getElementById("floatingPassword").value;
        let emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
        if(password.length >= 8 && email.match(emailRegex)){
                alert("funca");
                window.location.href = "index.html";
        }
}); 
