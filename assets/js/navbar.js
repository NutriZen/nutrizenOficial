document.getElementById("navBar").innerHTML = `
<nav id="menuScroll" class="navbar navbar-expand-lg navbar-light text-center fixed-top" data-aos="fade-down" data-aos-duration="3000">
<div class="container-fluid">
    <a class="navbar-brand josefin-sans" href="#" style="font-size: 30px;">
        Nutrizen
    </a>
        <button href="#" class="navbar-toggler icon-menu-style border border-0" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" role="button">
            <span class="icon-menu-burger"></span>
        </button>
    <div class="collapse navbar-collapse justify-content-end jost" id="navbarNav">
        <ul class="navbar-nav" id="link-style">
            <li class="nav-item">
                <a class="nav-link" href="home.html">Inicio</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Nosotros</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="contact.html">Contacto</a>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">P&S</a>
                <ul class="dropdown-menu drop-style text-center" aria-labelledby="dropdownMenu2">
                    <li><a class="dropdown-item" href="products.html" style="font-size:20px">Productos</a></li>
                    <li><a class="dropdown-item" href="services.html" style="font-size:20px">Servicios</a></li>
                </ul>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                    <span class="icon-user"></span>
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight"
                aria-controls="offcanvasRight">
                    <span class="icon-cart"></span>
                </a>
            </li>
        </ul>
    </div>
</div>
</nav>
`;


var nav = document.getElementById("menuScroll");
window.onscroll = function(){
    if(window.pageYOffset > 600){
        nav.classList.add("bg-white");
        
    }else{
        nav.classList.remove("bg-white");
    }
}

