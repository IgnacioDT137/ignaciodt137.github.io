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
    
    $('#PRECIO').on("input", function(){
        if($('#PRECIO').val() == ""){
            $("#PRECIO").removeClass("ok")
            $("#PRECIO").addClass("error")
        } else {
            $("#PRECIO").removeClass("error")
            $("#PRECIO").addClass("ok")
        }
    });
    
    $('#form1').submit(function(){
        if($('#ID').val() == ""){
            alert('El ID está vacío')
            event.preventDefault()
        } else if($('#NOMBRE').val() == ""){
            alert('El nombre está vacío')
            event.preventDefault()
        } else if($('#PRECIO').val() == ""){
            alert('El precio está vacío')
            event.preventDefault()
        }else {
            alert('Formulario enviado')
        }
    })
})