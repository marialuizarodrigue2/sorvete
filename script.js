botao.addEventListener('click', function (){

    var nomeCliente = nome.value;
    var quantidaDeSorvete = quantidade.value;
    var saborSorvete = sabores.value;

//alert("nome:" + nomeCliente + "qnt:" + quantidaDeSorvete + "sabor:" + saborSorvete);

    pedidonome.innerHTML = nomeCliente;
    pedidoquantia.innerHTML = quantidaDeSorvete;
    pedidosabor.innerHTML = saborSorvete;

});