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
        if($('#FecIni').val() == "" || $('#FecIni').val().length != 8){
            $("#FecIni").removeClass("ok")
            $("#FecIni").addClass("error")
        } else {
            $("#FecIni").removeClass("error")
            $("#FecIni").addClass("ok")
        }
    });
    $('#FecFin').on("input", function(){
        if($('#FecFin').val() == "" || $('#FecFin').val().length != 8){
            $("#FecFin").removeClass("ok")
            $("#FecFin").addClass("error")
        } else {
            $("#FecFin").removeClass("error")
            $("#FecFin").addClass("ok")
        }
    });
    
    $('#form1').submit(function(){
        if($('#ID').val() == ""){
            alert('El ID está vacío')
            event.preventDefault()
        } else if($('#NOMBRE').val() == ""){
            alert('El Nombre está vacío')
            event.preventDefault()
        }else if($('#Descuento').val() == ""){
            alert('El Descuento está vacío')
            event.preventDefault()
        }else if($('#FecIni').val() == "" ){
            alert('La Fecha de Inicio está vacía')
            event.preventDefault()
        }else if($('#FecIni').val().length != 8){
            alert('La Fecha de Inicio está incompleta')
            event.preventDefault()
        }else if($('#FecFin').val().length != 8){
            alert('La Fecha de Término está Incompleta')
            event.preventDefault()
        }else if($('#FecFin').val() == ""){
            alert('La Fecha de Término está vacía')
            event.preventDefault()
        } else {
            alert('Formulario enviado')
        }
    })
})