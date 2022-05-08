$(document).ready(function(){
    $('#username').on("input", function(){
        if($('#username').val() == ""){
            $('#username').removeClass("ok")
            $('#username').addClass("error")
        } else {
            $("#username").removeClass("error")
            $("#username").addClass("ok")
        }
    });

    $('#passwordinput').on("input", function(){
        if($('#passwordinput').val() == ""){
            $("#passwordinput").removeClass("ok")
            $("#passwordinput").addClass("error")
        } else {
            $("#passwordinput").removeClass("error")
            $("#passwordinput").addClass("ok")
        }
    });
    
    $('#Iniciar_sesion').submit(function(){
        if($('#username').val() == ""){
            alert('El usuario está vacío')
            event.preventDefault()
        } else if($('#passwordinput').val() == ""){
            alert('La contraseña está vacía')
            event.preventDefault()
        } else {
            alert('Formulario enviado')
        }
    })
})