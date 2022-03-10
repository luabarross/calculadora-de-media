var nome = window.prompt('Qual seu nome?');

function Media() {

  var primeiraNota = parseFloat(document.getElementById("nota1").value);
  var segundaNota = parseFloat(document.getElementById("nota2").value);
  var terceiraNota = parseFloat(document.getElementById("nota3").value);
  var quartaNota = parseFloat(document.getElementById("nota4").value);

  var notaFinal = (primeiraNota + segundaNota + terceiraNota + quartaNota) / 4

 console.log(notaFinal)
  
  if (notaFinal >= 7){
  
document.getElementById("resultado").innerHTML = nome + " foi APROVADO com a média: " + notaFinal.toFixed(1) +  ". Parabéns!!!";
} else if (notaFinal < 7){
  
document.getElementById("resultado").innerHTML = nome + " foi REPROVADO com a média " + notaFinal.toFixed(1);
}
}
