$(document).ready(function() {
	$('#form').bootstrapValidator({
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
                    },
                        notEmpty: {
                        message: 'Ingresa tu apellido'
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
                    },
                        notEmpty: {
                        message: 'Ingresa un CI válido'
                    }
                }
            },          
            pais: {
                validators: {
                     stringLength: {
                        min: 4,
                    },
                }
            },
            telefono: {
                validators: {
					 stringLength: {
                        min: 8,
                    },
                    notEmpty: {
                        message: 'Porfavor ingrese su número de teléfono'
                    },
                }
            },
            Ciudad: {
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
});
