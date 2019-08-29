// PARA VER OS MÉTODOS EXISTENTES, CONSULTE
// https://api.jquery.com/

$(function () {
    // Função append para a classe .box
    $('.box').append('<h3>Meu elemento adicionado dinamicamente!</h3>');

    // append para elemento específico
    // Note que como existem 2 .box, nesse caso podemos passar o parametro do
    // indice 0 ou 1... mas se tivesse mais elementos, era só colocar o indice desejado
    $('.box').eq(0).append('<h3>Adicionando com eq!</h3>');

    // Pegando a div dentro da classe
    $('.box div').eq(0).append('<h3>Adicionando com eq na div!</h3>');

    // Adicionar elemento e manipular css depois
    var el = $('<h3>Meu conteúdo</h3>').appendTo('.box');
    el.css('color', 'red');

    // prepend 
    $('.box').prepend('<h3>Olá Mundo!</h3>');

    // after e before
    var t = "Meu conteúdo após a div box ";
    var r = "Meu conteúdo antes da div box ";
    $('.box').after(t);
    $('.box').before(r);

    // Para remover elementos depois de 3s
    setTimeout(function () {
        $('.box').eq(1).remove();
    }, 3000)
});