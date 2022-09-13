
document.getElementById("submit-button").addEventListener("click", () =>{
        const email = document.getElementById("floatingInput").value;
        const password = document.getElementById("floatingPassword").value;
        const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        const forms = document.getElementsByClassName("form-control");

        for(let i = 0; i < forms.length; i++){
                forms[i].setAttribute("class","form-control");
        }

        if(password.length >= 8 && email.match(emailRegex)){
                localStorage.setItem("account", email);
                window.location.href = "login.html";
        }
        
        else{
                let error = document.getElementsByClassName("error");
                for(let i = 0; i < error.length; i++){
                        if(i === 0){
                                if(!email.match(emailRegex)){
                                        error[i].innerHTML = "ingrese su email correctamente";
                                        forms[i].className += " form-error";
                                }
                                else{
                                        forms[i].setAttribute("class","form-control form-valid");
                                        error[i].innerHTML = "";
                                }
                        }

                        if(i === 1){
                                if(password.length < 8 ){
                                        error[i].innerHTML = "ingrese su contraseña mayor a 8 carácteres";
                                        forms[i].className += " form-error";
                                }
                                else{
                                        forms[i].setAttribute("class","form-control form-valid");
                                        error[i].innerHTML = "";
                                }
                        }
                }
        }
}); 
