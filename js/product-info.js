//E3 EJ2
let Url = "https://japceibal.github.io/emercado-api/products/";
Url = Url.concat(localStorage.getItem("itemInfo") + ".json");
console.log(Url);
//E3 EJ2

//E3 EJ3
let commentsURL = "https://japceibal.github.io/emercado-api/products_comments/";
commentsURL = commentsURL.concat(localStorage.getItem("itemInfo") + ".json");
//E3 EJ3

function addComment(container , user , time , description){
    container.innerHTML += `
        <div class = "comment">
            <div class = "comment-main">
                ${user} / ${time} / 
            </div>
            <div class = "comment-description">
                <p>${description}</p>
            </div>
        </div>
    `;
}

const descripcion = document.querySelector("#descripcion");
const puntaje = document.querySelector("#score");
const infoProducto = document.querySelector("#main-description");

let comentarios;
fetch(Url) 
.then(response => response.json())
.then(data => {
    console.log(data);
    relatedProducts = data.relatedProducts;
    infoProducto.innerHTML = `
        <div id = "product-container">
            <div id="imgs">
                <div id="imgs-container">
            
                </div>
                <div id="img-main">
            
                </div>
            </div>
            <div id="product-info">
                <div>
                    <h1> ${data.name}</h1>
                </div>
                <hr>
                <div>
                    <h3>Precio</h3>
                    <p>US$ ${data.cost}</p>
                    <h3>Descripción</h3>
                    <p>${data.description}</p>
                    <h3>Categoría</h3>
                    <p>${data.category}</p>
                    <h3>Cantidad de Vendidos</h3>
                    <p>${data.soldCount}</p>
                </div>
            </div>
        </div>
        <br>
        <div id="comments-container">
            <h2>Comentarios</h2>
        </div>
        <hr>
    `;
    const imgs = document.getElementById("imgs-container");
    data.images.forEach(img => {
        imgs.innerHTML += `<img class="imgs-column" src = "${img}">`; //hola
    });

    
    const mainImg = document.getElementById("img-main");
    mainImg.innerHTML = `<img id="main-image" src="${data.images[0]}">`
    
    const imagenesColumna = document.querySelectorAll(".imgs-column");
    imagenesColumna.forEach( (imagen, index) => {
        imagen.addEventListener( "click", () => mainImg.innerHTML = `<img id="main-image" src="${imagen.getAttribute("src")}">`
        );
    });

    let ids = [];
    data.relatedProducts.forEach(producto => {
        document.getElementById("relacionados").innerHTML += `
        <div class="related-product">
            <img src="${producto.image}">
            <h4>${producto.name}</h4>
        </div>
        `;
        ids.push(producto.id);
    });

    document.querySelectorAll(".related-product").forEach( (producto , index) => {
        producto.addEventListener("click" , () => {
            localStorage.setItem("itemInfo" , ids[index]);
            window.location = "product-info.html";
        })
    })
    fetch(commentsURL)
    .then(response => response.json())
    .then(data => {
        comentarios = document.querySelector("#comments-container");
        data.forEach((element , index) => {
            addComment(comentarios , element.user , element.dateTime , element.description);
    
            for(let i = 0; i < element.score; i++){
                document.getElementsByClassName("comment-main")[index].innerHTML += `<span class="fa fa-star checked"></span>`;
            }
    
            for(let i = 5 - element.score ; i > 0 ; i--){
                document.getElementsByClassName("comment-main")[index].innerHTML += `<span class="fa fa-star"></span>`;
            }
        })
    })
    .catch(error => console.log(error))
})
.catch(error => console.log(error));



document.getElementById("comment-button").addEventListener("click" , () => {
    if(puntaje.value >= 1 && puntaje.value <= 5 && descripcion.value != undefined && descripcion.value != " "){
        const hoy = new Date();
        addComment(comentarios , localStorage.getItem("account"), hoy.toLocaleString("sv-SE"), descripcion.value);
        descripcion.value = ""
        let commentMain = document.getElementsByClassName("comment-main");

        for(let i = 0; i < puntaje.value; i++){
        commentMain[commentMain.length - 1].innerHTML += `<span class="fa fa-star checked"></span>`;
        }

        for(let i = 5 - puntaje.value ; i > 0 ; i--){
        commentMain[commentMain.length - 1].innerHTML += `<span class="fa fa-star"></span>`;
        }
    }
})