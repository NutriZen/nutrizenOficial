
//Se obtienen los valores de los imputs y se valida informacion
function getUsers(){
    var userEmail = document.getElementById("email").value
    var userPass = document.getElementById("passwordOne").value

    if(userEmail.length > 0 && userPass.length > 0){
        // console.log(userEmail + " " + userPass);
        existingUser(userEmail, userPass);
    }else{
        swal("Debe llenar todos los campos",{
            icon: "error",
            button: false
        });
    }

}

//class Usuario
function userData(firstName, lastName, e_mail, password){
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = e_mail;
    this.password = password;

    
} //class userData

//Se crean los objetos de los usuarios
var userOne = new userData('Julio', 'Xochimitl', 'julio.xochimitl.g@gmail.com', '123');

var userTwo = new userData('Laura', 'Madrigal','hijintortor@gmail.com', 'Adiosamigosmios');

var userThree = new userData('Luis', 'Miguel', 'yourdestiny39@gmail.com', 'Inserteunacontraseña');

var adminOne = new userData('Administrador', 'Uno', 'admin.one@gmail.com', '123456');


//Se agregan los objetos en localStorage en formato JSON
localStorage.setItem(
    1, JSON.stringify(userOne)
);

localStorage.setItem(
    2, JSON.stringify(userTwo)
);
localStorage.setItem(
    3, JSON.stringify(userThree)
);

localStorage.setItem(
    4, JSON.stringify(adminOne)
);

function existingUser(email, pass){

    var user; //Almacena los datos del objeto
    var localTam = localStorage.length; //Determina el tamaño de los elementos dentro de localStorage

    for(let i = 1; i <= localTam; i++){
        user = JSON.parse(localStorage.getItem(i));
        // console.log(user);

        if(email == user.email && pass == user.password){
            console.log("El correo electronico: '"+ email + "' es igual a '" + user.email + "'");
            console.log("La contraseña '" + pass + "' es igual a '" + user.password + "'");

            

            var validUser = {
                'fName': user.firstName,
                'lName': user.lastName,
                'email': email
            } //validUser

            var d = new Date(); //Obtiene la fecha actual

            var jsonCookie = "dataUser";

            //Almacena en cookies el objeto email
            document.cookie = `${jsonCookie} = ${JSON.stringify(validUser)}; expires = ${addDays(d, 15)};`

            //Alerta de bienvenida
            swal("Bienvenido de vuelta",{
                icon: "success",
                button:false
            })

            setTimeout("redirectPage()", 1000); //Redirecciona la pagina en cierto tiempo / 1 seg = 1000mseg

        }else if(i == localTam && pass != user.password){

            document.getElementById("messageErrorPass").innerHTML = `<div style="color: #FF6464;"><span class="icon-notification"></span> Contraseña incorrecta</div>`;

        }else{
            continue;
            console.log("No te has registrado");
        } //else

    } //for

} //existingUser

// Sumara dias a la fecha actual
function addDays(fecha, dias){
    fecha.setDate(fecha.getDate() + dias);
    return fecha;
} //addDays


function redirectPage(){
    window.location = "index.html";
} //redirectPage()
