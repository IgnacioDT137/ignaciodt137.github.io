$(document).ready(function(){
    $('#ID').on("input", function(){
        if($('#ID').val() == ""){
            $('#ID').removeClass("ok")
            $('#ID').addClass("error")
        } else {
            $("#ID").removeClass("error")
            $("#ID").addClass("ok")
        }
    });
   

    $('#NOMBRE').on("input", function(){
        if($('#NOMBRE').val() == ""){
            $("#NOMBRE").removeClass("ok")
            $("#NOMBRE").addClass("error")
        } else {
            $("#NOMBRE").removeClass("error")
            $("#NOMBRE").addClass("ok")
        }
    });
    
    $('#Descuento').on("input", function(){
        if($('#Descuento').val() == ""){
            $("#Descuento").removeClass("ok")
            $("#Descuento").addClass("error")
        } else {
            $("#Descuento").removeClass("error")
            $("#Descuento").addClass("ok")
        }
    });
    $('#FecIni').on("input", function(){
        if($('#FecIni').val() == ""){
            $("#FecIni").removeClass("ok")
            $("#FecIni").addClass("error")
        } else {
            $("#FecIni").removeClass("error")
            $("#FecIni").addClass("ok")
        }
    });
    $('#FecFin').on("input", function(){
        if($('#FecFin').val() == ""){
            $("#FecFin").removeClass("ok")
            $("#FecFin").addClass("error")
        } else {
            $("#FecFin").removeClass("error")
            $("#FecFin").addClass("ok")
        }
    });
    
    $('#form1').submit(function(){
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