let jogosAlugados = 0;

function contarEExibirJogosAlugados(){
    console.log(`Total de jogos alugados ${jogosAlugados}`);
}

function alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');
    let nome = gameClicado.querySelector('.dashboard__item__name');
    
    if (botao.classList.contains('dashboard__item__button--return')){
        if (confirm(`Você tem certeza que deseja devolver o jogo ${nome.textContent}?`)){
            botao.classList.remove('dashboard__item__button--return');
            imagem.classList.remove('dashboard__item__img--rented');
            botao.textContent = 'Alugar';
            alert(`O jogo ${nome.textContent} foi devolvido com sucesso!`);
            jogosAlugados--;
        }
        
    } else{
        botao.classList.add('dashboard__item__button--return');
        imagem.classList.add('dashboard__item__img--rented');
        botao.textContent = 'Devolver';
        jogosAlugados++;
        
    }
    contarEExibirJogosAlugados();
}

document.addEventListener('DOMContentLoaded', function() {
    jogosAlugados = document.querySelectorAll('.dashboard__item__img--rented').length;
    contarEExibirJogosAlugados();
});