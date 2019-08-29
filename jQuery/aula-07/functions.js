// PARA VER OS MÉTODOS EXISTENTES, CONSULTE
// https://api.jquery.com/

$(function () {

    var el = $('.box');

    // // Função html
    // // Note que se manter assim, ele vai apagar todo o conteúdo dentro do 
    // // html e vai reescrever
    el.html('<div class="teste">Meu elemento</div>');
    el.html('<h1 class="texto1">Meu texto em JavaScript!</h1>');

    // // truque para contornar isso
    // console.log(el.html()) // note que ele retorna tudo que ja tem..
    el.html(el.html() + '<div class="teste">Meu elemento</div>');

    // // Usnado a função text
    // // Ela pega apenas o texto e não aceita código html
    $('.box2').text('<div></div>');

    // // pegando apenas o texto
    console.log(el.text());

    // 
    $('input[type=button]').click(function () {
        var str = $('input[type=text').val();
        console.log(str);
        // split
        var var2 = str.split("@");
        console.log(var2);
        // pode usar a substr(indice, indice) para recorte

        // Brincando com o formulário
        var splitstr = str.split("@");
        if (splitstr[1] == 'hotmail.com') {
            $('input[type=text]').css('opacity', '0');
        }
        else {
            console.log('A condição não bateu!')
        }

    })


});