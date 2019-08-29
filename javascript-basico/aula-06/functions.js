window.onload = function () {

    function realizarSoma(num1, num2) {
        console.log(num1 + num2);
        return num1 + num2;
    }

    // Utilizando a chamada da função
    var resultado = realizarSoma(10, 10);

    // Chamand a função e passando parametro
    realizarSoma(10, 20);

    // Declarando objeto
    var obj = {
        'nome': 'Leonardo',
        'idade': 21,
        'sexo': 'masculino',
    };

    obj.nome = 'joao';
    console.log(obj.nome);
    console.log(obj.idade);
    console.log(obj.sexo);

    // Multi-dimensional array
    var variavel = [];
    variavel[0] = [];
    variavel[0][0] = 'leonardo';
    console.log(variavel[0][0]);

};