var usuario=[];

function almacenamiento(){

    var nombre=document.getElementById('name').value,
        apellido=document.getElementById('lastName').value,
        correo=document.getElementById('email').value,
        telefono=document.getElementById('phone').value,
        mensaje=document.getElementById('message').value;

        usuario.push(nombre,apellido,correo,telefono,mensaje);

    localStorage.setItem('Usuario'+telefono, JSON.stringify(usuario));

}