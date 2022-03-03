const addToShoppingCartButtons = document.querySelectorAll('.addToCart');

addToShoppingCartButtons.forEach((addToCartButton) => {
    addToCartButton.addEventListener('click', addToCartClicked);
  });

  const shoppingCartItemsContainer = document.querySelector('.ShoppingC');

  var carrito = [];

  function addToCartClicked(event) {
    const button = event.target;
    const item = button.closest('.card');

    
  const itemTitle = item.querySelector('.card-title').textContent;
  const itemPrice = item.querySelector('#priceT').textContent
  const itemImage = item.querySelector('.card-img-top').src;
  const itemAmount = item.querySelector('#name').value;
  const itemTotal = (itemAmount>1)?parseInt(itemPrice)* itemAmount:itemPrice;

      var product = {
          Nombre: itemTitle,
          Precio: itemPrice,
          Url_Imagen: itemImage,
          Cantidad: itemAmount
        };
        carrito.push({product})
  

sessionStorage.setItem('Carrito',JSON.stringify(carrito));

addItemToShoppingCart(itemTitle, itemImage,itemAmount,itemTotal);
}


function addItemToShoppingCart(itemTitle,itemImage,itemAmount,itemTotal) {
    const shoppingCartRow=document.createElement('div');
    const shoppingCartContent =  `
    <div class="row container">
    <div class="col-sm-3">
    <img src= ${itemImage} class="img-thumbnail" alt="" style="max-height: 80px;max-width: 80px;">
     </div>
     <div class="col-sm-4">
     <h5 class="card-title" id="title" name="title">${itemTitle}</h5>
     </div>
     <div class= "col-sm-3" style="padding: 15px;">
        <input type="number" id="name" class="form-control form-style form-style border border-0 border-bottom border-dark rounded-0 transparent-input jost" min="1" max="10" value=${itemAmount} name="name">
    </div>
    <div class="col-sm-2">
        <h6><b>$${itemTotal}</b></h6>
    </div>  
    </div>`;

   shoppingCartRow.innerHTML = shoppingCartContent;
   shoppingCartItemsContainer.append(shoppingCartRow);
 
 // updateShoppingCartTotal();

}
/*
function updateShoppingCartTotal() {
  let total = 0;
  const shoppingCartTotal = document.querySelector('.shoppingCartTotal');

  const shoppingCartItems = document.querySelectorAll('.shoppingCartItem');

  shoppingCartItems.forEach((shoppingCartItem) => {
    const shoppingCartItemPriceElement = shoppingCartItem.querySelector(
      '.shoppingCartItemPrice'
    );

    }
  }*/


  const options = {
    method: "GET"
  };
  
  // Petición HTTP
  fetch("http://localhost:8081/api/productos/", options)
    .then(response => response.json())
    .then(data => {

        console.log(data)


        let text = ""

        for(let i = 0; i < (data.length+1); i++){
            document.getElementById("list_items").innerHTML = text;
            text +=   `
            <div class="col-lg-3" data-aos="fade-up" data-aos-duration="2000" style="padding-bottom: 25px;">
                <div class="card card-style jost border border-0">
                    <img src="${data[i].url_imagen}" class="card-img-top" id="imgProduct"
                        alt="${data[i].nombre}" />
                    <div class="card-body">
                        <h4 class="card-price text-justify" id="price" name="price">$<b id="priceT">${data[i].precio}</b></h4>
                        <h5 class="card-title" id="title" name="title">${data[i].nombre}</h5>
                        <p class="card-text text-justify">
                            ${data[i].descripcion}
                        </p>
                    </div>
                    <div class= "amount" style="padding: 16px;">
                        <input type="number" id="name" class="form-control form-style form-style border border-0 border-bottom border-dark rounded-0 transparent-input jost" min="1" max="10" value="1" name="name"/>
                        <br>
                        <a href="#!" class="btn index-buttom-dos addToCart" style="width: 100%;" data-id="1">Agregar</a>
                    </div>
                </div>
            </div>`
        }//for

    })