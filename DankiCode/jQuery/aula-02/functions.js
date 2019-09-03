// PARA VER OS MÉTODOS EXISTENTES, VER
// https://api.jquery.com/

$(function () {

    // Duas formas de mudar a cor de fundo do css
    // $('div').css('background-color', '#ccc')
    $('.artigo1').css('background-color', '#ccc')

    // Atacando o padding não podemos colocar os 4 de uma vez
    $('.artigo1').css('padding-left', '20px');
    $('.artigo1').css('padding-top', '20px');
    // Algumas funções retornam o próprio objeto, assim podemos continuar trabalhando com ele --> NÃO TODAS AS FUNÇÕES
    // Podemos usar o id invés de classe tbm
    $('#teste').css('padding-rigt', '20px').css('background-color', 'red');

    // Função usada para realizar uma ação depois de 2000 milissegundos
    setTimeout(function () {
        $('#teste.artigo1').css('background-color', 'green');
    }, 2000);

    // Para atacar a cor da letra na tag p
    setTimeout(function () {
        $('.artigo1 p').css('color', 'red');
    }, 2000);

    // Para pegar a cor que está no elemento e mostrar no console
    // Note que ele pega antes da mudança que ocorre depois de 2 segundos
    console.log($('.artigo1 p').css('color'));

})
