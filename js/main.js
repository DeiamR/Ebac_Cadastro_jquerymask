$(document).ready(function () {
    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(00) 00000-0000'
    });
    $('#cpf').mask('000.000.000-00', {
        placeholder: '000.000.000-00'
    });
    $('#cep').mask('00000-000', {
        placeholder: '00000-000'
    });

    $('form').validate({
        rules: {
            nome: {
                required: true,
                nomeCompleto: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            cpf: {
                required: true
            },
            endereco: {
                required: true
            },
            cep: {
                required: true
            }
        },
        messages: {
            nome: 'Por favor, insira o seu nome completo',
            email: 'Por favor, insira um email valido',
            telefone: 'Por favor, insira o seu telefone',
            cpf: 'Por favor, insira o seu CPF',
            endereco: 'Por favor, insira um endereço valido',
            cep: 'Por favor, insira o seu CEP',
        },

        submitHandler: function(form) {
            alert('Formulario enviado com sucesso')
        }
    })

    $.validator.addMethod("nomeCompleto", function(value, element) {
        return /\s/.test(value.trim());
    }, "Por favor, digite o seu nome completo");
});