let numeroLimite = 100;
let listaDeNumerosSorteados = [];
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela (tag, texto) {
    let campo = document.querySelector (tag, texto);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {ratio: 1.2});
    
}

function exibirMensagemInicial() {
    exibirTextoNaTela ('h1', 'Jogo do Número Secreto');
    exibirTextoNaTela ('p', `Escolha um número entre 1 e ${numeroLimite}`);
}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector ('input').value;
    if (chute == numeroSecreto) {
        exibirTextoNaTela ('h1', 'Parabéns, você ganhou!!!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você acertou o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`;
        exibirTextoNaTela ('p', mensagemTentativas );
        document.getElementById('reiniciar').removeAttribute('disabled', true);
        
        
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela ('p', 'O número secreto é menor.');
        }
            else {
                exibirTextoNaTela ('p', 'O número secreto é maior.');
            }
            tentativas++;
            limparCampo();
    }
}

function gerarNumeroAleatorio() {
    let NumeroEscolhido = parseInt (Math.random() * numeroLimite + 1);
    let quantidadeDeNumerosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeNumerosNaLista == numeroLimite) {
        return listaDeNumerosSorteados = [];
    }
    if (listaDeNumerosSorteados.includes(NumeroEscolhido)) {
         return gerarNumeroAleatorio();
    }  else {
         listaDeNumerosSorteados.push(NumeroEscolhido);
         console.log(listaDeNumerosSorteados);
         return NumeroEscolhido;
    }
}

function limparCampo () {
    chute = document.querySelector ('input')
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas =1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
    

} 




