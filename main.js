let personagem = {
    vida: 100,
    força: 10,
    recursos: ['Poção de Cura']
};

let rodadas = 3; 

function mostrarStatus() {
    console.log(`Vida: ${personagem.vida}`);
    console.log(`Força: ${personagem.força}`);
    console.log(`Recursos: ${personagem.recursos.join(', ')}`);
}

function start() {
    console.log("Bem-vindo ao jogo!");
    mostrarStatus();
    rodada(1);
}

function rodada(numero) {
    if (numero > rodadas) {
        if (personagem.vida > 0) {
            console.log("Parabéns! Você venceu o jogo.");
        } else {
            console.log("Você não sobreviveu. Fim de jogo.");
        }
        return;
    }

    console.log(`Rodada ${numero}:`);

    let desafio = prompt("Você encontrou um inimigo! Escolha: 1) Lutar 2) Fugir");

    if (desafio === '1') {
        console.log("Você escolheu lutar!");
        personagem.força -= 2; // Perde força ao lutar
        personagem.vida -= 10; // Perde vida ao lutar
    } else {
        console.log("Você escolheu fugir, mas perdeu um recurso.");
        personagem.recursos.pop(); // Perde um recurso ao fugir
    }

    mostrarStatus();
    
    if (personagem.vida > 0) {
        rodada(numero + 1); // Próxima rodada
    } else {
        console.log("Sua vida chegou a zero. Fim de jogo.");
    }
}
