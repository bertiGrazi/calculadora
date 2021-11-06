function insereNumero(num) {
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
}

function limpar() {
    document.getElementById('resultado').innerHTML = "";
}

function apagarNumero() {
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1)
}

function calcular() {
    fazerRequisicao()
    var resultado = document.getElementById('resultado').innerHTML;
    if(resultado) {
        document.getElementById('resultado').innerHTML = eval(resultado);
    } else {
        document.getElementById('resultado').innerHTML = "Null"
    }
}

function fazPost(url, body) {
    console.log("Body=", body)
} 

function fazerRequisicao() {
    let url = "https://dweet.io/dweet/for/calculadoraIFSP"

    let resultado = document.querySelector('#resultado').innerHTML

    console.log(resultado)

    body = {
        "resultado": resultado
    }

    fazPost() 
}