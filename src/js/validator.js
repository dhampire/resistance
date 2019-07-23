$(document).ready(function() {
	$('#form').bootstrapValidator({
        container: 'tooltip',
		feedbackIcons: {
			valid: 'glyphicon glyphicon-ok',
			invalid: 'glyphicon glyphicon-remove',
			validating: 'glyphicon glyphicon-refresh'
		},
		fields: {
            name: {
                validators: {
                        stringLength: {
                        min: 3,
                        message: 'Escriba su nombre'
                    },
                        notEmpty: {
                        message: 'Ingresa tu nombre correctamente'
                    }
                }
            },
            lastname: {
                validators: {
                        stringLength: {
                        min: 3,
                        message: 'Escriba su apellido'
                    },
                        notEmpty: {
                        message: 'Escriba tu apellido'
                    }
                }
            },
            mail: {
                validators: {
                    notEmpty: {
                        message: 'Por favor ingrese su correo electrónico'
                    },
                    emailAddress: {
                        message: 'Por favor ingrese un correo electrónico valido'
                    }
                }
            },
            ci: {
                validators: {
                        stringLength: {
                        min: 6,
                        message: 'Necesitamos un C.I. válido'
                    },
                        notEmpty: {
                        message: 'Ingresa un CI válido'
                    }
                }
            },          
            telefono: {
                validators: {
					 stringLength: {
                        min: 8,
                        message: 'Escriba un teléfono de referencia'
                    },
                    digits: {
                            message: 'El telefono solo puede contener número'
                        },
                    notEmpty: {
                        message: 'Porfavor ingrese su número de teléfono'
                    },
                }
            },
            ciudad: {
                validators: {
                        stringLength: {
                        min: 5,
                    },
                        notEmpty: {
                        message: 'Por favor ingrese su ciudad de origen'
                    }
                }              
            }
            }
        })
        .on('error.field.bv', function(e, data) {
           var $parent = data.element.parents('.form-group'),
                $icon   = $parent.find('.form-control-feedback[data-bv-icon-for="' + data.field + '"]'),
                title   = $icon.data('bs.tooltip').getTitle();

            $icon.tooltip('destroy').tooltip({
                html: true,
                placement: 'right',
                title: title,
                container: 'body'
            });
        });  
});
