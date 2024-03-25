    $(document).ready(function(){
        
        $('nav a').click(function() {
            $('nav').slideToggle();
        })
        
        $('.menu-hamburguer').click(function() {
            $('nav').slideToggle();
        })

        $('#phone').mask('(00) 00000-0000')
        $('form').validate({
        rules: {
            name: {
                required: true,
                minlength:3
            },
            email: {
                email: true,
                required: true
            },
            phone: {
                required: true,
                minlength:15
            },
        },
        messages: {
            name: {
                minlength: 'Por favor, digite um número válido!',
                required: 'Este campo é obrigatório!'
            },
            phone: {
                minlength:'Por favor, digite um número válido!',
                required: 'Este campo é obrigatório!'
            },
            email: {
                email: 'Por favor, digite um e-mail válido!',
                required: 'Este campo é obrigatório!'
            }
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            alert(`Existem ${camposIncorretos} campos inválidos no formulário.`);
        }
    }),
    $('header nav a #marca').click(function(){
        const destino = $('#home');

        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000)
    }),

    $('nav .navbar-nav a #about-menu').click(function(){
        const destino = $('#sobre');

        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000)
    }),

    $('nav .navbar-nav a #cursos-menu').click(function(){
        const destino = $('#cursos');

        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000)
    }),

    $('nav .navbar-nav a #contact-menu').click(function(){
        const destino = $('#contato');

        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000)
    })
})