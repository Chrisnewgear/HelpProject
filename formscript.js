$(document).ready(function(){
    $('.boton').click(function(){
      var errores='';
        //Validando Campos del formulario
        if($('#name').val()==''){
            errores+='<p>Escriba un nombre</p>';
        }
        
        if($('#telefono').val()==''){
            errores+='<p>Imgrese un número telefónico</p>';
        }

        if($('#mail').val()==''){
            errores+='<p>ingrese un mail</p>';
        }

        if($('#mensaje').val()==''){
            errores+='<p>Escriba un mensaje</p>';
        }
        
        //Mostrando mensaje de error
        if( errores == '' == false ){
            var mensajeModal = '<div class="modal-wrap">'+
                                    '<div class="mensaje-modal"></div>'+
                                       '<h3>Por favor llenas todos los campos</h3>'+
                                        errores+
                                        '<span id="btn-close">Cerrar</span>'+
                                    '</div>'+
                                '</div>'
            $('body').append(mensajeModal);
        }
    });
});