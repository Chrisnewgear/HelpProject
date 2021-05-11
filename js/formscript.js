$(document).ready(function(){
    /*$('#btnSend').click(function(){
        alert('funciono')
    });*/

    $('#btnSend').click(function(){
        var errores = '';
        
        if($('#name').val()==''){
            errores+='<h4>Escriba un nombre</h4>';
           $('#name').css("background-color", "tomato") 
        }
        else{
            $('#name').css("background-color", "white") 
        }

        if($('#telefono').val()==''){
            errores+='<h4>Ingrese un número telefónico</h4>';
            $('#telefono').css("background-color", "tomato")
        }
        else{
            $('#telefono').css("background-color", "white") 
        }
        
        if($('#mail').val()==''){
            errores+='<h4>Ingrese un email</h4>';
            $('#mail').css("background-color", "tomato")
        }
        else{
            $('#mail').css("background-color", "white") 
        }

        if($('#mensaje').val()==''){
            errores+='<h4>Escriba un mensaje</h4>';
            $('#mensaje').css("background-color", "tomato")
        }
        else{
            $('#mensaje').css("background-color", "white") 
        }
        
        if (errores == '' == false){
            var mensajeModal = '<div class="modal-wrap">'+
                                    '<div class="mensaje-modal">'+
                                        '<h3>Por favor llenas todos los campos</h3>'+
                                        errores+
                                        '<span id="btn-close">Cerrar</span>'+
                                    '</div>'+
                                '</div>'

            $('body').append(mensajeModal);  
                                     
        }
        //CERRANDO MENSAJE DE ERROR
            $('#btn-close').click(function(){
                $('.modal-wrap').remove();
            });
    });
});    
        