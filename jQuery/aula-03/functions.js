// PARA VER OS MÉTODOS EXISTENTES, CONSULTE
// https://api.jquery.com/

$(function () {
    // Evento de clique
    $('.artigo1').click(function () {
        $('.artigo2').css('background-color', 'purple');
    })

    //  Evento de Hover
    // Note que no css voltava a cor normal depois que você tirava o mouse de cima, aqui para isso ocorrer é preciso colocar a função para voltar à cor anterior
    function validarHover() {
        $('.artigo1').hover(function () {
            $('.artigo2').css('background-color', 'red');
        }, function () {
            $('.artigo2').css('background-color', 'rgb(100, 100, 100)');
        })
    }

    // Função focus e Blur
    function focusBlur() {
        $('textarea').focus(function () {
            console.log("Estou dentro do text-area");
        })

        $('textarea').blur(function () {
            console.log("Fora do text-area")
        })
    }

    // Simples simple
    function validarFormulário() {
        $('select').change(function () {
            console.log("Meu select foi alterado!");
        })
    }

    // Chamando a função
    validarFormulário();
    focusBlur();
    validarHover();


})
