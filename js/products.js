
//EJERCICIO 2// 

let Url = "https://japceibal.github.io/emercado-api/cats_products/";
Url = Url.concat(localStorage.getItem("catID") + ".json");

//EJERCICIO 2//

let arregloProductos = [];
let arregloOriginal = [];
const product = document.getElementById("products_container");

let minCount = undefined;
let maxCount = undefined;

fetch(Url)
.then(response => response.json())
.then(data =>{
    document.querySelector(".title").innerHTML = `
    <h1>Productos</h1>
    <h2>Verás aquí todos los productos de la categoria ${data.catName}</h2>
    `;
    arregloProductos = data.products;
    arregloOriginal = data.products;
    insertarArreglo(arregloProductos);

    //E3 EJ1
    const products = document.querySelectorAll(".product");
        products.forEach( ( producto , index ) => {
            producto.addEventListener("click" , () => {
                localStorage.setItem("itemInfo" , products[index].id);
            })
    })
    //E3 EJ1
})
.catch(err => console.log(err))

function insertarArreglo(arreglo){
    product.innerHTML = "";
    if(arreglo.length > 0){
        for(let i = 0; i < arreglo.length; i++){
            product.innerHTML += `
            <div class="product" id="${arreglo[i].id}">
                <div class="product-img">
                <img src="${arreglo[i].image}" alt="">
                </div>
                <div class="product-description">
                    <a href="product-info.html" class="info-link">
                        <h2><span class="product-name">${arreglo[i].name}</span> - ${arreglo[i].currency} ${arreglo[i].cost}</h2>
                        <h4>${arreglo[i].description}</h4>
                    </a>
                </div>
                <div class="product-price">
                <h4>${arreglo[i].soldCount} vendidos</h4>
                </div>
                </div>`;
            }  
        }
        else
        product.innerHTML += `
        <h1 style="text-align: center; margin-top: 50px;">No hay productos disponibles</h1>`; 
}
    

//RANGOS
function ordenarCategorias(min,max){
    let filtrado = arregloProductos.filter(value => value.cost >= min && value.cost <= max);
    insertarArreglo(filtrado);
}

document.getElementById("rangeFilterCount").addEventListener("click", function(){
    minCount = document.getElementById("rangeFilterCountMin").value;
    maxCount = document.getElementById("rangeFilterCountMax").value;
    
    if ((maxCount != undefined) && (maxCount != "") && (parseInt(maxCount)) >= 0){
        maxCount = parseInt(maxCount);
    }
    
    else maxCount = undefined;
    
    if ((minCount != undefined) && (minCount != "") && (parseInt(minCount)) >= 0){
        minCount = parseInt(minCount);
    }
    
    else minCount = undefined;
    
    if(minCount != undefined && maxCount != undefined && minCount < maxCount) 
    ordenarCategorias(minCount,maxCount);
    
    else alert("ingrese valores correctos de min y max");
});
//RANGOS


//ORDENAR 
function sortArray(sortType , array){
    switch(sortType){
        case "sortAsc":
            insertarArreglo(array.sort((a,b) => a.cost - b.cost));
            break;
        case "sortDesc":
            insertarArreglo(array.sort((a,b) => b.cost - a.cost));
            break;
        case "sortByCount":
            insertarArreglo(array.sort((a,b) =>  b.soldCount - a.soldCount));
            break;
    }
}

document.getElementById("sortAsc").addEventListener("click", () => {
    sortArray("sortAsc", arregloProductos);
})

document.getElementById("sortDesc").addEventListener("click", () => {
    sortArray("sortDesc", arregloProductos);
})

document.getElementById("sortByCount").addEventListener("click", () => {
    sortArray("sortByCount", arregloProductos);
})
//ORDENAR 


//CLEAR
document.getElementById("clearRangeFilter").addEventListener("click",() =>{
    insertarArreglo(arregloOriginal); //Inserto el arreglo ya guardado para no realizar fetch otra vez
})
//CLEAR

//DESAFIATE
document.addEventListener("keyup" , e =>{
    if(e.target.matches('#buscador')){
        console.log(e.target.value);
        document.querySelectorAll('.product').forEach(producto =>{
            if(producto.innerText.toLowerCase().includes(e.target.value.toLowerCase())){
                producto.classList.remove("filtro");
            }
            else{
                producto.classList.add("filtro");
            }
        })
    }
})
//DESAFIATE