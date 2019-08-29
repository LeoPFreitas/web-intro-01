// PARA VER OS MÉTODOS EXISTENTES, CONSULTE
// https://api.jquery.com/

$(function () {

    // O js já calcula o tamanho que ela está na tela, memso nao tendo colocado 
    // width na box
    var elWidth = $('.box').width();

    // Pedindo a largura
    // Perceba que ele pega a width menos o padding!
    console.log(elWidth)

    // Aplicando valor de width
    $('.box').width('900');
    var elWidth = $('.box').width();
    // Note que agora ele retorna ignorando o padding
    console.log(elWidth);

    // Melhor trabalhar largura diretamente no css
    $('.box').css('width', '900px');
    var elWidth = $('.box').width();
    // Note que agora ele retorna com o padding
    console.log(elWidth);

    // Retornando a largura total (com padding)
    console.log($('.box').innerWidth());

    // se você estiver usando border-box, a margem vai pra dentro, se tirar o border-box ai esse log vai mostrar o acrescimo da margem no valor de largura.
    // Precisa do parametro true --> senão fica igual o inner
    console.log($('.box').outerWidth(true));
})