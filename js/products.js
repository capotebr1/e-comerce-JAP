const Url = "https://japceibal.github.io/emercado-api/cats_products/101.json";

function cargarJson(){
    fetch(Url)
    .then(response => response.json())
    .then(data =>{
        console.log(data);
        const productImage = document.getElementsByClassName("product-img");
        const productDescription = document.getElementsByClassName("product-description");
        const productPrice = document.getElementsByClassName("product-price");
        const product = document.getElementById("products_container");
        for(let i = 0; i < data.products.length; i++){
            product.innerHTML += `
            <div class="product">
                <div class="product-img">
                    <img src="${data.products[i].image}" alt="">
                </div>
                <div class="product-description">
                    <h2>${data.products[i].name} - ${data.products[i].currency} ${data.products[i].cost}<h2>
                    <h4>${data.products[i].description}</h4>
                </div>
                <div class="product-price">
                    <h4>${data.products[i].soldCount}  vendidos</h4>
                </div>
            </div>`;

        }
    })
    .catch(err => console.log(err))
}

cargarJson();