window.onload = function () {
    var repeticao = 0;

    while (repeticao < 10) {
        console.log("Olá mundo numero: " + repeticao);
        repeticao += 1;
    }
    console.log("Cheguei até o final!");

    for (var numero = 0; numero < 10; numero++) {
        console.log("Olá Mundo!");
    }

    console.log("Outro método agora");

    var nome = 'guilherme';
    do {
        console.log("Olá Mundo");
        nome = 'Joao';
    } while (nome == 'guilherme');

}