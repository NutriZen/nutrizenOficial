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
     <div class="col-sm-4">
     <h6></h6>
     </div>
     <div class= "col-sm-3">
     <h6>Cantidad</h6>
    </div>
    <div class="col-sm-2">
    <h6>Precio</h6>
    </div>  
    </div>
<div class= "ShoppingC Container">
</div>

    <div class="container shopping-cart-total d-flex align-items-center">
                        <h5>&nbsp&nbspTotal</h5>
                        <p class="ml-4 mb-0 shoppingCartTotal">&nbsp&nbsp$</p>
    </div>
    <button class="btn comprarButton bottom-style" type="button" data-toggle="modal" data-target="#comprarModal" onclick="almacenamiento()" style="border: solid 40px #3F3F44;">Comprar</button>
    </div>
    </div>
    </div>
    
`;