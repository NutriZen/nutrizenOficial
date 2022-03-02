document.getElementById("shoppingCart").innerHTML = `
<div class="offcanvas offcanvas-end canvas-style" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
<div class="offcanvas-header">
    <h5 id="offcanvasRightLabel">Carrito</h5>
    <a class="color-close" href="javascript:void(0);" data-bs-dismiss="offcanvas">
        <span class="icon-cross" style="font-size: 15px;"></span>
    </a>
</div>
<div class="row container">
    <div class="col-sm-3">
     <h6>Producto</h6>
     </div>
     <div class="col-sm-3">
     <h6></h6>
     </div>
     <div class= "col-sm-3">
     <h6>Cantidad</h6>
    </div>
    <div class="col-sm-2">
    <h6>Precio</h6>
    </div> 
    <div class="col-sm-1">
    </div> 
    </div>
<div class= "ShoppingC Container">
</div>

<<<<<<< HEAD
<<<<<<< HEAD
    <div class="row shopping-cart-total d-flex align-items-center container">
    <div class="col-sm-2">
         <h5>&nbsp&nbspTotal</h5>
    </div>
    <div class="col-sm-1">
        <p class="ml-2 mb-0 shoppingCartTotal">&nbsp&nbsp$</p>
    </div>
    <div class="row container">
    <div class="col-sm-12">
    <button class="btn btn-success sm-auto comprarButton" type="button" data-toggle="modal" data-target="#comprarModal">Comprar</button>
    </div>
=======
=======
>>>>>>> 7969d7a64dd3f8f665aec2e9f88d02576883946f
    <div class="container shopping-cart-total d-flex align-items-center">
                        <h5>&nbsp&nbspTotal</h5>
                        <p class="ml-4 mb-0 shoppingCartTotal">&nbsp&nbsp$</p>
    </div>
    <button class="btn comprarButton bottom-style" type="button" data-toggle="modal" data-target="#comprarModal" onclick="almacenamiento()" style="border: solid 40px #3F3F44;">Comprar</button>
<<<<<<< HEAD
>>>>>>> c09b337c020c69be94ed879d25bbc8e6a08d767c
=======
>>>>>>> 7969d7a64dd3f8f665aec2e9f88d02576883946f
    </div>
    </div>
    </div>
    
`;