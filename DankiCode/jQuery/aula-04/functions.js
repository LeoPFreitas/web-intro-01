// PARA VER OS MÉTODOS EXISTENTES, CONSULTE
// https://api.jquery.com/

$(function () {

    // Variáveis
    var timer;

    // Evento scroll -> quando o scroll for ativado, ele dispara o evento x.
    $(window).scroll(function () {
        console.log("Scroll ativo!");
    })

    // Evento de redimensionamento
    $(window).resize(function () {
        console.log("Minha tela está sendo redimensionada!");
    })

    // Atualizar pagina depois de redimensionar
    $(window).resize(function () {
        clearTimeout(timer);
        timer = setTimeout(function () {
            location.href = "http://127.0.0.1:5500/jQuery/aula-04/index.html";
        }, 1000);
    })

    // Não funciona para o scroll
    // Previnir o padrão do evento --> muito usado em links
    $('a').click(function (e) {
        e.preventDefault();
        // podemos apenas retornar falso...
        // return false;
    })

})