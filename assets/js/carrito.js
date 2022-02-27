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







