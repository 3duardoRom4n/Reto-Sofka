function login() {
    var user, pass;

    user = document.getElementById("usuario").value;
    pass = document.getElementById("contraseña").value;

    if(user == "Eduardo" && pass == "0000" ||
       user == "Admin" && pass == "Admin" ){

        window.location="index.html";
    }    
}