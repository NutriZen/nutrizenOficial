/* Modal agregar item */
document.getElementById("modalAdd").innerHTML = `
    <div class="modal fade jost" id="modalAddItems" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" style="opacity: 0.95;">
            <div class="modal-content">
                <div class="modal-body modal-style">

                    <h4 class="text-center"><b>Agregar ítem</b></h4>

                    <input type="text" id="itemName" class="form-control form-style form-style border border-0 border-bottom border-dark rounded-0 transparent-input" placeholder="Nombre"/>

                    <br>
                    <input type="text" id="itemImg" class="form-control form-style form-style border border-0 border-bottom border-dark rounded-0 transparent-input" placeholder="Imagen"/>

                    <br>
                    <input type="number" id="priceItem" class="form-control form-style form-style border border-0 border-bottom border-dark rounded-0 transparent-input" placeholder="Precio" min="1"/>

                    <br>
                    <textarea type="text" id="descItem" class="form-control form-style border border-0 border-bottom border-dark rounded-0" placeholder="Descripción" style="max-width: 100%; max-height: 150px; min-height: 100px;"></textarea>
                    
                    <br>
                    <button class="bottom-style btn jost" onclick="getItem();" style="font-size: 20px;">Agregar</button>
                </div>
                <div class="modal-footer modal-style">
                    <button type="button" class="bottom-style btn jost" data-bs-dismiss="modal" style="font-size: 20px;">Cerrar</button>
                </div>
            </div>
        </div>
        </div>
`;
/* /Modal agregar item */


/* Funcion agregar items */
function addItem(item){
    const itemHTML = `
    <div class="col-lg-3" data-aos="fade-up" data-aos-duration="2000" style="padding-bottom: 25px;">
                <div class="card card-style jost border border-0">
                    <img src="${item.img}" class="card-img-top"
                        alt="Fissure in Sandstone" />
                    <div class="card-body">
                        <h4 class="card-title text-justify"><b>${item.name}</b></h4>
                        <h5>$${item.price}</h5>
                        <p class="card-text text-justify">
                            ${item.desc}
                        </p>
                    </div>
                    <div style="padding: 16px;">
                        <input type="number" id="name" class="form-control form-style form-style border border-0 border-bottom border-dark rounded-0 transparent-input" min="1" max="10" value="1"/>
                        <br>
                        <a href="#!" class="btn card-btn" style="width: 100%;">Agregar</a>
                    </div>
                </div>
            </div>
    `;
    const itemsContainer = document.getElementById("list-items");
    itemsContainer.innerHTML += itemHTML;
}

function getItem(){
    var name = document.getElementById("itemName").value;
    var img = document.getElementById("itemImg").value;
    var price = document.getElementById("priceItem").value;
    var descripcion = document.getElementById("descItem").value;

    if(name.length > 0 && img.length > 0 && price.length > 0 && descripcion.length > 0) {
        addItem({'name': name,
            'img': img,
            'price': price,
            'desc': descripcion
        });
    }else{
        alert("Debe llenar todos los campos")
    }
}
/* /Funcion agregar items */