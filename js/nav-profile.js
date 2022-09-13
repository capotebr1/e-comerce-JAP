document.addEventListener("DOMContentLoaded", () => {
    const nav = document.getElementsByClassName("nav-item");
    nav[nav.length - 1].innerHTML = `<a class="nav-link" href="#">${localStorage.getItem("account")}</a>`;
});