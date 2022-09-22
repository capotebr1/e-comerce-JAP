function logOut(){
        localStorage.removeItem("account");
        location = "index.html";
}

document.addEventListener("DOMContentLoaded", () => {
const nav = document.getElementsByClassName("nav-item");
nav[nav.length - 1].innerHTML = `
    <div class="nav-link dropdown"" href="#">
        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
            ${localStorage.getItem("account")}
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li><a class="dropdown-item" href="cart.html">Mi Carrito</a></li>
            <li><a class="dropdown-item" href="my-profile.html">Mi Perfil</a></li>
            <li><button class="dropdown-item" onClick="logOut()">Cerrar Sesión</button></li>
        </ul>
    </div>
    `;
});