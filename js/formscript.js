$(document).ready(function(){
    /*$('#btnSend').click(function(){
        alert('funciono')
    });*/

    $('#btnSend').click(function(){
        var errores = '';
        
        if($('#name').val()==''){
            errores+='<h4>Escriba un nombre</h4>';
        }

        if($('#telefono').val()==''){
            errores+='<h4>Ingrese un número telefónico</h4>';
        }
        
        if($('#mail').val()==''){
            errores+='<h4>Ingrese un email</h4>';
        }

        if($('#mensaje').val()==''){
            errores+='<h4>Escriba un mensaje</h4>';
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
        