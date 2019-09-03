// PARA VER OS MÉTODOS EXISTENTES, CONSULTE
// https://api.jquery.com/

$(function () {
    // Toda vez que usamos $() estamos chamando o elemento e criando uma
    // instância dele, o que pode ser um problema em um sistema grande (memória)
    // $('.box').css('background-color', 'green');
    // $('.box').css();
    // ...

    // Solução
    // Use uma váriável ou o ID para melhorar a performance geral
    var el = $('div.box');
    el.css('background-color', 'green');

    function teste() {
        el.css('color', 'red');
    }

    teste();

})