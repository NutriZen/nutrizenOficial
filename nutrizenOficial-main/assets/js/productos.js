function addItem(item){
    const itemHTML = '<div class="card" style=" width: 18rem;">\n' +
        '    <img src="'+item.img +'" class="card-img-top" alt="image">\n' +
        '    <div class="card-body">\n' +
        '        <h5 class="card-title">'+item.name+'</h5>\n' +
        '        <p class="card-text">'+item.description+'</p>\n' +
        '        <p class="card-text">'+item.precio+'</p>\n'+
        '       <a href="#" class="btn btn-success">Add</a>\n' +
        '    </div>\n' +
        '</div>\n' +
        '<br/>';
    const itemsContainer = document.getElementById("list-items");
    itemsContainer.innerHTML += itemHTML;
}


//*********************************** */
//OBJETO1
addItem({'name':'Kettlebells',
    'img':'https://images-na.ssl-images-amazon.com/images/I/71qjKny9LsL._AC_SL1500_.jpg',
    'description':'Juego de pesas rusas. Ideales para trabajar todos los músculos',
    'precio':'$800'});
//OBJETO2
addItem({'name':'Escalera de agilidad',
    'img':'https://cdn.shopify.com/s/files/1/1134/7614/products/IMG_3658_480x480.jpg?v=1612917737',
    'description':'Para una actividad fisica práctica y cotidiana que proporciona beneficios para la salud',
    'precio':'$250'});
//OBJETO3
addItem({'name':'Bandas Elásticas',
    'img':'https://torneostenis.es/wp-content/uploads/2021/05/TuboderesistenciaMedium-450x450.jpg',
    'description':'Para todo el cuerpo, su tonificación y fuerza.',
    'precio':'$170'});
//OBJETO4
    addItem({'name':'Guantes de box',
    'img':'https://m.media-amazon.com/images/I/51pY1LMfLmL._AC_SX569_.jpg',
    'description':'Para principiantes o profesionales del boxeo',
    'precio':'$800 '});
//OBJETO5
    addItem({'name':'Palchagui',
    'img':'http://sc04.alicdn.com/kf/Hc3e62533905d4d9ba16b19f1b1bb8109k.jpg',
    'description':'Muy utilizado para desarrollar la coordinacion de golpes y patadas',
    'precio':'$300'});
//OBJETO6
    addItem({'name':'Barra Dominadas',
    'img':'https://player8.org/wp-content/uploads/2021/09/Foto-cuerpo-articulos-chica-66.jpg',
    'description':'La mejor opción para trabajar todo el tren superior.',
    'precio':'$2500'});
//OBJETO7
    addItem({'name':'Juego de mancuernas',
    'img':'https://sportsolutions.com.mx/wp-content/uploads/2021/06/ventajas-entrenar-mancuernas-neopreno.png',
    'description':'Ideales para todo tipo de ejercicios',
    'precio':'1800'});
//OBJETO8
    addItem({'name':'Zir-Fos',
    'img':'https://www.soriana.com/dw/image/v2/BGBD_PRD/on/demandware.static/-/Sites-soriana-grocery-master-catalog/default/dw0f334610/images/product/8020030000704-A.jpg?sw=1000&sh=1000&sm=fit',
    'description':'Bifidobacterias que aseguran una alta colonización en el intestino grueso. Las vitaminas del complejo B proporcionan una ingesta diaria recomendada.',
    'precio':'$400'});
//OBJETO9
    addItem({'name':'Inulina de Agave',
    'img':'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00750302607950L.jpg',
    'description':'Fuente rica en fibra que contribuye a prevenir el estreñimiento',
    'precio':'$110'});
//OBJETO10
    addItem({'name':'Proteína de Suero de leche',
    'img':'https://cdn.shopify.com/s/files/1/2382/1007/products/alpha_hidro_21_23_10_2021_20_35_24_284_740x.png?v=1637883905',
    'description':'Sabor chocolate',
    'precio':'$970'});