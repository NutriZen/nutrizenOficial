const addToShopingCartButtons = document.querySelectorAll('.addToCart');
addToShopingCartButtons.forEach(addToCartButton => {
  addToCartButton.addEventListener('click',addToCartClicked);
});

const shoppingCartItemsContainer=document.querySelector('.shoppingCart');

function addToCartClicked(event){
  const button = event.target; 
  const item = button.closest('.card');

  

  const itemPrice = item.querySelector("div.card-body h4[name='price']").textContent;
  const itemTitle = item.querySelector("div.card-body h5[name='title']").textContent;
  const itemImage = item.querySelector(".card-img-top").src;
 
 

addItemToShoppingCart(itemTitle,itemPrice,itemImage );  
}

function addItemToShoppingCart(itemTitle,itemPrice,itemImage){
    
 
    document.getElementById("shoppingCart").innerHTML = `
    <div class="offcanvas offcanvas-end canvas-style" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
    <div class="offcanvas-header">
        <h5 id="offcanvasRightLabel">Carrito</h5>
        <a class="color-close" href="javascript:void(0);" data-bs-dismiss="offcanvas">
            <span class="icon-cross" style="font-size: 15px;"></span>
        </a>
    </div>
    <div class="container">
    <div class="offcanvas-body d-flex justify-content-center">
        Carrito de compras
     </div> 
    <div class="row shoppingCartItem">
        <div class="col-sm-3">
                <img src="${itemImage}" class="shopping-cart-image" style="max-width: 100px;min-width: 100px;">
        </div>
        <div class="col-sm-3 d-flex justify-content-end">
          <h6>${itemTitle}</h6> 
          </div>
          <div class="col-sm-3 d-flex justify-content-end">
          <input class="shopping-cart-quantity-input shoppingCartItemQuantity" type="number"
          value="1" min="1" max="10" style="min-width: 50px;min-height: 30px;max-width: 50px;max-height: 30px;">   
          </div>    
        <div class="col-sm-3 d-flex justify-content-center">
                <p class="item-price mb-0 shoppingCartItemPrice">${itemPrice}</p>
            </div>
        </div>
     </div>
        <div class="col-sm-12">
            <div class="shopping-cart-quantity d-flex justify-content-center align-items-center">
                <button class="btn index-buttom-dos buttonDelete" type="button">comprar</button>
            </div>
        </div>
        </div>
    </div>
    </div>
    </div>
    `


    
}