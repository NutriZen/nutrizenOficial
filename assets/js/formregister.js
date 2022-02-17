function newUser(){

    var fName = document.getElementById("firstName").value;
    var lName = document.getElementById("lastName").value;
    var e_mail = document.getElementById("email").value;
    var numPhone = document.getElementById("phone").value;
    var pass_01 = document.getElementById("passwordOne").value;
    var pass_02 = document.getElementById("passwordTwo").value;


    function userObject(fName, lName, eMail, nPhone, password){
        this.fName = fName;
        this.lName = lName;
        this.eMail = eMail;
        this.nPhone = nPhone;
        this.password = password;
    }

    if(fName.length > 0 && lName.length > 0 && e_mail.length > 0 && numPhone.length > 0 && pass_01.length > 0 && pass_02.length > 0) {
        addNewUser = new userObject(fName, lName,e_mail,numPhone,pass_01);
        var userJSON = JSON.stringify(addNewUser);
        console.log(userJSON);
        (swal("Registro exitoso",{
            icon: "success",
            button:false
        }))
    }else{
        
        swal("Debe llenar todos los campos",{
            icon: "error",
            button: false
        });
    }


    // console.log(addNewUser);



}