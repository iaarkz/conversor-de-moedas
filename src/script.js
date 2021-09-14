function Converter() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorDolar = parseFloat(valor);
  var valorConversao = 5.22;
  var valorConvertidoo = valor * valorConversao;
  var valorFixado = valorConvertidoo.toFixed(2);
  console.log("A conversão do dólar foi de " + valorFixado + " reais.");

  document.getElementById("valorConvertido").textContent =
    "A conversão do dólar foi de " + valorFixado + " reais.";
}
