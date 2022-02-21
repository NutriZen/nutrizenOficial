document.getElementById("shoppingCart").innerHTML = `
    <div class="offcanvas offcanvas-end canvas-style" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
    <div class="offcanvas-header">
        <h5 id="offcanvasRightLabel">Carrito</h5>
        <a class="color-close" href="javascript:void(0);" data-bs-dismiss="offcanvas">
            <span class="icon-cross" style="font-size: 15px;"></span>
        </a>
    </div>
    <div class="offcanvas-body d-flex justify-content-center">
        Carrito de compras
    </div>
    </div>
`;