window.onload = function() {
  /*

  === --> Além de ser igual deve ser do mesmo tipo
  == --> O valor deve ser igual
  != --> O valor é difente, não importa o tipo
  !== --> O valor deve ser diferente e o tipo tbm
  <=
  >=
  <
  >
  
  */

  var nome = "Leonardo";
  var num = 10;

  if (nome !== "Pedro") {
    console.log("Verdade");
  }

  if (num !== "10") {
    console.log("O valor 10 é !== de '10' ");
  } else if (num != "10") {
    console.log("verdade");
  }
};
