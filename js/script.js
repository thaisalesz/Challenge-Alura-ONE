function criptografar(cripto) {
    cripto = cripto.replaceAll('e', 'enter')
        .replaceAll('i', 'imes')
        .replaceAll('a', 'ai')
        .replaceAll('o', 'ober')
        .replaceAll('u', 'ufat');
    return cripto;
}

function verificaSeTemLetraMaiuscula(entrada) {
    var retorno = false;
    if (entrada.toLowerCase() != entrada) {
        alert("Insira apenas letras minúsculas.");
        retorno = true;
    }
    return retorno;
}

document.getElementById("botaoCodifica").addEventListener("click", function () {

    var textoInserido = document.getElementById("codificador").value;
    if (verificaSeTemLetraMaiuscula(textoInserido)) {
        return;
    }

    document.getElementById("decodificador").value = criptografar(textoInserido);
})

document.getElementById("botaoDecodifica").addEventListener("click", function () {

    var textoInserido = document.getElementById("codificador").value;
    textoInserido = textoInserido.replaceAll('enter', 'e')
        .replaceAll('imes', 'i')
        .replaceAll('ai', 'a')
        .replaceAll('ober', 'o')
        .replaceAll('ufat', 'u');

    document.getElementById("decodificador").value = textoInserido;
})

document.getElementById("botaoLimpaTexto").addEventListener("click", function () {
    document.getElementById("codificador").value = "";
    document.getElementById("decodificador").value = "";
})

document.getElementById("botaoCopia").addEventListener("click", function () {

    var textoCopiado = document.getElementById("decodificador");

    textoCopiado.select();
    textoCopiado.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(textoCopiado.value);

    alert('Seu texto \"' + textoCopiado.value + '\" foi copiado!');
})