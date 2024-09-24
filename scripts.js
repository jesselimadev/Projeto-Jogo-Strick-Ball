// Lista de áudios ativos
let audiosAtivos = [
    new Audio('Assets/Audios-de efeitos-do-jogo/bolinha-no-tubo.mp3'),
    new Audio('Assets/Audios-de efeitos-do-jogo/comemoracao.mp3'),
    new Audio('Assets/Audios-de efeitos-do-jogo/interface-abrir.mp3'),
    new Audio('Assets/Audios-de efeitos-do-jogo/interface-fechar.mp3'),
    new Audio('Assets/Audios-de efeitos-do-jogo/som-do-jogo.mp3'),
    new Audio('Assets/Audios-de efeitos-do-jogo/proximo-nivel.mp3'),

    // Adicione todos os seus objetos de áudio aqui
];

// Carregar os áudios
audiosAtivos.forEach(audio => audio.load());

// Configurações iniciais dos áudios
audiosAtivos.forEach(audio => {
    audio.autoplay = false; // Garante que os áudios não sejam reproduzidos automaticamente
    audio.muted = false; // Garante que os áudios não estejam mutados inicialmente
});

// Cria objetos de áudio específicos
const somQueda = new Audio('Assets/Audios-de efeitos-do-jogo/bolinha-no-tubo.mp3');
const somComemoracao = new Audio('Assets/Audios-de efeitos-do-jogo/comemoracao.mp3');
const somPlay = new Audio('Assets/Audios-de efeitos-do-jogo/interface-abrir.mp3');
const somFecharInterface = new Audio('Assets/Audios-de efeitos-do-jogo/interface-fechar.mp3');
const somProximoNivel = new Audio('Assets/Audios-de efeitos-do-jogo/proximo-nivel.mp3');
const somJogo = new Audio('Assets/Audios-de efeitos-do-jogo/som-do-jogo.mp3');
somJogo.loop = true; // Define o som para tocar em loop
audiosAtivos.push(somQueda, somComemoracao, somPlay,somFecharInterface, somJogo); // Adiciona os sons à lista de áudios ativos

// Variável para armazenar se o usuário já interagiu com a página
let userInteracted = false;


// Adiciona eventos para detectar a interação do usuário
document.addEventListener('click', () => {
    userInteracted = true;
    tocarSomPlay();
    console.log('Usuário interagiu com a página (click).');
}, { once: true });

document.addEventListener('touchstart', () => {
    userInteracted = true;
    tocarSomPlay();
    console.log('Usuário interagiu com a página (touchstart).');
}, { once: true });

// Função para criar e tocar o som do botão de play
function tocarSomPlay() {
    if (userInteracted) {
        const somPlay = new Audio('Assets/Audios-de efeitos-do-jogo/interface-abrir.mp3'); // Substitua pelo caminho correto do seu arquivo de áudio
        somPlay.play().then(() => {
            console.log('Som de play reproduzido com sucesso.');
        }).catch(function(error) {
            console.error('Erro ao tentar reproduzir o som de play:', error);
        });
    } else {
        console.log('Som de play não reproduzido porque o usuário não interagiu com a página.');
    }
}

// Função para iniciar o jogo
function iniciarJogo() {
    console.log('Jogo iniciado');
    tocarSomPlay();
    // Esconde a máscara e os botões, e exibe o jogo
    document.querySelector('.mascara').style.display = 'none';
    document.querySelector('.boton').style.display = 'none';
    document.querySelector('.template-da-Home').style.display = 'none';
    document.getElementById('jogo').style.display = 'block';
    tocarSomJogo();
    // Outras lógicas de inicialização do jogo
}

// // Adiciona o evento de clique ao botão de play
// document.querySelector('.boton').addEventListener('click', iniciarJogo);

// Adiciona o evento de clique ao botão de play
document.querySelector('.boton').addEventListener('click', iniciarJogo); {() => {
    userInteracted = true;
    console.log('Usuário interagiu com a página (click).');
    // iniciarJogo();
}
};


// Função para tocar o som de queda
function tocarSomQueda() {
    if (userInteracted) {
        somQueda.play().catch(function(error) {
            console.error('Erro ao tentar reproduzir o som:', error);
        });
    } else {
        console.log('Som não reproduzido porque o usuário não interagiu com a página.');
    }
}

// Função para tocar o som de comemoração
function tocarSomComemoracao() {
    if (userInteracted) {
        somComemoracao.play().catch(function(error) {
            console.error('Erro ao tentar reproduzir o som de comemoração:', error);
        });
    } else {
        console.log('Som de comemoração não reproduzido porque o usuário não interagiu com a página.');
    }
}

// Função para tocar o som ao fechar interfaces 
function tocarSomFecharInterface() {
    if (userInteracted) {
        somFecharInterface.play().catch(function(error) {
            console.error('Erro ao tentar reproduzir o som de interface fechada:', error);
        });
    } else {
        console.log('Som de interface fechada não reproduzido porque o usuário não interagiu com a página.');
    }
}

// Função para tocar o som do jogo
function tocarSomJogo() {
    if (tocarSomPlay) {
        somJogo.play().catch(function(error) {
            console.error('Erro ao tentar reproduzir o som do jogo:', error);
        });
    } else {
        console.log('Som do jogo não reproduzido porque o usuário não interagiu com a página.');
    }
}

// Função para pausar o som do jogo
function pausarSomJogo() {
    somJogo.pause();
    console.log('O som do jogo foi pausado.');
}

// Função para tocar o som para proximo nivel
function tocarSomProximoNivel() {
    if (userInteracted) {
        somProximoNivel.play().catch(function(error) {
            console.error('Erro ao tentar reproduzir o som de Proximo nivel:', error);
        });
    } else {
        console.log('Som de proximo nivel não reproduzido porque o usuário não interagiu com a página.');
    }
}


// Evento que detecta a queda da bolinha no tubo
function detectarQueda() {
    // Lógica para detectar a queda da bolinha
    // Quando a bolinha cair no tubo, toque o som
    tocarSomQueda();
}


// Função para atualizar o nível
function atualizarNivel() {
    nivelAtual++;
    document.getElementById('nivel-valor').textContent = nivelAtual;
}

// Função para  abrir interface da Home 
function homeAction() {
    console.log("homeAction chamada");
   // Adiciona um atraso de 783 milisegundos antes de tocar o som de comemoração
  setTimeout(() => {
    tocarSomPlay();
}, 770);

somJogo.pause();

    document.querySelector('.template-da-Home').style.display = 'block';
    document.getElementById('jogo').style.display = 'none';
    document.querySelector('.boton-Home').style.display = 'block';
    document.getElementById('nivel-atual').classList.add('template-da-Home');
    document.getElementById('nivel-atual').style.display = 'none';
    document.getElementById('nivel-atual').style.display = 'block';
}

// Para simplificar o parametro, da linha 93
// Pode se usar a função criada na linha 52 á 61 e fazer da mesma forma em que está
// na linha 63 e 64 Funciona corretamente
// Agora veja o mesmo parametro da linha 95 á 103 de forma simplificada na linha 93
// document.querySelector('.boton-Home').addEventListener('click', iniciarJogo);

//Função do botão para fechar interface da home e voltar ao jogo
document.querySelector('.boton-Home').addEventListener('click', function() {
    // Esconde a máscara e os botões, e exibe o jogo
    tocarSomFecharInterface();
    console.log("jogoAction chamada");
    document.querySelector('.template-da-Home').style.display = 'none';
    document.getElementById('jogo').style.display = 'block';
    document.getElementById('nivel-atual').classList.remove('template-da-Home');
     document.getElementById('nivel-atual').style.display = 'none';
     document.getElementById('nivel-atual').style.display = 'block';
     somJogo.play();
});



// Função para abrir as configurações
function configuracoes() {
       // Adiciona um atraso de 780 milisegundos antes de tocar o som de comemoração
  setTimeout(() => {
    tocarSomPlay();
}, 100);
    document.querySelector('.template-configuracoes').style.display = 'block';
    document.querySelector('.boton-Home').style.display = 'none';
}

// Função para fechar as configurações
function fechar() {
    tocarSomFecharInterface();
    document.querySelector('.template-configuracoes').style.display = 'none';
    document.querySelector('.boton-Home').style.display = 'block';    
}

// Função para silenciar os áudios
 document.querySelector('.estereo').addEventListener('click',function stereo(){
    console.log('Stereo button clicked');
    document.querySelector('.estereo').style.visibility = 'hidden'; 
    document.querySelector('.silenciar').style.visibility = 'visible';
    audiosAtivos.forEach(audio => {
        audio.muted = true; // Silencia todos os áudios 
        console.log(`Audio ${audio.src} muted: ${audio.muted}`); // Verifica se o áudio foi silenciado
    
    });
});




// Função para reativar os áudios
document.querySelector('.silenciar').addEventListener('click', function muted() {
    console.log('Muted button clicked');
    document.querySelector('.silenciar').style.visibility = 'hidden';
    document.querySelector('.estereo').style.visibility = 'visible';
    audiosAtivos.forEach(audio => {
        // Reativa todos os áudios, exceto o de comemoração
        if (audio !== somComemoracao) {
            audio.muted = false;
            console.log(`Audio ${audio.src} muted: ${audio.muted}`); // Verifica se o áudio foi reativado
        }
    });
});


// Adiciona os eventos de clique aos botões de som




function vibration() {
    document.querySelector('.vibration').style.visibility = 'hidden';
    document.querySelector('.noVibration').style.visibility = 'visible';  
}

function noVibration() {
    document.querySelector('.noVibration').style.visibility = 'hidden'; 
    document.querySelector('.vibration').style.visibility = 'visible'; 
}


function resetarNivel() {
    // Exemplo de resetar variáveis
    nivelAtual = 1; // ou qualquer valor inicial
}

function atualizarNavbar() {
    const navbar = document.getElementById('navbar');
    if (nivelAtual >= 2) {
        navbar.style.display = 'flex'; // Exibe a navbar
    } else {
        navbar.style.display = 'none'; // Oculta a navbar
    }
}

// // Exemplo de como atualizar o nível
// function proximoNivel() {
//     nivelAtual++;
//     atualizarNavbar();
// }

// Encapsular a lógica atual do jogo
const tubes = document.querySelectorAll('.tube0, .tube1, .tube2, .tube3');
const emptyTubes = [document.querySelector('.empty-tube'), document.querySelector('.empty-tube1')];
let selectedBall = null;
const POSITION_OFFSET = 3.3; // Espaçamento padrão entre as bolinhas

/**
 * Move a bola selecionada para o tubo especificado, se possível.
 * @param {Element} tube - O tubo para onde a bola será movida.
 * @param {string} color - A cor da bola selecionada.
 */

function moveBallToTube(tube, color) {
    const ballsInTube = tube.querySelectorAll('.ball');
    const topBallColor = ballsInTube.length ? ballsInTube[ballsInTube.length - 1].getAttribute('data-color') : null;
    
    console.info(`Cor da bola no topo do tubo ${tube.className}: ${topBallColor}`);
    console.info(`Cor da bola selecionada: ${color}`);
    
    // Verifica se a bola selecionada pode ser movida para o tubo
    if (selectedBall && ballsInTube.length < 4 && (!topBallColor || topBallColor === color)) {
        tube.appendChild(selectedBall);
        selectedBall.style.bottom = ballsInTube.length ? `${ballsInTube.length * POSITION_OFFSET}rem` : '0.1rem';
        console.info(`Bolinha ${color} movida para o tubo ${tube.className}`);
        selectedBall = null; // Deseleciona a bolinha após movê-la
        // Adiciona um pequeno atraso para garantir que a bolinha esteja no tubo antes de tocar o som
        setTimeout(() => {
            tocarSomQueda(); // Toca o som quando a bolinha é movida para o tubo
        }, 939); // Ajuste o tempo conforme necessário
    } else {
        console.error(`Não é possível mover a bolinha ${color} para o tubo ${tube.className} porque contém bolas de outra cor ou está cheio.`);
        selectedBall = null; // Deseleciona a bolinha se a movimentação não for permitida
    }
}

const MAX_BALLS_PER_TUBE = 4; // Número máximo de bolas por tubo

/**
 * Manipula o clique em um tubo.
 * @param {Element} tube - O tubo que foi clicado.
 */
function handleTubeClick(tube) {
    const balls = tube.querySelectorAll('.ball');

    if (!selectedBall) {
        selectBallFromTube(tube, balls);
    } else {
        moveSelectedBallToTube(tube, balls);
        // tocarSomQueda(); // Toca o som quando a bolinha é movida para o tubo
    }
}

/**
 * Seleciona a bola do topo do tubo, se houver.
 * @param {Element} tube - O tubo de onde a bola será selecionada.
 * @param {NodeList} balls - As bolas no tubo.
 */
function selectBallFromTube(tube, balls) {
    if (balls.length > 0) {
        selectedBall = balls[balls.length - 1];
        console.info(`Bolinha selecionada no tubo ${tube.className}`);
    }
}

/**
 * Move a bola selecionada para o tubo especificado, se possível.
 * @param {Element} tube - O tubo para onde a bola será movida.
 * @param {NodeList} balls - As bolas no tubo.
 */
function moveSelectedBallToTube(tube, balls) {
    const color = selectedBall.getAttribute('data-color');
    const topBallColor = balls.length > 0 ? balls[balls.length - 1].getAttribute('data-color') : null;

    console.info(`Cor da bola no topo do tubo ${tube.className}: ${topBallColor}`);
    console.info(`Cor da bola selecionada: ${color}`);

    if (balls.length < MAX_BALLS_PER_TUBE && (!topBallColor || topBallColor === color)) {
        moveBallToTube(tube, color);
        // tocarSomQueda(); // Toca o som quando a bolinha é movida para o tubo
    } else {
        console.error(`Não é possível mover a bolinha ${color} para o tubo ${tube.className} porque contém bolas de outra cor ou está cheio.`);
        selectedBall = null; // Deseleciona a bolinha se a movimentação não for permitida
    }
}

// Seleciona todas as bolinhas
const balls = document.querySelectorAll('.ball');
/**
 * Embaralha uma lista usando o algoritmo de Fisher-Yates.
 * @param {Array} array - A lista a ser embaralhada.
 * @returns {Array} - A lista embaralhada.
 */
function shuffle(array) {
    const newArray = array.slice(); // Cria uma cópia do array original
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

// Embaralhar as bolinhas
const shuffledBalls = shuffle([...balls]); // Usar spread operator em vez de Array.from

// Limpar os tubos antes de redistribuir as bolinhas
tubes.forEach(tube => {
    tube.innerHTML = ''; // Usar innerHTML em vez de remover filhos um a um
});

/**
 * Distribui as bolinhas embaralhadas nos tubos.
 * @param {Array} shuffledBalls - As bolinhas embaralhadas.
 */
shuffledBalls.forEach((ball, index) => {
    const tubeIndex = index % tubes.length;
    tubes[tubeIndex].appendChild(ball);
    ball.style.bottom = `${(tubes[tubeIndex].childElementCount - 1) * 3.3}rem`; // Ajustar a posição da bolinha
});

// Adicionar event listeners para os tubos
tubes.forEach(tube => {
    tube.addEventListener('click', () => handleTubeClick(tube));
});

// Adicionar event listeners para os tubos vazios
emptyTubes.forEach(emptyTube => {
    console.info(`Adicionando event listener ao tubo vazio ${emptyTube.classList[0]}`);
    emptyTube.addEventListener('click', () => {
        if (selectedBall) {
            // Modificado: usar dataset em vez de getAttribute
            const color = selectedBall.dataset.color; // <--- MODIFICADO
            moveBallToTube(emptyTube, color);
            // tocarSomQueda(); // Toca o som quando a bolinha é movida para o tubo
        } else {
            const balls = emptyTube.querySelectorAll('.ball');
            if (balls.length > 0) {
                selectedBall = balls[balls.length - 1];
                emptyTube.removeChild(selectedBall); // Remover a bolinha do tubo vazio
                console.info(`Bolinha selecionada no tubo vazio ${emptyTube.classList[0]}`);
            }
        }
    });
});

let nivelAtual = 1;

// Defina como verdadeiro para usar a lógica atual ou falso para a nova lógica
const useCurrentLogic = true;

if (useCurrentLogic) {
    // Lógica atual com 4 tubos
    // Nenhuma alteração aqui
} else {
    console.info("Nível introdutório iniciado");

    // Remover todas as bolas existentes dos tubos
    // Alteração: usar `while` em vez de `for` para remover todos os filhos
    tubes.forEach(tube => {
        while (tube.firstChild) {
            tube.removeChild(tube.firstChild);
        }
    });

    const tube0 = document.querySelector('.tube0');
    const tube1 = document.querySelector('.tube1');

  /**
     * Adiciona bolas empilhadas a um tubo.
     * @param {Element} tube - O tubo onde as bolas serão adicionadas.
     * @param {string} color - A cor das bolas.
     * @param {number} numBalls - O número de bolas a serem adicionadas.
     */
    
// Função para adicionar bolas empilhadas
  function addBalls(tube, color, numBalls) {
    const positionOffset = 3.3; // Espaçamento padrão entre as bolinhas
    let bottomPosition = 0.1; // Valor padrão para a primeira bola

    for (let i = 0; i < numBalls; i++) {
        const ball = document.createElement('div');
        ball.classList.add('ball', `${color}-ball`);
        ball.setAttribute('data-color', color);
        ball.style.bottom = `${bottomPosition}rem`;
        tube.appendChild(ball);
        console.info(`Bola ${color} adicionada ao tubo: ${i + 1}`);
        bottomPosition += positionOffset;
    }
}

const tube2 = document.querySelector('.tube2');

// Clonar e adicionar bolas ao tubo 2
const redBallClone = document.createElement('div');
redBallClone.classList.add('ball', 'red-ball');
redBallClone.setAttribute('data-color', 'red');
tube2.appendChild(redBallClone);
console.info(`Bola vermelha adicionada ao tubo 2: 1`);

const blueBallClone = document.createElement('div');
blueBallClone.classList.add('ball', 'blue-ball');
blueBallClone.setAttribute('data-color', 'blue');
tube2.appendChild(blueBallClone);
console.info(`Bola azul adicionada ao tubo 2: 1`);

// Adicionar bolas nos tubos conforme especificado
addBalls(tube0, 'blue', 3);
addBalls(tube1, 'red', 3);

const tube3 = document.querySelector('.tube3');
const emptyTube1 = document.querySelector('.empty-tubes');

// Remover event listeners dos tubos 3
tube3.removeEventListener('click', handleTubeClick);
emptyTube1.removeEventListener('click', handleTubeClick);

// Esconder tubos 3 e emptyTube1
tube3.style.display = 'none';
emptyTube1.style.display = 'none';

// Variável para armazenar a bola selecionada
let selectedBall = null;

//Bloqueia cliques nos tubos especificados.
function bloquearCliques() {
    tube0.classList.add('blocked');
    tube1.classList.add('blocked');
}

/**
 * Desbloqueia cliques em um tubo específico.
 * @param {Element} tubo - O tubo a ser desbloqueado.
 */
function desbloquearClique(tubo) {
    tubo.classList.remove('blocked');
}

/**
 * Bloqueia cliques em todos os tubos.
 */
function bloquearTodosOsTubos() {
    const allTubes = document.querySelectorAll('.tube0, .tube1, .tube2'); // Seleciona todos os elementos com a classe "tube"
    allTubes.forEach(tube => tube.classList.add('blocked')); // Adiciona a classe "blocked" a cada tubo
}

/**
 * Reseta a opacidade de todos os tubos.
 */
function resetOpacidade() {
    const allTubes = document.querySelectorAll('.tube0, .tube1, .tube2');
    allTubes.forEach(tube => tube.classList.add('resetOpacity'));
}

/**
 * Função para selecionar uma bola.
 * @param {Event} event - O evento de clique.
 */
function selecionarBola(event) {
    const target = event.target;

    // Se já houver uma bolinha selecionada
    if (selectedBall) {
        // Verifica se a bolinha clicada é da mesma cor da bolinha selecionada
        if (target.classList.contains(selectedBall.classList[1])) {
            const tuboDestino = target.parentElement;
            if (podeMoverParaTubo(tuboDestino, selectedBall))
            {  
                tuboDestino.appendChild(selectedBall);
                selectedBall.style.transform = 'translateY(-1px)'; // Reseta a posição da bolinha
                selectedBall.classList.remove('flutuando', 'unclickable');
               
                selectedBall = null; // Reseta a bolinha selecionada
                // tocarSomQueda(); // Toca o som quando a bolinha é movida para o tubo

                console.info('Bola movida para o tubo:', tuboDestino);
            } else {
                console.error('Não é possível mover a bolinha para o tubo:', tuboDestino);
            }
        }
        // Se a bolinha clicada não for da mesma cor, não faz nada
        return;
    }

    // Se não houver bolinha selecionada, selecionar a bolinha clicada
    if (!target || target.classList.contains('unclickable')) return; // Bloqueia novos cliques se a bolinha for 'unclickable'
    selectedBall = target;
    selectedBall.classList.add('flutuando', 'unclickable');
    selectedBall.style.transform = 'translateY(-130px)'; // Faz a bolinha flutuar

    console.info('Bola selecionada:', selectedBall);
}

// Função para verificar se a bolinha pode ser movida para o tubo
/**
 * Função para verificar se a bolinha pode ser movida para o tubo.
 * @param {Element} tubo - O tubo destino.
 * @param {Element} bola - A bola a ser movida.
 * @returns {boolean} - Retorna true se a bola pode ser movida, caso contrário false.
 */
function podeMoverParaTubo(tubo, bola)
 {  const bolasNoTubo = tubo.querySelectorAll('.ball');
    if (bolasNoTubo.length === 0) {
        // tocarSomQueda(); // Toca o som quando a bolinha é movida para o tubo
        return true; // O tubo está vazio, pode mover
        
    }

    const corTopo = bolasNoTubo[bolasNoTubo.length - 1].getAttribute('data-color');
    const corBola = bola.getAttribute('data-color');

    return corTopo === corBola && bolasNoTubo.length < 4; // A cor é a mesma e há espaço no tubo
}

/**
 * Função para mover a bolinha para o tubo indicado.
 * @param {Event} event - O evento de clique.
 */
function moverBolaParaTubo(event) {
    const target = event.target;

   // Se o clique for em uma bolinha e já houver uma bolinha selecionada
   if (target.classList.contains('ball') && selectedBall) {
    // Verifica se a bolinha clicada é da mesma cor da bolinha selecionada
    if (target.classList.contains(selectedBall.classList[1])) {
        const tuboDestino = target.parentElement;
        if (podeMoverParaTubo(tuboDestino, selectedBall)) {
            // tocarSomQueda(); // Toca o som quando a bolinha é movida para o tubo
            tuboDestino.appendChild(selectedBall);
            selectedBall.classList.remove('flutuando', 'unclickable');
       

                  // Use requestAnimationFrame para atualizar a posição
                requestAnimationFrame(() => {
                    selectedBall.style.transform = 'translateY(-1px)';
                });
                selectedBall = null; // Reseta a bolinha selecionada
               

                console.info('Bola movida para o tubo:', tuboDestino);
            } else {
                console.error('Não é possível mover a bolinha para o tubo:', tuboDestino);
            }
    }
    // Se a bolinha clicada não for da mesma cor, não faz nada
    return;
    }
}

/**
 * Função para selecionar a bola por cor.
 * @param {Element} tubo - O tubo onde a bola será selecionada.
 * @param {string} cor - A cor da bola a ser selecionada.
 */
function selecionarBolaPorCor(tubo, cor) {
    const bola = tubo.querySelector(`.${cor}-ball`);
    if (bola && !bola.classList.contains('unclickable')) {
        selectedBall = bola;
        bola.classList.add('flutuando', 'unclickable');
        bola.style.transform = 'translateY(-130px)'; // Faz a bolinha flutuar
    }
}

/**
 * Função para mover a bola para o tubo correto.
 * @param {Element} tuboDestino - O tubo destino.
 */
function moverBola(tuboDestino) {
    
    if (selectedBall) {
        
        const tuboDestinoRect = tuboDestino.getBoundingClientRect();
        const bolaRect = selectedBall.getBoundingClientRect();
        const distanceX = tuboDestinoRect.left - bolaRect.left;
        const distanceY = tuboDestinoRect.top - bolaRect.top;
        selectedBall.style.transition = 'transform 3s ease';
        selectedBall.style.transform = `translate(${distanceX}px, ${distanceY}px)`; // Use 'px' em vez de 'rem'
        
        setTimeout(() => {

            selectedBall.style.transform = 'translateY(-1px)';
            selectedBall.classList.remove('flutuando', 'unclickable');
           
            tuboDestino.appendChild(selectedBall);
            
            selectedBall = null;
            // tocarSomQueda(); // Toca o som quando a bolinha é movida para o tubo
           

            console.info('Bola movida para o tubo:', tuboDestino);
        }, 345);
    }
}

// Adiciona eventos de clique às bolinhas e tubos
document.querySelectorAll('.ball, .tube').forEach(element => {
    if (element.classList.contains('tube') && element.children.length === 0) {
        console.warn('Tentando adicionar event listener a um tubo vazio:', element);
    } else {
        element.addEventListener('click', moverBolaParaTubo);
        // tocarSomQueda(); // Toca o som quando a bolinha é movida para o tubo
    }
});

/**
 * Função para mover a bola para o tubo.
 * @param {Event} event - O evento de clique.
 */
function moverBolaParaTubo(event) {
    const elementoClicado = event.target;
    const tubo = elementoClicado.closest('.tube');
    
    if (tubo) {
    
        const corBolaSelecionada = elementoClicado.dataset.color;
        const corBolaTopo = tubo.querySelector('.ball:last-child')?.dataset.color;
        

        if (corBolaTopo && corBolaTopo !== corBolaSelecionada) {
            console.warn(`Não é possível mover a bolinha ${corBolaSelecionada} para o tubo ${tubo.className} porque contém bolas de outra cor ou está cheio.`);
            return;
        }

        // Lógica para mover a bola
        tubo.appendChild(elementoClicado);
        console.info(`Bolinha ${corBolaSelecionada} movida para o tubo ${tubo.className}`);
    }
}

/**
 * Função para remover todas as indicações.
 */
function removerIndicacao() {
    const indicacoes = document.querySelectorAll('.indicacao');
    indicacoes.forEach(indicacao => indicacao.remove());
}

/**
 * Função para adicionar a indicação.
 * @param {Element} tubo - O tubo onde a indicação será adicionada.
 */
function adicionarIndicacao(tubo) {
    removerIndicacao(); // Remover qualquer indicação existente antes de adicionar uma nova
    const indicacao = document.createElement('div');
    indicacao.classList.add('indicacao');
    tubo.appendChild(indicacao);
}

/**
 * Função para esconder todas as mensagens.
 */
function esconderMensagens() {
    const mensagens = document.querySelectorAll('.mensagem');
    mensagens.forEach(mensagem => mensagem.style.display = 'none');
}

/**
 * Função para mostrar uma mensagem específica.
 * @param {string} idMensagem - O ID da mensagem a ser mostrada.
 */
function mostrarMensagem(idMensagem) {
    const mensagem = document.getElementById(idMensagem);
    if (mensagem) {
        mensagem.style.display = 'block'; // Mostra a mensagem
    }
}

/**
 * Função para verificar se o jogador completou a tarefa.
 */
function verificarGanho() {
    const tube0Balls = document.querySelectorAll('.tube0 .ball').length;
    const tube1Balls = document.querySelectorAll('.tube1 .ball').length;
    console.info(`Tube 0 Balls: ${tube0Balls}`);
    console.info(`Tube 1 Balls: ${tube1Balls}`);

    if (tube0Balls === 4 && tube1Balls === 4) {

        somJogo.pause();
// Adiciona um atraso de 1.5 segundos antes de tocar o som de comemoração
 setTimeout(() => {
 tocarSomComemoracao();
}, 600);

  mostrarMensagemVitoria();
// Bloquear todos os tubos após a vitória
 bloquearTodosOsTubos();
 resetOpacidade();    
    } else {
        console.info('A tarefa ainda não foi completada.');
    }
}

/**
 * Função para mostrar uma mensagem de vitória.
 */
function mostrarMensagemVitoria() {
    const mensagemVitoria = document.getElementById('mensagem-vitoria');

    // Adiciona um atraso de 1.5 segundos antes de mostrar a mensagem de vitória
    setTimeout(() => {
        mensagemVitoria.classList.add('mostrar');
       
        criarConfetes();
        
    }, 930);  
}
//* Função para criar confetes de Vitória.*/
function criarConfetes(x, y) {
    const container = document.getElementById('confetes');
    for (let i = 0; i < 50; i++) { // Ajustado para 50 confetes
      const confetti = document.createElement('div');
      confetti.classList.add('confete');
      confetti.style.left = `${x}px`;
      confetti.style.top = `${y}px`;
      confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
  
      // Dispersão circular
      const angle = Math.random() * 2 * Math.PI; // Ângulo aleatório em radianos
      const radius = Math.random() * 150; // Raio aleatório até 50px
      const offsetX = Math.cos(angle) * radius;
      const offsetY = Math.sin(angle) * radius;
  
      confetti.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
      container.appendChild(confetti);
  
      // Animação de queda
      setTimeout(() => {
        confetti.style.transition = 'transform 0.7s ease-out, opacity 0.8s ease-out';
        confetti.style.transform = `translate(${offsetX}px, ${offsetY + 100}px)`; // Queda de 100px
        confetti.style.opacity = '0';
      }, 95); // Pequeno atraso para iniciar a queda
  
      setTimeout(() => {
        confetti.remove();
      }, 850); // Remover após 2 segundos
    }
}


  
function triggerConfete() {
    const width = window.innerWidth/2;
    const height = window.innerHeight/2;
  
    // Coordenadas aleatórias para a explosão
    const x = Math.random(55) * width;
    const y = Math.random(80) * height;
  
    criarConfetes(x, y);
}
  
function sequenciaExplosoes() {
    // Explosões contínuas em diferentes partes da tela
    setInterval(() => {
      triggerConfete();
    }, 250); // Intervalo de 500ms entre explosões
}
  
  sequenciaExplosoes();

// * Função para criar confetes dos tubos.
//  */
function criarConfetesDosTubos(x, y) {
    const containerTubo = document.getElementById('confetesDosTubos');
    // containerTubo.innerHTML = ''; // Limpa confetes anteriores
    containerTubo.style.display = 'flex'; // Mostrar o container de confetes dos tubos
    for (let i = 0; i < 52; i++) { // Ajustado para 50 confetes
      const confettiTubo = document.createElement('div');
      confettiTubo.classList.add('confeteTubo');
      confettiTubo.style.left = `${x}px`;
      confettiTubo.style.top = `${y}px`;
      confettiTubo.style.backgroundColor = `hsl(${Math.random() * 95}, 100%, 55%)`;
  
      // Dispersão circular
      const angle = Math.random() * 120 * Math.PI; // Ângulo aleatório em radianos
      const radius = Math.random() * 38; // Raio aleatório até 50px
      const offsetX = Math.cos(angle) * radius;
      const offsetY = Math.sin(angle) * radius;
  
      confettiTubo.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
      containerTubo.append(confettiTubo);
  
      // Animação de queda
      setTimeout(() => {
        // confetti.style.transition = 'transform 0.7s ease-out, opacity 0.8s ease-out';
        confettiTubo.style.transform = `translate(${offsetX}px, ${offsetY + 70}px)`; // Queda de 100px
        confettiTubo.style.opacity = '0';
      }, 700); // Pequeno atraso para iniciar a queda
  
      setTimeout(() => {
        confettiTubo.remove();
      }, 1998); // Remover após 2 segundos
    }
}


  
function triggerConfetesDosTubos() {
    const width = window.innerWidth/0;
    const height = window.innerHeight/6;
  
    // Coordenadas aleatórias para a explosão
    const x = Math.random(300) *width;
    const y = Math.random(40) *height;
  
    criarConfetesDosTubos(x, y);
}
  
function sequenciaExplosoesTubo() {
    // Explosões contínuas em diferentes partes da tela
    const intervalId = setInterval(() => {
        triggerConfetesDosTubos();
    }, 200); // Intervalo de 200ms entre explosões

// Esconder o container de confetes dos tubos após a animação
// Parar as explosões após 2 segundos e fazer um disparo único
setTimeout(() => {
    clearInterval(intervalId);
    triggerConfetesDosTubos(); // Disparo único após a sequência
    setTimeout(() => {
        const containerTubo = document.getElementById('confetesDosTubos');
        containerTubo.style.display = 'none'; // Esconder o container de confetes dos tubos após a animação
    }, 2000); // Esconder após 2 segundos
}, 2000); // Sequência de explosões por 2 segundos
}
//   sequenciaExplosoesTubo();

 


// /**


// função original acima descomentar!_____________________________________________________________
  
/**
 * Função para criar confetes.
 */
// function criarConfetes() {
//     const confetesContainer = document.getElementById('confetes');
//     confetesContainer.innerHTML = ''; // Limpa confetes anteriores

//     for (let i = 0; i < 100; i++) {
//         const confete = document.createElement('div');
//         confete.classList.add('confete');
//         confete.style.left = `${Math.random() * 100}%`;
//         confete.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 58%)`;
//         confete.style.animationDelay = `${Math.random() * 2.1}s`;
//         confetesContainer.appendChild(confete);
//     }
// }

// /**
//  * Função para criar confetes.
//  */
// function criarConfeteTuboCompleto() {
//     const containerConfeteTubo = document.getElementById('confeteTuboCompleto');
    
//     // Criar confetes
//     for (let i = 0; i < 50; i++) {
//         const confetti = document.createElement('div');
//         confetti.classList.add('confeteTubo');
//         confetti.style.left = `${Math.random() * 100}%`;
//         confetti.style.bottom = '0'; // Iniciar na parte inferior
//         confetti.style.backgroundColor = getRandomColor();
//         containerConfeteTubo.appendChild(confetti);
        
//         // Animação para lançar para cima
//         confetti.style.animation = 'confeteTubo-rise 2s ease-out';
//     }
    
//     // Criar fitilhos
//     for (let i = 0; i < 4; i++) {
//         const fitilho = document.createElement('div');
//         fitilho.classList.add('fitilho');
//         fitilho.style.left = `${Math.random() * 100}%`;
//         fitilho.style.bottom = '0'; // Iniciar na parte inferior
//         fitilho.style.backgroundColor = getRandomColor();
//         containerConfeteTubo.appendChild(fitilho);
        
//         // Animação para lançar para cima
//         fitilho.style.animation = 'fitilho-rise 2s ease-out';
//     }
    
//     // Remover confetes e fitilhos após 2 segundos
//     setTimeout(() => {
//         containerConfeteTubo.innerHTML = '';
//     }, 2000);
// }

// function getRandomColor() {
//     const colors = ['#ff0a54', '#ff477e', '#ff7096', '#ff85a1', '#fbb1bd', '#f9bec7', '#f7cad0', '#fae0e4'];
//     return colors[Math.floor(Math.random() * colors.length)];
// }

// // Função para disparar o estouro de confetes
// function triggerConfeteTubo() {
//     criarConfeteTuboCompleto();
// }

/**
 * Função para verificar se o tubo está completo.
 * @param {Element} tubo - O tubo a ser verificado.
 */
function verificarCompleto(tubo) {
    const bolas = tubo.querySelectorAll('.ball');
    if (bolas.length === 4) {
        const cor = bolas[0].getAttribute('data-color'); // Assumindo que todas as bolas têm a mesma cor
        tubo.style.boxShadow = getBoxShadow(cor);
        
    } else {
        tubo.style.boxShadow = 'none'; // Adiciona 'none' para remover o brilho
    }
}

/**
 * Função para obter o box-shadow baseado na cor.
 * @param {string} cor - A cor da bola.
 * @returns {string} - O valor do box-shadow.
 */
function getBoxShadow(cor) {
    switch (cor) {
        case 'blue':
            return '0 0 13px rgb(4, 8, 255)';
        case 'red':
            return '0 0 13px rgb(255, 0, 0)';
        case 'white':
            return '0 0 13px rgb(252, 249, 249)';
        default:
            return 'none';
    }
}

/**
 * Função para verificar se o tubo está completo antes de aplicar a classe de brilho.
 * @param {Element} tubo - O tubo a ser verificado.
 */
function verificarCompletoBefore(tubo) {
    const bolas = tubo.querySelectorAll('.ball');
    if (bolas.length === 4) {
        const cor = bolas[0].getAttribute('data-color'); // Assumindo que todas as bolas têm a mesma cor
        tubo.classList.remove('complete-blue', 'complete-red', 'complete-white'); // Remove todas as classes de brilho
        tubo.classList.add(`complete-${cor}`);
        sequenciaExplosoesTubo();
        // triggerConfetesDosTubos();
    } else {
        tubo.classList.remove('complete-blue', 'complete-red', 'complete-white'); // Remove todas as classes de brilho
    }
}

// Adiciona evento de clique para avançar para o próximo nível
document.getElementById('proximo-nivel').addEventListener('click', () => {
    tocarSomProximoNivel();
    atualizarNivel();
    atualizarNavbar();


// Inicializa a navbar no estado correto
atualizarNavbar();

    document.getElementById('nivel-atual').textContent = `Nível: ${nivelAtual}`;
    document.getElementById('mensagem-vitoria').classList.remove('mostrar');
    iniciarProximoNivel();
});

/**
 * Função para iniciar o próximo nível.
 * Adicione aqui a lógica para iniciar o próximo nível.
 */
function iniciarProximoNivel() {
    // Exemplo:
    criarConfetes();
    // resetarTubos();
    // gerarNovasBolas();
    // ...
}

/**
 * Função para iniciar o jogo.
 */
function iniciarJogo() {
    bloquearCliques(tube0, tube1); // Bloquear cliques nos tubos 0 e 1 inicialmente
    adicionarIndicacao(tube2);

    tube2.addEventListener('click', function() {
        removerIndicacao(tube2);
        selecionarBolaPorCor(tube2, 'blue'); // Garantir que a bolinha azul flutue
        bloquearTodosOsTubos();
        desbloquearClique(tube0); // Desbloquear clique no tubo 0
        adicionarIndicacao(tube2);
        adicionarIndicacao(tube0);
        esconderMensagens('mensagem1');
        mostrarMensagem('mensagem2');

        tube0.addEventListener('click', function() {
            removerIndicacao(tube0);
            moverBola(tube0);
            bloquearCliques(tube0); // Bloquear cliques nos tubos 0 e 1 novamente
            desbloquearClique(tube2);
            verificarCompleto(tube0);
            verificarCompletoBefore(tube0); 
            adicionarIndicacao(tube2);
            esconderMensagens('mensagem2');
            mostrarMensagem('mensagem1');

            tube2.addEventListener('click', function() {
                removerIndicacao(tube2);
                selecionarBolaPorCor(tube2, 'red'); // Garantir que a bolinha vermelha flutue
                bloquearTodosOsTubos();
                desbloquearClique(tube1); // Desbloquear clique no tubo 1
                adicionarIndicacao(tube2);
                adicionarIndicacao(tube1);
                esconderMensagens('mensagem1');
                mostrarMensagem('mensagem3');

                tube1.addEventListener('click', function() {
                    removerIndicacao(tube1);
                    moverBola(tube1);
                    verificarCompleto(tube1);
                    verificarCompletoBefore(tube1); 
                    esconderMensagens('mensagem3');
                    document.getElementById('mensagem3').style.display = 'none'; // Esconde a mensagem 3
                    verificarGanho(); // Verifica se o jogador completou a tarefa
                    bloquearTodosOsTubos();
                    resetOpacidade();
                }, { once: true });
            }, { once: true });
        }, { once: true });
    }, { once: true });
}

// Iniciar o jogo ao carregar a página
window.onload = iniciarJogo;


/**
 * Função para mudar o nível do jogo.
 * @param {string} nivel - O nível a ser aplicado.
 */
function mudarNivel(nivel) {
    document.body.className = ''; // Remove todas as classes do body
    document.body.classList.add(nivel); // Adiciona a classe do nível atual
}

// Exemplo de uso:
mudarNivel('nivel-intro'); // Aplica o tema do nível introdutório
// mudarNivel('nivel-1'); // Aplica o tema do nível 1
// mudarNivel('nivel-2'); // Aplica o tema do nível 2
}
//Função Para Otimizar o Desempenho no carregamento de imagens Lazy-Loading...
document.addEventListener("DOMContentLoaded", function() {
    let lazyBackgrounds = [].slice.call(document.querySelectorAll(".lazy-bg"));

    // Adicione os caminhos das imagens aqui
    let backgroundImages = [
        "Assets/Temas-para-o-Jogo/tema1-peixe-palhaço.jpg",
        "Assets/Icone-de-indicação/indicador.png",
        "Assets/imagens-template-da-home/template-1.webp",
        "Assets/imagens-template-da-home/template-configuracoes.jpg",
        "Assets/Img-Principal/img-de-inicio-do-jogo.jpeg",
    ];

    lazyBackgrounds.forEach((lazyBackground, index) => {
        lazyBackground.dataset.bg = backgroundImages[index];
    });

    if ("IntersectionObserver" in window) {
        let lazyBackgroundObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    let lazyBackground = entry.target;
                    lazyBackground.style.backgroundImage = `url(${lazyBackground.dataset.bg})`;
                    lazyBackground.classList.remove("lazy-bg");
                    lazyBackgroundObserver.unobserve(lazyBackground);
                }
            });
        });

        lazyBackgrounds.forEach(function(lazyBackground) {
            lazyBackgroundObserver.observe(lazyBackground);
        });
    } else {
        // Fallback para navegadores que não suportam Intersection Observer
        let lazyLoad = function() {
            lazyBackgrounds.forEach(function(lazyBackground) {
                if (lazyBackground.getBoundingClientRect().top < window.innerHeight && lazyBackground.getBoundingClientRect().bottom > 0 && getComputedStyle(lazyBackground).display !== "none") {
                    lazyBackground.style.backgroundImage = `url(${lazyBackground.dataset.bg})`;
                    lazyBackground.classList.remove("lazy-bg");
                }
            });

            if (lazyBackgrounds.length === 0) {
                document.removeEventListener("scroll", lazyLoad);
                window.removeEventListener("resize", lazyLoad);
                window.removeEventListener("orientationchange", lazyLoad);
            }
        };

        document.addEventListener("scroll", lazyLoad);
        window.addEventListener("resize", lazyLoad);
        window.addEventListener("orientationchange", lazyLoad);
    }
});

// _______________________________________________________________________________________

// ESSE CÓDIGO VALE OURO ESTÁ PRONTO TODA A LÓGICA DE JOGO NÃO EXCLUA NÃO PERCA ESTE CÓDICO ABAIXO!!!!!!!

// const tubes = document.querySelectorAll('.tube0, .tube1, .tube2, .tube3');
// const emptyTubes = [document.querySelector('.empty-tube'), document.querySelector('.empty-tube1')];
// let selectedBall = null;

// function moveBallToTube(tube, color) {
//     const ballsInTube = tube.querySelectorAll('.ball');
//     const topBallColor = ballsInTube.length > 0 ? ballsInTube[ballsInTube.length - 1].getAttribute('data-color') : null;
    
//     console.log(`Cor da bola no topo do tubo ${tube.classList[0]}: ${topBallColor}`);
//     console.log(`Cor da bola selecionada: ${color}`);
    
//     if (ballsInTube.length < 4 && (topBallColor === null || topBallColor === color)) {
//         tube.appendChild(selectedBall);
//         let positionOffset = 3.3; // Espaçamento padrão entre as balls
//         if (ballsInTube.length === 0) {
//             selectedBall.style.bottom = '0.1rem'; // Valor padrão para a primeira bola
//         } else {
//             selectedBall.style.bottom = `${ballsInTube.length * positionOffset}rem`;
//         }
//         console.log(`Bolinha ${color} movida para o tubo ${tube.classList[0]}`);
//         selectedBall = null; // Deseleciona a bolinha após movê-la
//     } else {
//         console.log(`Não é possível mover a bolinha ${color} para o tubo ${tube.classList[0]} porque contém bolas de outra cor.`);
//         selectedBall = null; // Deseleciona a bolinha se a movimentação não for permitida
//     }
// }

// function handleTubeClick(tube) {
//     const balls = tube.querySelectorAll('.ball');
    
//     if (!selectedBall) {
//         if (balls.length > 0) {
//             selectedBall = balls[balls.length - 1];
//             console.log(`Bolinha selecionada no tubo ${tube.classList[0]}`);
//         }
//     } else {
//         const color = selectedBall.getAttribute('data-color');
//         const topBallColor = balls.length > 0 ? balls[balls.length - 1].getAttribute('data-color') : null;
        
//         console.log(`Cor da bola no topo do tubo ${tube.classList[0]}: ${topBallColor}`);
//         console.log(`Cor da bola selecionada: ${color}`);
        
//         if (balls.length === 0 || topBallColor === color) {
//             // Se o tubo estiver vazio ou contém bolas da mesma cor, posicione a bolinha
//             moveBallToTube(tube, color);
//         } else {
//             console.log(`Não é possível mover a bolinha ${color} para o tubo ${tube.classList[0]} porque contém bolas de outra cor.`);
//             selectedBall = null; // Deseleciona a bolinha se a movimentação não for permitida
//         }
//     }
// }

// // Selecionar todas as balls
// const balls = document.querySelectorAll('.ball');

// // Função para embaralhar uma lista usando o algoritmo de Fisher-Yates
// function shuffle(array) {
//     for (let i = array.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));
//         [array[i], array[j]] = [array[j], array[i]];
//     }
//     return array;
// }

// // Embaralhar as balls
// const shuffledBalls = shuffle(Array.from(balls));

// // Limpar os tubos antes de redistribuir as balls
// tubes.forEach(tube => {
//     while (tube.firstChild) {
//         tube.removeChild(tube.firstChild);
//     }
// });

// // Distribuir as balls embaralhadas nos tubos
// shuffledBalls.forEach((ball, index) => {
//     const tubeIndex = index % tubes.length;
//     tubes[tubeIndex].appendChild(ball);
//     ball.style.bottom = `${(tubes[tubeIndex].childElementCount - 1) * 3.3}rem`; // Ajustar a posição da bolinha
// });

// // Adicionar event listeners para os tubos
// tubes.forEach(tube => {
//     tube.addEventListener('click', () => handleTubeClick(tube));
// });

// emptyTubes.forEach(emptyTube => {
//         console.log(`Adicionando event listener ao tubo vazio ${emptyTube.classList[0]}`);
//         emptyTube.addEventListener('click', () => {
//             if (selectedBall) {
//                 const color = selectedBall.getAttribute('data-color');
//                 moveBallToTube(emptyTube, color);
//             } else {
//                 const balls = emptyTube.querySelectorAll('.ball');
//                 if (balls.length > 0) {
//                     selectedBall = balls[balls.length - 1];
//                     emptyTube.removeChild(selectedBall); // Remover a bolinha do tubo vazio
//                     console.log(`Bolinha selecionada no tubo vazio ${emptyTube.classList[0]}`);
//                 }
//             }
//         });
//     });
// ESSE CÓDIGO VALE OURO ESTÁ PRONTO TODA A LÓGICA DE JOGO NÃO EXCLUA NÃO PERCA ESTE CÓDICO ACIMA!!!!!!









    

// const isIntroductoryLevel = true; // Defina como necessário
// const tubes = document.querySelectorAll('.tube0, .tube1, .tube2');
// console.log(`isIntroductoryLevel: ${isIntroductoryLevel}`);

// if (isIntroductoryLevel) {
//     console.log("Nível introdutório iniciado");

//     // Remover todas as bolas existentes dos tubos
//     tubes.forEach(tube => {
//         while (tube.firstChild) {
//             tube.removeChild(tube.firstChild);
//         }
//     });

//     const tube0 = document.querySelector('.tube0');
//     const blueBall = document.createElement('div');
//     blueBall.classList.add('ball', 'blue-ball');
//     blueBall.setAttribute('data-color', 'blue');

//     for (let i = 0; i < 3; i++) {
//         tube0.appendChild(blueBall.cloneNode(true));
//         console.log(`Bola azul adicionada ao tubo 0: ${i + 1}`);
//     }

//     const tube1 = document.querySelector('.tube1');
//     const redBall = document.createElement('div');
//     redBall.classList.add('ball', 'red-ball');
//     redBall.setAttribute('data-color', 'red');

//     for (let i = 0; i < 3; i++) {
//         tube1.appendChild(redBall.cloneNode(true));
//         console.log(`Bola vermelha adicionada ao tubo 1: ${i + 1}`);
//     }

//     const tube2 = document.querySelector('.tube2');
//     const redBallClone = redBall.cloneNode(true);
//     const blueBallClone = blueBall.cloneNode(true);
//     tube2.appendChild(redBallClone);
//     console.log(`Bola vermelha adicionada ao tubo 2: 1`);
//     tube2.appendChild(blueBallClone);
//     console.log(`Bola azul adicionada ao tubo 2: 1`);
// } else {
//     console.log("Nível não introdutório iniciado");
//     // Sua lógica atual de embaralhamento (caso não seja o nível introdutório)
// }

// // Selecionar todas as balls
// const balls = document.querySelectorAll('.ball');
// console.log(`Total de balls após inicialização: ${balls.length}`);
// balls.forEach((ball, index) => {
//     console.log(`Bola ${index + 1}: ${ball.getAttribute('data-color')}`);
// });

// // Adicionar event listeners para os tubos
// tubes.forEach(tube => {
//     console.log(`Adicionando event listener ao tubo ${tube.classList[0]}`);
//     tube.addEventListener('click', () => handleTubeClick(tube));
// });
























// erro de tube index 
// const tubes = document.querySelectorAll('.tube0, .tube1, .tube2, .tube3');
// const emptyTubes = [document.querySelector('.empty-tube'), document.querySelector('.empty-tube1')];
// let selectedBall = null;
// let currentLevel = 0;

// function moveBallToTube(tube, color) {
//     const ballsInTube = tube.querySelectorAll('.ball');
//     const topBallColor = ballsInTube.length > 0 ? ballsInTube[ballsInTube.length - 1].getAttribute('data-color') : null;
    
//     console.log(`Cor da bola no topo do tubo ${tube.classList[0]}: ${topBallColor}`);
//     console.log(`Cor da bola selecionada: ${color}`);
    
//     if (ballsInTube.length < 4 && (topBallColor === null || topBallColor === color)) {
//         tubes.appendChild(selectedBall);
//         let positionOffset = 3.3; // Espaçamento padrão entre as balls
//         if (ballsInTube.length === 0) {
//             selectedBall.style.bottom = '0.1rem'; // Valor padrão para a primeira bola
//         } else {
//             selectedBall.style.bottom = `${ballsInTube.length * positionOffset}rem`;
//         }
//         console.log(`Bolinha ${color} movida para o tubo ${tube.classList[0]}`);
//         selectedBall = null; // Deseleciona a bolinha após movê-la
//     } else {
//         console.log(`Não é possível mover a bolinha ${color} para o tubo ${tube.classList[0]} porque contém bolas de outra cor.`);
//         selectedBall = null; // Deseleciona a bolinha se a movimentação não for permitida
//     }
// }

// function handleTubeClick(tube) {
//     const balls = tube.querySelectorAll('.ball');
    
//     if (!selectedBall) {
//         if (balls.length > 0) {
//             selectedBall = balls[balls.length - 1];
//             console.log(`Bolinha selecionada no tubo ${tube.classList[0]}`);
//         }
//     } else {
//         const color = selectedBall.getAttribute('data-color');
//         const topBallColor = balls.length > 0 ? balls[balls.length - 1].getAttribute('data-color') : null;
        
//         console.log(`Cor da bola no topo do tubo ${tube.classList[0]}: ${topBallColor}`);
//         console.log(`Cor da bola selecionada: ${color}`);
        
//         if (balls.length === 0 || topBallColor === color) {
//             // Se o tubo estiver vazio ou contém bolas da mesma cor, posicione a bolinha
//             moveBallToTube(tube, color);
//         } else {
//             console.log(`Não é possível mover a bolinha ${color} para o tubo ${tube.classList[0]} porque contém bolas de outra cor.`);
//             selectedBall = null; // Deseleciona a bolinha se a movimentação não for permitida
//         }
//     }
// }

// // Função para embaralhar uma lista usando o algoritmo de Fisher-Yates
// function shuffle(array) {
//     for (let i = array.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));
//         [array[i], array[j]] = [array[j], array[i]];
//     }
//     return array;
// }

// function generateLevelParameters(level) {
//     const isBonusLevel = (level % 5 === 0) && (level !== 0);
//     if (isBonusLevel) {
//         const numTubes = 5;
//         const numBalls = 5 + Math.floor(level / 5); // Aumenta o número de balls a cada nível bônus
//         return { numTubes, numBalls, isBonusLevel };
//     } else {
//         const numTubes = Math.min(3 + Math.floor(level / 10), 10); // Aumenta o número de tubos a cada 10 níveis, até um máximo de 10 tubos
//         const numBalls = numTubes * 4; // Cada tubo pode conter até 4 balls
//         return { numTubes, numBalls, isBonusLevel };
//     }
// }

// function initializeLevel(level) {
//     const { numTubes, numBalls, isBonusLevel } = generateLevelParameters(level);
//     const tubes = document.querySelectorAll('.tube');
//     const balls = document.querySelectorAll('.ball');

//     console.log(`Inicializando nível ${level} com ${numTubes} tubos e ${numBalls} balls.`);

//     // Limpar tubos e balls
//     tubes.forEach(tube => {
//         while (tube.firstChild) {
//             tube.removeChild(tube.firstChild);
//         }
//     });

//     // Distribuir balls nos tubos
//     const shuffledBalls = shuffle(Array.from(balls).slice(0, numBalls));
//     shuffledBalls.forEach((ball, index) => {
//         const tubeIndex = index % numTubes;
//         tubes[tubeIndex].appendChild(ball);
//         ball.style.bottom = `${(tubes[tubeIndex].childElementCount - 1) * 3.3}rem`;
//     });

//     // Adicionar event listeners para os tubos
//     tubes.forEach(tube => {
//         tube.addEventListener('click', () => handleTubeClick(tube));
//     });

//     if (isBonusLevel) {
//         console.log(`Nível Bônus ${level}!`);
//     } else {
//         console.log(`Nível ${level}`);
//     }


// function advanceLevel() {
//     currentLevel++;
//     if (currentLevel < 1000) {
//         initializeLevel(currentLevel);
//     } else {
//         console.log('Parabéns! Você completou todos os níveis!');
//     }
// }

// // Inicializar o primeiro nível
// initializeLevel(currentLevel);

// // Adicionar event listeners para os tubos vazios
// emptyTubes.forEach(emptyTube => {
//     emptyTube.addEventListener('click', () => {
//         if (selectedBall) {
//             const color = selectedBall.getAttribute('data-color');
//             moveBallToTube(emptyTube, color);
//         } else {
//             const balls = emptyTube.querySelectorAll('.ball');
//             if (balls.length > 0) {
//                 selectedBall = balls[balls.length - 1];
//             }
//         }
//     });
// });
// }





// Bug no código nada funciona código se tornou inútil
// const tubes = document.querySelectorAll('.tube0, .tube1, .tube2, .tube3');
// const emptyTubes = [document.querySelector('.empty-tube'), document.querySelector('.empty-tube1')];
// let selectedBall = null;
// let currentLevel = 0;

// function moveBallToTube(tube, color) {
//     const ballsInTube = tube.querySelectorAll('.ball');
//     const topBallColor = ballsInTube.length > 0 ? ballsInTube[ballsInTube.length - 1].getAttribute('data-color') : null;
    
//     console.log(`Cor da bola no topo do tubo ${tube.classList[0]}: ${topBallColor}`);
//     console.log(`Cor da bola selecionada: ${color}`);
    
//     if (ballsInTube.length < 4 && (topBallColor === null || topBallColor === color)) {
//         tube.appendChild(selectedBall);
//         let positionOffset = 3.3; // Espaçamento padrão entre as balls
//         if (ballsInTube.length === 0) {
//             selectedBall.style.bottom = '0.1rem'; // Valor padrão para a primeira bola
//         } else {
//             selectedBall.style.bottom = `${ballsInTube.length * positionOffset}rem`;
//         }
//         console.log(`Bolinha ${color} movida para o tubo ${tube.classList[0]}`);
//         selectedBall = null; // Deseleciona a bolinha após movê-la
//     } else {
//         console.log(`Não é possível mover a bolinha ${color} para o tubo ${tube.classList[0]} porque contém bolas de outra cor.`);
//         selectedBall = null; // Deseleciona a bolinha se a movimentação não for permitida
//     }
// }

// function handleTubeClick(tube) {
//     const balls = tube.querySelectorAll('.ball');
    
//     if (!selectedBall) {
//         if (balls.length > 0) {
//             selectedBall = balls[balls.length - 1];
//             console.log(`Bolinha selecionada no tubo ${tube.classList[0]}`);
//         }
//     } else {
//         const color = selectedBall.getAttribute('data-color');
//         const topBallColor = balls.length > 0 ? balls[balls.length - 1].getAttribute('data-color') : null;
        
//         console.log(`Cor da bola no topo do tubo ${tube.classList[0]}: ${topBallColor}`);
//         console.log(`Cor da bola selecionada: ${color}`);
        
//         if (balls.length === 0 || topBallColor === color) {
//             // Se o tubo estiver vazio ou contém bolas da mesma cor, posicione a bolinha
//             moveBallToTube(tube, color);
//         } else {
//             console.log(`Não é possível mover a bolinha ${color} para o tubo ${tube.classList[0]} porque contém bolas de outra cor.`);
//             selectedBall = null; // Deseleciona a bolinha se a movimentação não for permitida
//         }
//     }
// }

// // Função para embaralhar uma lista usando o algoritmo de Fisher-Yates
// function shuffle(array) {
//     for (let i = array.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));
//         [array[i], array[j]] = [array[j], array[i]];
//     }
//     return array;
// }

// function generateLevelParameters(level) {
//     const isBonusLevel = (level % 5 === 0) && (level !== 0);
//     if (isBonusLevel) {
//         const numTubes = 5;
//         const numBalls = 5 + Math.floor(level / 5); // Aumenta o número de balls a cada nível bônus
//         return { numTubes, numBalls, isBonusLevel };
//     } else {
//         const numTubes = Math.min(3 + Math.floor(level / 10), 10); // Aumenta o número de tubos a cada 10 níveis, até um máximo de 10 tubos
//         const numBalls = numTubes * 4; // Cada tubo pode conter até 4 balls
//         return { numTubes, numBalls, isBonusLevel };
//     }
// }

// function initializeLevel(level) {
//     const { numTubes, numBalls, isBonusLevel } = generateLevelParameters(level);
//     const tubes = document.querySelectorAll('.tube');
//     const balls = document.querySelectorAll('.ball');

//     // Limpar tubos e balls
//     tubes.forEach(tube => {
//         while (tube.firstChild) {
//             tube.removeChild(tube.firstChild);
//         }
//     });

//     // Distribuir balls nos tubos
//     const shuffledBalls = shuffle(Array.from(balls).slice(0, numBalls));
//     shuffledBalls.forEach((ball, index) => {
//         const tubeIndex = index % numTubes;
//         tubes[tubeIndex].appendChild(ball);
//         ball.style.bottom = `${(tubes[tubeIndex].childElementCount - 1) * 3.3}rem`;
//     });

//     // Adicionar event listeners para os tubos
//     tubes.forEach(tube => {
//         tube.addEventListener('click', () => handleTubeClick(tube));
//     });

//     if (isBonusLevel) {
//         console.log(`Nível Bônus ${level}!`);
//     } else {
//         console.log(`Nível ${level}`);
//     }
// }

// function advanceLevel() {
//     currentLevel++;
//     if (currentLevel < 1000) {
//         initializeLevel(currentLevel);
//     } else {
//         console.log('Parabéns! Você completou todos os níveis!');
//     }
// }

// // Inicializar o primeiro nível
// initializeLevel(currentLevel);

// // Adicionar event listeners para os tubos vazios
// emptyTubes.forEach(emptyTube => {
//     emptyTube.addEventListener('click', () => {
//         if (selectedBall) {
//             const color = selectedBall.getAttribute('data-color');
//             moveBallToTube(emptyTube, color);
//         } else {
//             const balls = emptyTube.querySelectorAll('.ball');
//             if (balls.length > 0) {
//                 selectedBall = balls[balls.length - 1];
//             }
//         }
//     });
// });

// Precisa arrumar esta logica
// const tubes = document.querySelectorAll('.tube0, .tube1, .tube2');
// let selectedBall = null;

// function moveBallToTube(tube, color) {
//     const ballsInTube = tube.querySelectorAll('.ball');
//     const topBallColor = ballsInTube.length > 0 ? ballsInTube[ballsInTube.length - 1].getAttribute('data-color') : null;
    
//     console.log(`Cor da bola no topo do tubo ${tube.classList[0]}: ${topBallColor}`);
//     console.log(`Cor da bola selecionada: ${color}`);
    
//     if (ballsInTube.length < 4 && (topBallColor === null || topBallColor === color)) {
//         tube.appendChild(selectedBall);
//         let positionOffset = 3.3; // Espaçamento padrão entre as balls
//         if (ballsInTube.length === 0) {
//             selectedBall.style.bottom = '0.1rem'; // Valor padrão para a primeira bola
//         } else {
//             selectedBall.style.bottom = `${ballsInTube.length * positionOffset}rem`;
//         }
//         console.log(`Bolinha ${color} movida para o tubo ${tube.classList[0]}`);
//         selectedBall = null; // Deseleciona a bolinha após movê-la
//     } else {
//         console.log(`Não é possível mover a bolinha ${color} para o tubo ${tube.classList[0]} porque contém bolas de outra cor.`);
//         selectedBall = null; // Deseleciona a bolinha se a movimentação não for permitida
//     }
// }

// function handleTubeClick(tube) {
//     const balls = tube.querySelectorAll('.ball');
    
//     if (!selectedBall) {
//         if (balls.length > 0) {
//             selectedBall = balls[balls.length - 1];
//             console.log(`Bolinha selecionada no tubo ${tube.classList[0]}`);
//         }
//     } else {
//         const color = selectedBall.getAttribute('data-color');
//         const topBallColor = balls.length > 0 ? balls[balls.length - 1].getAttribute('data-color') : null;
        
//         console.log(`Cor da bola no topo do tubo ${tube.classList[0]}: ${topBallColor}`);
//         console.log(`Cor da bola selecionada: ${color}`);
        
//         if (balls.length === 0 || topBallColor === color) {
//             // Se o tubo estiver vazio ou contém bolas da mesma cor, posicione a bolinha
//             moveBallToTube(tube, color);
//         } else {
//             console.log(`Não é possível mover a bolinha ${color} para o tubo ${tube.classList[0]} porque contém bolas de outra cor.`);
//             selectedBall = null; // Deseleciona a bolinha se a movimentação não for permitida
//         }
//     }
// }

// // Defina uma variável para controlar o nível introdutório
// const isIntroductoryLevel = true; // Defina como necessário

// console.log(`isIntroductoryLevel: ${isIntroductoryLevel}`);

// if (!isIntroductoryLevel) {
//     console.log("Nível não introdutório iniciado");
//     // Lógica de embaralhamento
// } else {
//     console.log("Nível introdutório iniciado");

//     // Remover todas as bolas existentes dos tubos
//     tubes.forEach(tube => {
//         while (tube.firstChild) {
//             tube.removeChild(tube.firstChild);
//         }
//     });

//     const tube0 = document.querySelector('.tube0');
//     const blueBall = document.createElement('div');
//     blueBall.classList.add('ball', 'blue-ball');
//     blueBall.setAttribute('data-color', 'blue');

//     for (let i = 0; i < 3; i++) {
//         tube0.appendChild(blueBall.cloneNode(true));
//         console.log(`Bola azul adicionada ao tubo 0: ${i + 1}`);
//     }

//     const tube1 = document.querySelector('.tube1');
//     const redBall = document.createElement('div');
//     redBall.classList.add('ball', 'red-ball');
//     redBall.setAttribute('data-color', 'red');

//     for (let i = 0; i < 3; i++) {
//         tube1.appendChild(redBall.cloneNode(true));
//         console.log(`Bola vermelha adicionada ao tubo 1: ${i + 1}`);
//     }

//     const tube2 = document.querySelector('.tube2');
//     const redBallClone = redBall.cloneNode(true);
//     const blueBallClone = blueBall.cloneNode(true);
//     tube2.appendChild(redBallClone);
//     console.log(`Bola vermelha adicionada ao tubo 2: 1`);
//     tube2.appendChild(blueBallClone);
//     console.log(`Bola azul adicionada ao tubo 2: 1`);
// }

// // Selecionar todas as balls
// const balls = document.querySelectorAll('.ball');
// console.log(`Total de balls após inicialização: ${balls.length}`);
// balls.forEach((ball, index) => {
//     console.log(`Bola ${index + 1}: ${ball.getAttribute('data-color')}`);
// });

// // Adicionar event listeners para os tubos
// tubes.forEach(tube => {
//     console.log(`Adicionando event listener ao tubo ${tube.classList[0]}`);
//     tube.addEventListener('click', () => handleTubeClick(tube));
// });




// const tubes = document.querySelectorAll('.tube0, .tube1, .tube2, .tube3');
// const emptyTubes = [document.querySelector('.empty-tube'), document.querySelector('.empty-tube1')];
// let selectedBall = null;

// function moveBallToTube(tube, color) {
//     const ballsInTube = tube.querySelectorAll('.ball');
//     const topBallColor = ballsInTube.length > 0 ? ballsInTube[ballsInTube.length - 1].getAttribute('data-color') : null;
    
//     console.log(`Cor da bola no topo do tubo ${tube.classList[0]}: ${topBallColor}`);
//     console.log(`Cor da bola selecionada: ${color}`);
    
//     if (ballsInTube.length < 4 && (topBallColor === null || topBallColor === color)) {
//         tube.appendChild(selectedBall);
//         let positionOffset = 3.3; // Espaçamento padrão entre as balls
//         if (ballsInTube.length === 0) {
//             selectedBall.style.bottom = '0.1rem'; // Valor padrão para a primeira bola
//         } else {
//             selectedBall.style.bottom = `${ballsInTube.length * positionOffset}rem`;
//         }
//         console.log(`Bolinha ${color} movida para o tubo ${tube.classList[0]}`);
//         selectedBall = null; // Deseleciona a bolinha após movê-la
//     } else {
//         console.log(`Não é possível mover a bolinha ${color} para o tubo ${tube.classList[0]} porque contém bolas de outra cor.`);
//         selectedBall = null; // Deseleciona a bolinha se a movimentação não for permitida
//     }
// }

// function handleTubeClick(tube) {
//     const balls = tube.querySelectorAll('.ball');
    
//     if (!selectedBall) {
//         if (balls.length > 0) {
//             selectedBall = balls[balls.length - 1];
//             console.log(`Bolinha selecionada no tubo ${tube.classList[0]}`);
//         }
//     } else {
//         const color = selectedBall.getAttribute('data-color');
//         const topBallColor = balls.length > 0 ? balls[balls.length - 1].getAttribute('data-color') : null;
        
//         console.log(`Cor da bola no topo do tubo ${tube.classList[0]}: ${topBallColor}`);
//         console.log(`Cor da bola selecionada: ${color}`);
        
//         if (balls.length === 0 || topBallColor === color) {
//             // Se o tubo estiver vazio ou contém bolas da mesma cor, posicione a bolinha
//             moveBallToTube(tube, color);
//         } else {
//             console.log(`Não é possível mover a bolinha ${color} para o tubo ${tube.classList[0]} porque contém bolas de outra cor.`);
//             selectedBall = null; // Deseleciona a bolinha se a movimentação não for permitida
//         }
//     }
// }

// // Defina uma variável para controlar o nível introdutório
// const isIntroductoryLevel = true; // Defina como necessário

// console.log(`isIntroductoryLevel: ${isIntroductoryLevel}`);

// if (!isIntroductoryLevel) {
//     console.log("Nível não introdutório iniciado");
//     // Lógica de embaralhamento
// } else {
//     console.log("Nível introdutório iniciado");

//     // Remover todas as bolas existentes dos tubos
//     tubes.forEach(tube => {
//         while (tube.firstChild) {
//             tube.removeChild(tube.firstChild);
//         }
//     });

//     const tube0 = document.querySelector('.tube0');
//     const blueBall = document.createElement('div');
//     blueBall.classList.add('ball', 'blue-ball');

//     for (let i = 0; i < 3; i++) {
//         tube0.appendChild(blueBall.cloneNode(true));
//         console.log(`Bola azul adicionada ao tubo 0: ${i + 1}`);
//     }

//     const tube1 = document.querySelector('.tube1');
//     const redBall = document.createElement('div');
//     redBall.classList.add('ball', 'red-ball');

//     for (let i = 0; i < 3; i++) {
//         tube1.appendChild(redBall.cloneNode(true));
//         console.log(`Bola vermelha adicionada ao tubo 1: ${i + 1}`);
//     }

//     const tube2 = document.querySelector('.tube2');
//     tube2.appendChild(redBall.cloneNode(true));
//     console.log(`Bola vermelha adicionada ao tubo 2: 1`);
//     tube2.appendChild(blueBall.cloneNode(true));
//     console.log(`Bola azul adicionada ao tubo 2: 1`);
// }

// // Selecionar todas as balls
// const balls = document.querySelectorAll('.ball');
// console.log(`Total de balls após inicialização: ${balls.length}`);
// balls.forEach((ball, index) => {
//     console.log(`Bola ${index + 1}: ${ball.getAttribute('data-color')}`);
// });

// // Adicionar event listeners para os tubos
// tubes.forEach(tube => {
//     console.log(`Adicionando event listener ao tubo ${tube.classList[0]}`);
//     tube.addEventListener('click', () => handleTubeClick(tube));
// });

// emptyTubes.forEach(emptyTube => {
//     console.log(`Adicionando event listener ao tubo vazio ${emptyTube.classList[0]}`);
//     emptyTube.addEventListener('click', () => {
//         if (selectedBall) {
//             const color = selectedBall.getAttribute('data-color');
//             moveBallToTube(emptyTube, color);
//         } else {
//             const balls = emptyTube.querySelectorAll('.ball');
//             if (balls.length > 0) {
//                 selectedBall = balls[balls.length - 1];
//                 emptyTube.removeChild(selectedBall); // Remover a bolinha do tubo vazio
//                 console.log(`Bolinha selecionada no tubo vazio ${emptyTube.classList[0]}`);
//             }
//         }
//     });
// });

// const tubes = document.querySelectorAll('.tube0, .tube1, .tube2, .tube3');
// const emptyTubes = [document.querySelector('.empty-tube'), document.querySelector('.empty-tube1')];
// let selectedBall = null;

// function moveBallToTube(tube, color) {
//     const ballsInTube = tube.querySelectorAll('.ball');
//     const topBallColor = ballsInTube.length > 0 ? ballsInTube[ballsInTube.length - 1].getAttribute('data-color') : null;
    
//     console.log(`Cor da bola no topo do tubo ${tube.classList[0]}: ${topBallColor}`);
//     console.log(`Cor da bola selecionada: ${color}`);
    
//     if (ballsInTube.length < 4 && (topBallColor === null || topBallColor === color)) {
//         tube.appendChild(selectedBall);
//         let positionOffset = 3.3; // Espaçamento padrão entre as balls
//         if (ballsInTube.length === 0) {
//             selectedBall.style.bottom = '0.1rem'; // Valor padrão para a primeira bola
//         } else {
//             selectedBall.style.bottom = `${ballsInTube.length * positionOffset}rem`;
//         }
//         console.log(`Bolinha ${color} movida para o tubo ${tube.classList[0]}`);
//         selectedBall = null; // Deseleciona a bolinha após movê-la
//     } else {
//         console.log(`Não é possível mover a bolinha ${color} para o tubo ${tube.classList[0]} porque contém bolas de outra cor.`);
//         selectedBall = null; // Deseleciona a bolinha se a movimentação não for permitida
//     }
// }

// function handleTubeClick(tube) {
//     const balls = tube.querySelectorAll('.ball');
    
//     if (!selectedBall) {
//         if (balls.length > 0) {
//             selectedBall = balls[balls.length - 1];
//             console.log(`Bolinha selecionada no tubo ${tube.classList[0]}`);
//         }
//     } else {
//         const color = selectedBall.getAttribute('data-color');
//         const topBallColor = balls.length > 0 ? balls[balls.length - 1].getAttribute('data-color') : null;
        
//         console.log(`Cor da bola no topo do tubo ${tube.classList[0]}: ${topBallColor}`);
//         console.log(`Cor da bola selecionada: ${color}`);
        
//         if (balls.length === 0 || topBallColor === color) {
//             // Se o tubo estiver vazio ou contém bolas da mesma cor, posicione a bolinha
//             moveBallToTube(tube, color);
//         } else {
//             console.log(`Não é possível mover a bolinha ${color} para o tubo ${tube.classList[0]} porque contém bolas de outra cor.`);
//             selectedBall = null; // Deseleciona a bolinha se a movimentação não for permitida
//         }
//     }
// }

// // Defina uma variável para controlar o nível introdutório
// const isIntroductoryLevel = true; // Defina como necessário

// console.log(`isIntroductoryLevel: ${isIntroductoryLevel}`);

// if (!isIntroductoryLevel) {
//     console.log("Nível não introdutório iniciado");
//     // Lógica de embaralhamento
// } else {
//     console.log("Nível introdutório iniciado");
//     const tube0 = document.querySelector('.tube0');
//     const blueBall = document.createElement('div');
//     blueBall.classList.add('ball', 'blue-ball');

//     for (let i = 0; i < 3; i++) {
//         tube0.appendChild(blueBall.cloneNode(true));
//         console.log(`Bola azul adicionada ao tubo 0: ${i + 1}`);
//     }

//     const tube1 = document.querySelector('.tube1');
//     const redBall = document.createElement('div');
//     redBall.classList.add('ball', 'red-ball');

//     for (let i = 0; i < 3; i++) {
//         tube1.appendChild(redBall.cloneNode(true));
//         console.log(`Bola vermelha adicionada ao tubo 1: ${i + 1}`);
//     }
// }

// // Selecionar todas as balls
// const balls = document.querySelectorAll('.ball');
// console.log(`Total de balls: ${balls.length}`);

// // Adicionar event listeners para os tubos
// tubes.forEach(tube => {
//     console.log(`Adicionando event listener ao tubo ${tube.classList[0]}`);
//     tube.addEventListener('click', () => handleTubeClick(tube));
// });

// emptyTubes.forEach(emptyTube => {
//     console.log(`Adicionando event listener ao tubo vazio ${emptyTube.classList[0]}`);
//     emptyTube.addEventListener('click', () => {
//         if (selectedBall) {
//             const color = selectedBall.getAttribute('data-color');
//             moveBallToTube(emptyTube, color);
//         } else {
//             const balls = emptyTube.querySelectorAll('.ball');
//             if (balls.length > 0) {
//                 selectedBall = balls[balls.length - 1];
//                 emptyTube.removeChild(selectedBall); // Remover a bolinha do tubo vazio
//                 console.log(`Bolinha selecionada no tubo vazio ${emptyTube.classList[0]}`);
//             }
//         }
//     });
// });




// // Código que eatou mexendo agora código quase que principal
// const tubes = document.querySelectorAll('.tube0, .tube1, .tube2, .tube3');
// const emptyTubes = [document.querySelector('.empty-tube'), document.querySelector('.empty-tube1')];
// let selectedBall = null;

// function moveBallToTube(tube, color) {
//     const ballsInTube = tube.querySelectorAll('.ball');
//     const topBallColor = ballsInTube.length > 0 ? ballsInTube[ballsInTube.length - 1].getAttribute('data-color') : null;
    
//     console.log(`Cor da bola no topo do tubo ${tube.classList[0]}: ${topBallColor}`);
//     console.log(`Cor da bola selecionada: ${color}`);
    
//     if (ballsInTube.length < 4 && (topBallColor === null || topBallColor === color)) {
//         tube.appendChild(selectedBall);
//         let positionOffset = 3.3; // Espaçamento padrão entre as balls
//         if (ballsInTube.length === 0) {
//             selectedBall.style.bottom = '0.1rem'; // Valor padrão para a primeira bola
//         } else {
//             selectedBall.style.bottom = `${ballsInTube.length * positionOffset}rem`;
//         }
//         console.log(`Bolinha ${color} movida para o tubo ${tube.classList[0]}`);
//         selectedBall = null; // Deseleciona a bolinha após movê-la
//     } else {
//         console.log(`Não é possível mover a bolinha ${color} para o tubo ${tube.classList[0]} porque contém bolas de outra cor.`);
//         selectedBall = null; // Deseleciona a bolinha se a movimentação não for permitida
//     }
// }

// function handleTubeClick(tube) {
//     const balls = tube.querySelectorAll('.ball');
    
//     if (!selectedBall) {
//         if (balls.length > 0) {
//             selectedBall = balls[balls.length - 1];
//             console.log(`Bolinha selecionada no tubo ${tube.classList[0]}`);
//         }
//     } else {
//         const color = selectedBall.getAttribute('data-color');
//         const topBallColor = balls.length > 0 ? balls[balls.length - 1].getAttribute('data-color') : null;
        
//         console.log(`Cor da bola no topo do tubo ${tube.classList[0]}: ${topBallColor}`);
//         console.log(`Cor da bola selecionada: ${color}`);
        
//         if (balls.length === 0 || topBallColor === color) {
//             // Se o tubo estiver vazio ou contém bolas da mesma cor, posicione a bolinha
//             moveBallToTube(tube, color);
//         } else {
//             console.log(`Não é possível mover a bolinha ${color} para o tubo ${tube.classList[0]} porque contém bolas de outra cor.`);
//             selectedBall = null; // Deseleciona a bolinha se a movimentação não for permitida
//         }
//     }
// }




// // Defina uma variável para controlar o nível introdutório
// const isIntroductoryLevel = true; // Defina como necessário

// // ...

// // Embaralhar as balls (apenas se não for o nível introdutório)
// if (!isIntroductoryLevel) {
//     // Restante da lógica de embaralhamento
//     // Função para embaralhar uma lista usando o algoritmo de Fisher-Yates
// function shuffle(array) {
//     for (let i = array.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));
//         [array[i], array[j]] = [array[j], array[i]];
//     }
//     return array;
// }

// // Embaralhar as balls
// const shuffledBalls = shuffle(Array.from(balls));

// // Limpar os tubos antes de redistribuir as balls
// tubes.forEach(tube => {
//     while (tube.firstChild) {
//         tube.removeChild(tube.firstChild);
//     }
// });

// // Distribuir as balls embaralhadas nos tubos
// shuffledBalls.forEach((ball, index) => {
//     const tubeIndex = index % tubes.length;
//     tubes[tubeIndex].appendChild(ball);
//     ball.style.bottom = `${(tubes[tubeIndex].childElementCount - 1) * 3.3}rem`; // Ajustar a posição da bolinha
// });

// // Adicionar event listeners para os tubos
// tubes.forEach(tube => {
//     tube.addEventListener('click', () => handleTubeClick(tube));
// });

// emptyTubes.forEach(emptyTube => {
//     emptyTube.addEventListener('click', () => {
//         if (selectedBall) {
//             const color = selectedBall.getAttribute('data-color');
//             moveBallToTube(emptyTube, color);
//         } else {
//             const balls = emptyTube.querySelectorAll('.ball');
//             if (balls.length > 0) {
//                 selectedBall = balls[balls.length - 1];
//                 emptyTube.removeChild(selectedBall); // Remover a bolinha do tubo vazio
//                 console.log(`Bolinha selecionada no tubo vazio ${emptyTube.classList[0]}`);
//             }
//         }
//     });
// });
// } else {
//     const tube0 = document.querySelector('.tube0');
// const blueBall = document.createElement('div');
// blueBall.classList.add('ball', 'blue-ball');

// // Adicione três balls azuis ao tube0 usando um loop
// for (let i = 0; i < 3; i++) {
//     tube0.appendChild(blueBall.cloneNode(true));
// }
// const tube1 = document.querySelector('.tube1');
// const redBall = document.createElement('div');
// redBall.classList.add('ball', 'red-ball');
//     // Adicione as balls aos tubos conforme o nível introdutório
//     for (let i = 0; i < 3; i++) {
//         tube1.appendChild(redBall.cloneNode(true));
//     }
//     // Adicione as outras balls aos tubos
//     // ...
// }

// // Selecionar todas as balls
// const balls = document.querySelectorAll('.ball');
// // acaba aqui 






// Funçãso Para gerar níveis automáticos combonús entre fases 
// let currentLevel = 0;
// let selectedBall = null;

// function generateLevelParameters(level) {
//     const isBonusLevel = (level % 5 === 0) && (level !== 0);
//     if (isBonusLevel) {
//         const numTubes = 5;
//         const numBalls = 5 + Math.floor(level / 5); // Aumenta o número de balls a cada nível bônus
//         return { numTubes, numBalls, isBonusLevel };
//     } else {
//         const numTubes = Math.min(3 + Math.floor(level / 10), 10); // Aumenta o número de tubos a cada 10 níveis, até um máximo de 10 tubos
//         const numBalls = numTubes * 4; // Cada tubo pode conter até 4 balls
//         return { numTubes, numBalls, isBonusLevel };
//     }
// }

// function initializeLevel(level) {
//     const { numTubes, numBalls, isBonusLevel } = generateLevelParameters(level);
//     const tubes = document.querySelectorAll('.tube');
//     const balls = document.querySelectorAll('.ball');

//     // Limpar tubos e balls
//     tubes.forEach(tube => {
//         while (tube.firstChild) {
//             tube.removeChild(tube.firstChild);
//         }
//     });

//     // Distribuir balls nos tubos
//     const shuffledBalls = shuffle(Array.from(balls).slice(0, numBalls));
//     shuffledBalls.forEach((ball, index) => {
//         const tubeIndex = index % numTubes;
//         tubes[tubeIndex].appendChild(ball);
//         ball.style.bottom = `${(tubes[tubeIndex].childElementCount - 1) * 3.3}rem`;
//     });

//     // Adicionar event listeners para os tubos
//     tubes.forEach(tube => {
//         tube.addEventListener('click', () => handleTubeClick(tube));
//     });

//     if (isBonusLevel) {
//         console.log(`Nível Bônus ${level}!`);
//     } else {
//         console.log(`Nível ${level}`);
//     }
// }

// function advanceLevel() {
//     currentLevel++;
//     if (currentLevel < 1000) {
//         initializeLevel(currentLevel);
//     } else {
//         console.log('Parabéns! Você completou todos os níveis!');
//     }
// }

// function handleTubeClick(tube) {
//     const balls = tube.querySelectorAll('.ball');
    
//     if (!selectedBall) {
//         if (balls.length > 0) {
//             selectedBall = balls[balls.length - 1];
//             console.log(`Bolinha selecionada no tubo ${tube.classList[0]}`);
//         }
//     } else {
//         const color = selectedBall.getAttribute('data-color');
//         const topBallColor = balls.length > 0 ? balls[balls.length - 1].getAttribute('data-color') : null;
        
//         if (balls.length === 0 || topBallColor === color) {
//             moveBallToTube(tube, color);
//         } else {
//             selectedBall = null;
//         }
//     }
// }

// function moveBallToTube(tube, color) {
//     const ballsInTube = tube.querySelectorAll('.ball');
//     const topBallColor = ballsInTube.length > 0 ? ballsInTube[ballsInTube.length - 1].getAttribute('data-color') : null;
    
//     if (ballsInTube.length < 4 && (topBallColor === null || topBallColor === color)) {
//         tube.appendChild(selectedBall);
//         let positionOffset = 3.3;
//         if (ballsInTube.length === 0) {
//             selectedBall.style.bottom = '0.1rem';
//         } else {
//             selectedBall.style.bottom = `${ballsInTube.length * positionOffset}rem`;
//         }
//         selectedBall = null;
//     } else {
//         selectedBall = null;
//     }
// }

// // Função para embaralhar uma lista usando o algoritmo de Fisher-Yates
// function shuffle(array) {
//     for (let i = array.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));
//         [array[i], array[j]] = [array[j], array[i]];
//     }
//     return array;
// }

// // Inicializar o primeiro nível
// initializeLevel(currentLevel);










// Aqui neste código eui tentei fazer a inclusão dos tubos vazios porém não deu muito certo então ajustei o código fazendo a inclusão corretamnete código ajustado acima 
// const tubes = document.querySelectorAll('.tube0, .tube1, .tube2, .tube3');
// const emptyTubes = [document.querySelector('.empty-tube'), document.querySelector('.empty-tube1')];
// let selectedBall = null;

// function moveBallToTube(tube, color) {
//     const ballsInTube = tube.querySelectorAll('.ball');
//     const topBallColor = ballsInTube.length > 0 ? ballsInTube[ballsInTube.length - 1].getAttribute('data-color') : null;
    
//     console.log(`Cor da bola no topo do tubo ${tube.classList[0]}: ${topBallColor}`);
//     console.log(`Cor da bola selecionada: ${color}`);
    
//     if (ballsInTube.length < 4 && (topBallColor === null || topBallColor === color)) {
//         tube.appendChild(selectedBall);
//         let positionOffset = 3.3; // Espaçamento padrão entre as balls
//         if (ballsInTube.length === 0) {
//             selectedBall.style.bottom = '0.1rem'; // Valor padrão para a primeira bola
//         } else {
//             selectedBall.style.bottom = `${ballsInTube.length * positionOffset}rem`;
//         }
//         console.log(`Bolinha ${color} movida para o tubo ${tube.classList[0]}`);
//         selectedBall = null; // Deseleciona a bolinha após movê-la
//     } else {
//         console.log(`Não é possível mover a bolinha ${color} para o tubo ${tube.classList[0]} porque contém bolas de outra cor.`);
//         selectedBall = null; // Deseleciona a bolinha se a movimentação não for permitida
//     }
// }

// function handleTubeClick(tube) {
//     const balls = tube.querySelectorAll('.ball');
    
//     if (!selectedBall) {
//         if (balls.length > 0) {
//             selectedBall = balls[balls.length - 1];
//             console.log(`Bolinha selecionada no tubo ${tube.classList[0]}`);
//         }
//     } else {
//         const color = selectedBall.getAttribute('data-color');
//         const topBallColor = balls.length > 0 ? balls[balls.length - 1].getAttribute('data-color') : null;
        
//         console.log(`Cor da bola no topo do tubo ${tube.classList[0]}: ${topBallColor}`);
//         console.log(`Cor da bola selecionada: ${color}`);
        
//         if (balls.length === 0 || topBallColor === color) {
//             // Se o tubo estiver vazio ou contém bolas da mesma cor, posicione a bolinha
//             moveBallToTube(tube, color);
//         } else {
//             console.log(`Não é possível mover a bolinha ${color} para o tubo ${tube.classList[0]} porque contém bolas de outra cor.`);
//             selectedBall = null; // Deseleciona a bolinha se a movimentação não for permitida
//         }
//     }
// }


// // Selecionar todas as balls
// const balls = document.querySelectorAll('.ball');

// // Função para embaralhar uma lista usando o algoritmo de Fisher-Yates
// function shuffle(array) {
//     for (let i = array.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));
//         [array[i], array[j]] = [array[j], array[i]];
//     }
//     return array;
// }

// // Embaralhar as balls
// const shuffledBalls = shuffle(Array.from(balls));

// // Limpar os tubos antes de redistribuir as balls
// tubes.forEach(tube => {
//     while (tube.firstChild) {
//         tube.removeChild(tube.firstChild);
//     }
// });


// // Distribuir as balls embaralhadas nos tubos
// shuffledBalls.forEach((ball, index) => {
//     const tubeIndex = index % tubes.length;
//     tubes[tubeIndex].appendChild(ball);
//     ball.style.bottom = `${(tubes[tubeIndex].childElementCount - 1) * 3.3}rem`; // Ajustar a posição da bolinha
// });


// emptyTubes.forEach(emptyTube => {
//     emptyTube.addEventListener('click', () => {
//         if (selectedBall) {
//             const color = selectedBall.getAttribute('data-color');
//             moveBallToTube(emptyTube, color);
//         } else {
//             const balls = emptyTube.querySelectorAll('.ball');
//             if (balls.length > 0) {
//                 selectedBall = balls[balls.length - 1];
//                 console.log(`Bolinha selecionada no tubo vazio ${emptyTube.classList[0]}`);
//             }
//         }
//     });
// });

// // Chamar a função de embaralhamento ao carregar a página
// window.onload = shuffleBalls;




// Trecho problemático
// const balls = document.querySelectorAll('.ball'); está linha não estava aplicada a este código 
// // Função para embaralhar as balls nos tubos
// function shuffleBalls() {
//     const allBalls = [];
    
//     // Coletar todas as balls
//     tubes.forEach(tube => {
//         const balls = tube.querySelectorAll('.ball');
//         balls.forEach(ball => allBalls.push(ball));
//         tube.innerHTML = ''; // Esvaziar os tubos
//     });
    
//     // Embaralhar as balls
//     for (let i = allBalls.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));
//         [allBalls[i], allBalls[j]] = [allBalls[j], allBalls[i]];
//     }
    
//     // Redistribuir as balls nos tubos
//     allBalls.forEach((ball, index) => {
//         const tubeIndex = index % tubes.length;
//         tubes[tubeIndex].appendChild(ball);
//     });
// }

// // Adicionar event listeners para os tubos
// tubes.forEach(tube => {
//     tube.addEventListener('click', () => handleTubeClick(tube));
// });

// emptyTubes.forEach(emptyTube => {
//     emptyTube.addEventListener('click', () => {
//         if (selectedBall) {
//             const color = selectedBall.getAttribute('data-color');
//             moveBallToTube(emptyTube, color);
//         } else {
//             const balls = emptyTube.querySelectorAll('.ball');
//             if (balls.length > 0) {
//                 selectedBall = balls[balls.length - 1];
//                 console.log(`Bolinha selecionada no tubo vazio ${emptyTube.classList[0]}`);
//             }
//         }
//     });
// });

// // Chamar a função de embaralhamento ao carregar a página
// window.onload = shuffleBalls;






// lógica e função de embaralhamento das bolas
// const tubes = document.querySelectorAll('.tube0, .tube1, .tube2, .tube3');
// const colors = ['red', 'blue', 'yellow', 'deeppink'];

// // Função para criar uma bolinha com a cor especificada
// function createBall(color) {
//     const ball = document.createElement('div');
//     ball.classList.add('ball');
//     ball.setAttribute('data-color', color);
//     return ball;
// }

// // Criar e adicionar balls aos tubos inicialmente
// tubes.forEach(tube => {
//     colors.forEach((color, index) => {
//         const ball = createBall(color);
//         tube.appendChild(ball);
//         ball.style.bottom = `${index * 3.3}rem`; // Ajustar a posição da bolinha
//     });
// });

// // Selecionar todas as balls
// const balls = document.querySelectorAll('.ball');

// // Função para embaralhar uma lista usando o algoritmo de Fisher-Yates
// function shuffle(array) {
//     for (let i = array.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));
//         [array[i], array[j]] = [array[j], array[i]];
//     }
//     return array;
// }

// // Embaralhar as balls
// const shuffledBalls = shuffle(Array.from(balls));

// // Limpar os tubos antes de redistribuir as balls
// tubes.forEach(tube => {
//     while (tube.firstChild) {
//         tube.removeChild(tube.firstChild);
//     }
// });

// // Distribuir as balls embaralhadas nos tubos
// shuffledBalls.forEach((ball, index) => {
//     const tubeIndex = index % tubes.length;
//     tubes[tubeIndex].appendChild(ball);
//     ball.style.bottom = `${Math.floor(index / tubes.length) * 3.3}rem`; // Ajustar a posição da bolinha
// });






// Aqui está um exemplo de como você pode implementar um sistema de embaralhamento simples acima foi criado um sistema mais robusto
// const tubes = document.querySelectorAll('.tube0, .tube1, .tube2, .tube3');
// const emptyTubes = [document.querySelector('.empty-tube'), document.querySelector('.empty-tube1')];
// let selectedBall = null;

// function moveBallToTube(tube, color) {
//     const ballsInTube = tube.querySelectorAll('.ball');
//     const topBallColor = ballsInTube.length > 0 ? ballsInTube[ballsInTube.length - 1].getAttribute('data-color') : null;
    
//     console.log(`Cor da bola no topo do tubo ${tube.classList[0]}: ${topBallColor}`);
//     console.log(`Cor da bola selecionada: ${color}`);
    
//     if (ballsInTube.length < 4 && (topBallColor === null || topBallColor === color)) {
//         tube.appendChild(selectedBall);
//         let positionOffset = 3.3; // Espaçamento padrão entre as balls
//         if (ballsInTube.length === 0) {
//             selectedBall.style.bottom = '0.1rem'; // Valor padrão para a primeira bola
//         } else {
//             selectedBall.style.bottom = `${ballsInTube.length * positionOffset}rem`;
//         }
//         console.log(`Bolinha ${color} movida para o tubo ${tube.classList[0]}`);
//         selectedBall = null; // Deseleciona a bolinha após movê-la
//     } else {
//         console.log(`Não é possível mover a bolinha ${color} para o tubo ${tube.classList[0]} porque contém bolas de outra cor.`);
//         selectedBall = null; // Deseleciona a bolinha se a movimentação não for permitida
//     }
// }

// function handleTubeClick(tube) {
//     const balls = tube.querySelectorAll('.ball');
    
//     if (!selectedBall) {
//         if (balls.length > 0) {
//             selectedBall = balls[balls.length - 1];
//             console.log(`Bolinha selecionada no tubo ${tube.classList[0]}`);
//         }
//     } else {
//         const color = selectedBall.getAttribute('data-color');
//         const topBallColor = balls.length > 0 ? balls[balls.length - 1].getAttribute('data-color') : null;
        
//         console.log(`Cor da bola no topo do tubo ${tube.classList[0]}: ${topBallColor}`);
//         console.log(`Cor da bola selecionada: ${color}`);
        
//         if (balls.length === 0 || topBallColor === color) {
//             // Se o tubo estiver vazio ou contém bolas da mesma cor, posicione a bolinha
//             moveBallToTube(tube, color);
//         } else {
//             console.log(`Não é possível mover a bolinha ${color} para o tubo ${tube.classList[0]} porque contém bolas de outra cor.`);
//             selectedBall = null; // Deseleciona a bolinha se a movimentação não for permitida
//         }
//     }
// }

// // Função para embaralhar as balls nos tubos
// function shuffleBalls() {
//     const allBalls = [];
    
//     // Coletar todas as balls
//     tubes.forEach(tube => {
//         const balls = tube.querySelectorAll('.ball');
//         balls.forEach(ball => allBalls.push(ball));
//         tube.innerHTML = ''; // Esvaziar os tubos
//     });
    
//     // Embaralhar as balls
//     for (let i = allBalls.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));
//         [allBalls[i], allBalls[j]] = [allBalls[j], allBalls[i]];
//     }
    
//     // Redistribuir as balls nos tubos
//     allBalls.forEach((ball, index) => {
//         const tubeIndex = index % tubes.length;
//         tubes[tubeIndex].appendChild(ball);
//     });
// }

// // Adicionar event listeners para os tubos
// tubes.forEach(tube => {
//     tube.addEventListener('click', () => handleTubeClick(tube));
// });

// emptyTubes.forEach(emptyTube => {
//     emptyTube.addEventListener('click', () => {
//         if (selectedBall) {
//             const color = selectedBall.getAttribute('data-color');
//             moveBallToTube(emptyTube, color);
//         } else {
//             const balls = emptyTube.querySelectorAll('.ball');
//             if (balls.length > 0) {
//                 selectedBall = balls[balls.length - 1];
//                 console.log(`Bolinha selecionada no tubo vazio ${emptyTube.classList[0]}`);
//             }
//         }
//     });
// });

// // Chamar a função de embaralhamento ao carregar a página
// window.onload = shuffleBalls;





// Código Funcional
// const tubes = document.querySelectorAll('.tube0, .tube1, .tube2, .tube3');
// const emptyTubes = [document.querySelector('.empty-tube'), document.querySelector('.empty-tube1')];
// let selectedBall = null;

// function moveBallToTube(tube, color) {
//     const ballsInTube = tube.querySelectorAll('.ball');
//     const topBallColor = ballsInTube.length > 0 ? ballsInTube[ballsInTube.length - 1].getAttribute('data-color') : null;
    
//     console.log(`Cor da bola no topo do tubo ${tube.classList[0]}: ${topBallColor}`);
//     console.log(`Cor da bola selecionada: ${color}`);
    
//     if (ballsInTube.length < 4 && (topBallColor === null || topBallColor === color)) {
//         tube.appendChild(selectedBall);
//         let positionOffset = 3.3; // Espaçamento padrão entre as balls
//         if (ballsInTube.length === 0) {
//             selectedBall.style.bottom = '0.1rem'; // Valor padrão para a primeira bola
//         } else {
//             selectedBall.style.bottom = `${ballsInTube.length * positionOffset}rem`;
//         }
//         console.log(`Bolinha ${color} movida para o tubo ${tube.classList[0]}`);
//         selectedBall = null; // Deseleciona a bolinha após movê-la
//     } else {
//         console.log(`Não é possível mover a bolinha ${color} para o tubo ${tube.classList[0]} porque contém bolas de outra cor.`);
//         selectedBall = null; // Deseleciona a bolinha se a movimentação não for permitida
//     }
// }

// function handleTubeClick(tube) {
//     const balls = tube.querySelectorAll('.ball');
    
//     if (!selectedBall) {
//         if (balls.length > 0) {
//             selectedBall = balls[balls.length - 1];
//             console.log(`Bolinha selecionada no tubo ${tube.classList[0]}`);
//         }
//     } else {
//         const color = selectedBall.getAttribute('data-color');
//         const topBallColor = balls.length > 0 ? balls[balls.length - 1].getAttribute('data-color') : null;
        
//         console.log(`Cor da bola no topo do tubo ${tube.classList[0]}: ${topBallColor}`);
//         console.log(`Cor da bola selecionada: ${color}`);
        
//         if (balls.length === 0 || topBallColor === color) {
//             // Se o tubo estiver vazio ou contém bolas da mesma cor, posicione a bolinha
//             moveBallToTube(tube, color);
//         } else {
//             console.log(`Não é possível mover a bolinha ${color} para o tubo ${tube.classList[0]} porque contém bolas de outra cor.`);
//             selectedBall = null; // Deseleciona a bolinha se a movimentação não for permitida
//         }
//     }
// }

// // Adicionar event listeners para os tubos
// tubes.forEach(tube => {
//     tube.addEventListener('click', () => handleTubeClick(tube));
// });

// emptyTubes.forEach(emptyTube => {
//     emptyTube.addEventListener('click', () => {
//         if (selectedBall) {
//             const color = selectedBall.getAttribute('data-color');
//             moveBallToTube(emptyTube, color);
//         } else {
//             const balls = emptyTube.querySelectorAll('.ball');
//             if (balls.length > 0) {
//                 selectedBall = balls[balls.length - 1];
//                 console.log(`Bolinha selecionada no tubo vazio ${emptyTube.classList[0]}`);
//             }
//         }
//     });
// });








// Problema com a seleção da bola ao selecionar a bola incorreta a seleção de bolas fica travda impossibilitando do jogador selecionar e mover uma outra bola o problema foi solucionado no código acima 
// O problema foi causado pelo fato de que a variável selectedBall não estava sendo atual

// const tubes = document.querySelectorAll('.tube0, .tube1, .tube2, .tube3');
// const emptyTubes = [document.querySelector('.empty-tube'), document.querySelector('.empty-tube1')];
// let selectedBall = null;

// function moveBallToTube(tube, color) {
//     const ballsInTube = tube.querySelectorAll('.ball');
//     const topBallColor = ballsInTube.length > 0 ? ballsInTube[ballsInTube.length - 1].getAttribute('data-color') : null;
    
//     console.log(`Cor da bola no topo do tubo ${tube.classList[0]}: ${topBallColor}`);
//     console.log(`Cor da bola selecionada: ${color}`);
    
//     if (ballsInTube.length < 4 && (topBallColor === null || topBallColor === color)) {
//         tube.appendChild(selectedBall);
//         let positionOffset = 3.3; // Espaçamento padrão entre as balls
//         if (ballsInTube.length === 0) {
//             selectedBall.style.bottom = '0.1rem'; // Valor padrão para a primeira bola
//         } else {
//             selectedBall.style.bottom = `${ballsInTube.length * positionOffset}rem`;
//         }
//         console.log(`Bolinha ${color} movida para o tubo ${tube.classList[0]}`);
//         selectedBall = null; // Deseleciona a bolinha após movê-la
//     } else {
//         console.log(`Não é possível mover a bolinha ${color} para o tubo ${tube.classList[0]} porque contém bolas de outra cor.`);
//     }
// }

// function handleTubeClick(tube) {
//     const balls = tube.querySelectorAll('.ball');
    
//     if (!selectedBall) {
//         if (balls.length > 0) {
//             selectedBall = balls[balls.length - 1];
//             console.log(`Bolinha selecionada no tubo ${tube.classList[0]}`);
//         }
//     } else {
//         const color = selectedBall.getAttribute('data-color');
//         const topBallColor = balls.length > 0 ? balls[balls.length - 1].getAttribute('data-color') : null;
        
//         console.log(`Cor da bola no topo do tubo ${tube.classList[0]}: ${topBallColor}`);
//         console.log(`Cor da bola selecionada: ${color}`);
        
//         if (balls.length === 0 || topBallColor === color) {
//             // Se o tubo estiver vazio ou contém bolas da mesma cor, posicione a bolinha
//             moveBallToTube(tube, color);
//         } else {
//             console.log(`Não é possível mover a bolinha ${color} para o tubo ${tube.classList[0]} porque contém bolas de outra cor.`);
//         }
//     }
// }

// // Adicionar event listeners para os tubos
// tubes.forEach(tube => {
//     tube.addEventListener('click', () => handleTubeClick(tube));
// });

// emptyTubes.forEach(emptyTube => {
//     emptyTube.addEventListener('click', () => {
//         if (selectedBall) {
//             const color = selectedBall.getAttribute('data-color');
//             moveBallToTube(emptyTube, color);
//         } else {
//             const balls = emptyTube.querySelectorAll('.ball');
//             if (balls.length > 0) {
//                 selectedBall = balls[balls.length - 1];
//                 console.log(`Bolinha selecionada no tubo vazio ${emptyTube.classList[0]}`);
//             }
//         }
//     });
// });


// Problema com a seleção de bolas
// const tubes = document.querySelectorAll('.tube0, .tube1, .tube2, .tube3');
// const emptyTubes = [document.querySelector('.empty-tube'), document.querySelector('.empty-tube1')];
// let selectedBall = null;

// function moveBallToTube(tube, color) {
//     const ballsInTube = tube.querySelectorAll('.ball');
//     const topBallColor = ballsInTube.length > 0 ? ballsInTube[ballsInTube.length - 1].getAttribute('data-color') : null;
    
//     console.log(`Cor da bola no topo do tubo ${tube.classList[0]}: ${topBallColor}`);
//     console.log(`Cor da bola selecionada: ${color}`);
    
//     if (ballsInTube.length < 4 && (topBallColor === null || topBallColor === color)) {
//         tube.appendChild(selectedBall);
//         let positionOffset = 3.3; // Espaçamento padrão entre as balls
//         if (ballsInTube.length === 0) {
//             selectedBall.style.bottom = '0.1rem'; // Valor padrão para a primeira bola
//         } else {
//             selectedBall.style.bottom = `${ballsInTube.length * positionOffset}rem`;
//         }
//         console.log(`Bolinha ${color} movida para o tubo ${tube.classList[0]}`);
//         selectedBall = null; // Deseleciona a bolinha após movê-la
//     } else {
//         console.log(`Não é possível mover a bolinha ${color} para o tubo ${tube.classList[0]} porque contém bolas de outra cor.`);
//     }
// }

// function handleTubeClick(tube) {
//     const balls = tube.querySelectorAll('.ball');
    
//     if (!selectedBall) {
//         if (balls.length > 0) {
//             selectedBall = balls[balls.length - 1];
//             selectedBall.style.border = '2px solid red'; // Destaca a bola selecionada
//             console.log(`Bolinha selecionada no tubo ${tube.classList[0]}`);
//         }
//     } else {
//         const color = selectedBall.getAttribute('data-color');
//         const topBallColor = balls.length > 0 ? balls[balls.length - 1].getAttribute('data-color') : null;
        
//         console.log(`Cor da bola no topo do tubo ${tube.classList[0]}: ${topBallColor}`);
//         console.log(`Cor da bola selecionada: ${color}`);
        
//         if (balls.length === 0 || topBallColor === color) {
//             // Se o tubo estiver vazio ou contém bolas da mesma cor, posicione a bolinha
//             moveBallToTube(tube, color);
//         } else {
//             console.log(`Não é possível mover a bolinha ${color} para o tubo ${tube.classList[0]} porque contém bolas de outra cor.`);
//         }
//     }
// }

// function handleBallClick(ball) {
//     if (selectedBall === ball) {
//         // Se a bola clicada for a mesma que está selecionada, deseleciona-a
//         selectedBall.style.border = ''; // Remove destaque da bola
//         selectedBall = null;
//         console.log(`Bolinha deselecionada`);
//     } else {
//         if (selectedBall) {
//             selectedBall.style.border = ''; // Remove destaque da bola anterior
//         }
//         selectedBall = ball;
//         selectedBall.style.border = '2px solid red'; // Destaca a bola selecionada
//         console.log(`Bolinha ${selectedBall.getAttribute('data-color')} selecionada`);
//     }
// }

// // Adicionar event listeners para os tubos
// tubes.forEach(tube => {
//     tube.addEventListener('click', () => handleTubeClick(tube));
// });

// // Adicionar event listeners para as bolas
// document.querySelectorAll('.ball').forEach(ball => {
//     ball.addEventListener('click', () => handleBallClick(ball));
// });

// // Adicionar event listeners para os tubos vazios
// emptyTubes.forEach(emptyTube => {
//     emptyTube.addEventListener('click', () => {
//         if (selectedBall) {
//             const color = selectedBall.getAttribute('data-color');
//             moveBallToTube(emptyTube, color);
//         } else {
//             const balls = emptyTube.querySelectorAll('.ball');
//             if (balls.length > 0) {
//                 selectedBall = balls[balls.length - 1];
//                 selectedBall.style.border = '2px solid red'; // Destaca a bola selecionada
//                 console.log(`Bolinha selecionada no tubo vazio ${emptyTube.classList[0]}`);
//             }
//         }
//     });
// });




// const tubes = document.querySelectorAll('.tube0, .tube1, .tube2, .tube3');
// const emptyTubes = [document.querySelector('.empty-tube'), document.querySelector('.empty-tube1')];
// let selectedBall = null;

// function moveBallToTube(tube, color) {
//     const ballsInTube = tube.querySelectorAll('.ball');
//     const firstBallColor = ballsInTube.length > 0 ? ballsInTube[0].getAttribute('data-color') : null;
    
//     console.log(`Cor da primeira bola no tubo ${tube.classList[0]}: ${firstBallColor}`);
//     console.log(`Cor da bola selecionada: ${color}`);
    
//     if (ballsInTube.length < 4 && (firstBallColor === null || firstBallColor === color)) {
//         tube.appendChild(selectedBall);
//         let positionOffset = 3.3; // Espaçamento padrão entre as balls
//         if (ballsInTube.length === 0) {
//             selectedBall.style.bottom = '0.1rem'; // Valor padrão para a primeira bola
//         } else {
//             selectedBall.style.bottom = `${ballsInTube.length * positionOffset}rem`;
//         }
//         console.log(`Bolinha ${color} movida para o tubo ${tube.classList[0]}`);
//         selectedBall = null; // Deseleciona a bolinha após movê-la
//     } else {
//         console.log(`Não é possível mover a bolinha ${color} para o tubo ${tube.classList[0]} porque contém bolas de outra cor.`);
//     }
// }

// function handleTubeClick(tube) {
//     const balls = tube.querySelectorAll('.ball');
    
//     if (!selectedBall) {
//         if (balls.length > 0) {
//             selectedBall = balls[balls.length - 1];
//             console.log(`Bolinha selecionada no tubo ${tube.classList[0]}`);
//         }
//     } else {
//         const color = selectedBall.getAttribute('data-color');
//         const firstBallColor = balls.length > 0 ? balls[0].getAttribute('data-color') : null;
        
//         console.log(`Cor da primeira bola no tubo ${tube.classList[0]}: ${firstBallColor}`);
//         console.log(`Cor da bola selecionada: ${color}`);
        
//         if (balls.length === 0 || firstBallColor === color) {
//             // Se o tubo estiver vazio ou contém bolas da mesma cor, posicione a bolinha
//             moveBallToTube(tube, color);
//         } else {
//             console.log(`Não é possível mover a bolinha ${color} para o tubo ${tube.classList[0]} porque contém bolas de outra cor.`);
//         }
//     }
// }

// // Adicionar event listeners para os tubos
// tubes.forEach(tube => {
//     tube.addEventListener('click', () => handleTubeClick(tube));
// });

// emptyTubes.forEach(emptyTube => {
//     emptyTube.addEventListener('click', () => {
//         if (selectedBall) {
//             const color = selectedBall.getAttribute('data-color');
//             moveBallToTube(emptyTube, color);
//         } else {
//             const balls = emptyTube.querySelectorAll('.ball');
//             if (balls.length > 0) {
//                 selectedBall = balls[balls.length - 1];
//                 console.log(`Bolinha selecionada no tubo vazio ${emptyTube.classList[0]}`);
//             }
//         }
//     });
// });









// const tubes = document.querySelectorAll('.tube0, .tube1, .tube2, .tube3');
// const emptyTubes = [document.querySelector('.empty-tube'), document.querySelector('.empty-tube1')];
// let selectedBall = null;

// function moveBallToTube(tube, color) {
//     const ballsInTube = tube.querySelectorAll('.ball');
//     const firstBallColor = ballsInTube.length > 0 ? ballsInTube[0].getAttribute('data-color') : null;
    
//     if (ballsInTube.length < 4 && (firstBallColor === null || firstBallColor === color)) {
//         tube.appendChild(selectedBall);
//         let positionOffset = 3.3; // Espaçamento padrão entre as balls
//         if (ballsInTube.length === 0) {
//             selectedBall.style.bottom = '0.1rem'; // Valor padrão para a primeira bola
//         } else {
//             selectedBall.style.bottom = `${ballsInTube.length * positionOffset}rem`;
//         }
//         console.log(`Bolinha ${color} movida para o tubo ${tube.classList[0]}`);
//         selectedBall = null; // Deseleciona a bolinha após movê-la
//     } else {
//         console.log(`Não é possível mover a bolinha ${color} para o tubo ${tube.classList[0]} porque contém bolas de outra cor.`);
//     }
// }

// function handleTubeClick(tube) {
//     const balls = tube.querySelectorAll('.ball');
    
//     if (!selectedBall) {
//         if (balls.length > 0) {
//             selectedBall = balls[balls.length - 1];
//             console.log(`Bolinha selecionada no tubo ${tube.classList[0]}`);
//         }
//     } else {
//         const color = selectedBall.getAttribute('data-color');
//         const firstBallColor = balls.length > 0 ? balls[0].getAttribute('data-color') : null;
//         if (balls.length === 0 || firstBallColor === color) {
//             // Se o tubo estiver vazio ou contém bolas da mesma cor, posicione a bolinha
//             moveBallToTube(tube, color);
//         } else {
//             console.log(`Não é possível mover a bolinha ${color} para o tubo ${tube.classList[0]} porque contém bolas de outra cor.`);
//         }
//     }
// }

// // Adicionar event listeners para os tubos
// tubes.forEach(tube => {
//     tube.addEventListener('click', () => handleTubeClick(tube));
// });

// emptyTubes.forEach(emptyTube => {
//     emptyTube.addEventListener('click', () => {
//         if (selectedBall) {
//             const color = selectedBall.getAttribute('data-color');
//             moveBallToTube(emptyTube, color);
//         } else {
//             const balls = emptyTube.querySelectorAll('.ball');
//             if (balls.length > 0) {
//                 selectedBall = balls[balls.length - 1];
//                 console.log(`Bolinha selecionada no tubo vazio ${emptyTube.classList[0]}`);
//             }
//         }
//     });
// });




// const tubes = document.querySelectorAll('.tube0, .tube1, .tube2, .tube3');
// const emptyTubes = [document.querySelector('.empty-tube'), document.querySelector('.empty-tube1')];
// let selectedBall = null;

// function moveBallToTube(tube, color) {
//     const ballsInTube = tube.querySelectorAll('.ball');
//     const firstBallColor = ballsInTube.length > 0 ? ballsInTube[0].getAttribute('data-color') : null;
    
//     if (ballsInTube.length < 4 && (firstBallColor === null || firstBallColor === color)) {
//         tube.appendChild(selectedBall);
//         let positionOffset = 3.3; // Espaçamento padrão entre as balls
//         if (ballsInTube.length === 0) {
//             selectedBall.style.bottom = '0.1rem'; // Valor padrão para a primeira bola
//         } else {
//             selectedBall.style.bottom = `${ballsInTube.length * positionOffset}rem`;
//         }
//         console.log(`Bolinha ${color} movida para o tubo ${tube.classList[0]}`);
//         selectedBall = null; // Deseleciona a bolinha após movê-la
//     } else {
//         console.log(`Não é possível mover a bolinha ${color} para o tubo ${tube.classList[0]} porque contém bolas de outra cor.`);
//     }
// }

// function handleTubeClick(tube) {
//     const balls = tube.querySelectorAll('.ball');
    
//     if (!selectedBall) {
//         if (balls.length > 0) {
//             selectedBall = balls[balls.length - 1];
//             console.log(`Bolinha selecionada no tubo ${tube.classList[0]}`);
//         }
//     } else {
//         const color = selectedBall.getAttribute('data-color');
//         const firstBallColor = balls.length > 0 ? balls[0].getAttribute('data-color') : null;
//         if (balls.length === 0 || firstBallColor === color) {
//             // Se o tubo estiver vazio ou contém bolas da mesma cor, posicione a bolinha
//             moveBallToTube(tube, color);
//         } else {
//             console.log(`Não é possível mover a bolinha ${color} para o tubo ${tube.classList[0]} porque contém bolas de outra cor.`);
//         }
//     }
// }

// // Adicionar event listeners para os tubos
// tubes.forEach(tube => {
//     tube.addEventListener('click', () => handleTubeClick(tube));
// });

// emptyTubes.forEach(emptyTube => {
//     emptyTube.addEventListener('click', () => {
//         if (selectedBall) {
//             const color = selectedBall.getAttribute('data-color');
//             moveBallToTube(emptyTube, color);
//         } else {
//             const balls = emptyTube.querySelectorAll('.ball');
//             if (balls.length > 0) {
//                 selectedBall = balls[balls.length - 1];
//                 console.log(`Bolinha selecionada no tubo vazio ${emptyTube.classList[0]}`);
//             }
//         }
//     });
// });






// const tubes = document.querySelectorAll('.tube0, .tube1, .tube2, .tube3');
// const emptyTubes = [document.querySelector('.empty-tube'), document.querySelector('.empty-tube1')];
// let selectedBall = null;

// function moveBallToTube(tube, color) {
//     const ballsInTube = tube.querySelectorAll('.ball');
//     const firstBallColor = ballsInTube.length > 0 ? ballsInTube[0].getAttribute('data-color') : null;
    
//     if (ballsInTube.length < 4 && (firstBallColor === null || firstBallColor === color)) {
//         tube.appendChild(selectedBall);
//         let positionOffset = 3.3; // Espaçamento padrão entre as balls
//         if (ballsInTube.length === 0) {
//             selectedBall.style.bottom = '0.1rem'; // Valor padrão para a primeira bola
//         } else {
//             selectedBall.style.bottom = `${ballsInTube.length * positionOffset}rem`;
//         }
//         console.log(`Bolinha ${color} movida para o tubo ${tube.classList[0]}`);
//         selectedBall = null; // Deseleciona a bolinha após movê-la
//     } else {
//         console.log(`Não é possível mover a bolinha ${color} para o tubo ${tube.classList[0]} porque contém bolas de outra cor.`);
//     }
// }

// function handleTubeClick(tube) {
//     const balls = tube.querySelectorAll('.ball');
    
//     if (!selectedBall) {
//         if (balls.length > 0) {
//             selectedBall = balls[balls.length - 1];
//             console.log(`Bolinha selecionada no tubo ${tube.classList[0]}`);
//         }
//     } else {
//         const color = selectedBall.getAttribute('data-color');
//         if (balls.length === 0 || balls[0].getAttribute('data-color') === color) {
//             // Se o tubo estiver vazio ou contém bolas da mesma cor, posicione a bolinha
//             moveBallToTube(tube, color);
//         } else {
//             console.log(`Não é possível mover a bolinha ${color} para o tubo ${tube.classList[0]} porque contém bolas de outra cor.`);
//         }
//     }
// }

// // Adicionar event listeners para os tubos
// tubes.forEach(tube => {
//     tube.addEventListener('click', () => handleTubeClick(tube));
// });

// emptyTubes.forEach(emptyTube => {
//     emptyTube.addEventListener('click', () => {
//         if (selectedBall) {
//             const color = selectedBall.getAttribute('data-color');
//             moveBallToTube(emptyTube, color);
//         } else {
//             const balls = emptyTube.querySelectorAll('.ball');
//             if (balls.length > 0) {
//                 selectedBall = balls[balls.length - 1];
//                 console.log(`Bolinha selecionada no tubo vazio ${emptyTube.classList[0]}`);
//             }
//         }
//     });
// });









// const tubes = document.querySelectorAll('.tube0, .tube1, .tube2, .tube3');
// const emptyTubes = [document.querySelector('.empty-tube'), document.querySelector('.empty-tube1')];
// let selectedBall = null;

// function moveBallToTube(tube, color) {
//     const ballsInTube = tube.querySelectorAll('.ball');
//     const firstBallColor = ballsInTube.length > 0 ? ballsInTube[0].getAttribute('data-color') : null;
    
//     if (ballsInTube.length < 4 && (firstBallColor === null || firstBallColor === color)) {
//         tube.appendChild(selectedBall);
//         let positionOffset = 3.4; // Espaçamento padrão entre as balls
//         if (ballsInTube.length === 0) {
//             selectedBall.style.bottom = '0.1rem'; // Valor padrão para a primeira bola
//         } else {
//             selectedBall.style.bottom = `${ballsInTube.length * positionOffset}rem`;
//         }
//         console.log(`Bolinha ${color} movida para o tubo ${tube.classList[0]}`);
//         selectedBall = null; // Deseleciona a bolinha após movê-la
//     }
// }

// function handleTubeClick(tube) {
//     const balls = tube.querySelectorAll('.ball');
    
//     if (!selectedBall) {
//         if (balls.length > 0) {
//             selectedBall = balls[balls.length - 1];
//             console.log(`Bolinha selecionada no tubo ${tube.classList[0]}`);
//         }
//     } else {
//         const color = selectedBall.getAttribute('data-color');
//         if (balls.length === 0 || balls[0].getAttribute('data-color') === color) {
//             // Se o tubo estiver vazio ou contém bolas da mesma cor, posicione a bolinha
//             moveBallToTube(tube, color);
//         }
//     }
// }

// function handleBallClick(ball) {
//     if (selectedBall) {
//         selectedBall.style.border = ''; // Remove destaque da bola anterior
//     }
//     selectedBall = ball;
//     selectedBall.style.border = '2px solid red'; // Destaca a bola selecionada
//     console.log(`Bolinha ${selectedBall.getAttribute('data-color')} selecionada`);
// }

// // Adicionar event listeners para os tubos
// tubes.forEach(tube => {
//     tube.addEventListener('click', () => handleTubeClick(tube));
// });

// // Adicionar event listeners para as bolas
// document.querySelectorAll('.ball').forEach(ball => {
//     ball.addEventListener('click', () => handleBallClick(ball));
// });

// emptyTubes.forEach(emptyTube => {
//     emptyTube.addEventListener('click', () => {
//         if (selectedBall) {
//             const color = selectedBall.getAttribute('data-color');
//             moveBallToTube(emptyTube, color);
//         } else {
//             const balls = emptyTube.querySelectorAll('.ball');
//             if (balls.length > 0) {
//                 selectedBall = balls[balls.length - 1];
//                 console.log(`Bolinha selecionada no tubo vazio ${emptyTube.classList[0]}`);
//             }
//         }
//     });
// });




// const tubes = document.querySelectorAll('.tube0, .tube1, .tube2, .tube3');
// const emptyTubes = [document.querySelector('.empty-tube'), document.querySelector('.empty-tube1')];
// let selectedBall = null;

// function moveBallToTube(tube, color) {
//     const ballsInTube = tube.querySelectorAll('.ball');
//     const firstBallColor = ballsInTube.length > 0 ? ballsInTube[0].getAttribute('data-color') : null;
    
//     if (ballsInTube.length < 4 && (firstBallColor === null || firstBallColor === color)) {
//         tube.appendChild(selectedBall);
//         let positionOffset = 3.4; // Espaçamento padrão entre as balls
//         if (ballsInTube.length === 0) {
//             selectedBall.style.bottom = '0.1rem'; // Valor padrão para a primeira bola
//         } else {
//             selectedBall.style.bottom = `${ballsInTube.length * positionOffset}rem`;
//         }
//         console.log(`Bolinha ${color} movida para o tubo ${tube.classList[0]}`);
//         selectedBall = null; // Deseleciona a bolinha após movê-la
//     }
// }

// function handleTubeClick(tube) {
//     const balls = tube.querySelectorAll('.ball');
    
//     if (!selectedBall) {
//         if (balls.length > 0) {
//             selectedBall = balls[balls.length - 1];
//             console.log(`Bolinha selecionada no tubo ${tube.classList[0]}`);
//         }
//     } else {
//         const color = selectedBall.getAttribute('data-color');
//         if (balls.length === 0 || balls[0].getAttribute('data-color') === color) {
//             // Se o tubo estiver vazio ou contém bolas da mesma cor, posicione a bolinha
//             moveBallToTube(tube, color);
//         }
//     }
// }

// // Adicionar event listeners para os tubos
// tubes.forEach(tube => {
//     tube.addEventListener('click', () => handleTubeClick(tube));
// });

// emptyTubes.forEach(emptyTube => {
//     emptyTube.addEventListener('click', () => {
//         if (selectedBall) {
//             const color = selectedBall.getAttribute('data-color');
//             moveBallToTube(emptyTube, color);
//         } else {
//             const balls = emptyTube.querySelectorAll('.ball');
//             if (balls.length > 0) {
//                 selectedBall = balls[balls.length - 1];
//                 console.log(`Bolinha selecionada no tubo vazio ${emptyTube.classList[0]}`);
//             }
//         }
//     });
// });


// Não perder este código abaixo muito importante para o projeto 

// const tubes = document.querySelectorAll('.tube0, .tube1, .tube2, .tube3');
// const emptyTubes = [document.querySelector('.empty-tube'), document.querySelector('.empty-tube1')];
// let selectedBall = null;

// function moveBallToTube(tube, color) {
//     const ballsInTube = tube.querySelectorAll('.ball');
    
//     if (ballsInTube.length < 4) {
//         tube.appendChild(selectedBall);
//         let positionOffset = 3.3; // Espaçamento padrão entre as balls
//         if (ballsInTube.length === 0) {
//             selectedBall.style.bottom = '0.1rem'; // Valor padrão para a primeira bola
//         } else {
//             selectedBall.style.bottom = `${ballsInTube.length * positionOffset}rem`;
//         }
//         console.log(`Bolinha ${color} movida para o tubo ${tube.classList[0]}`);
//         selectedBall = null; // Deseleciona a bolinha após movê-la
//     }
// }

// function handleTubeClick(tube) {
//     const balls = tube.querySelectorAll('.ball');
    
//     if (!selectedBall) {
//         if (balls.length > 0) {
//             selectedBall = balls[balls.length - 1];
//             console.log(`Bolinha selecionada no tubo ${tube.classList[0]}`);
//         }
//     } else {
//         const color = selectedBall.getAttribute('data-color');
//         if (balls.length === 0) {
//             // Se o tubo estiver vazio, posicione a bolinha no fundo
//             selectedBall.style.bottom = '0.1rem'; // Valor padrão para a primeira bola
//             tube.appendChild(selectedBall);
//             selectedBall = null;
//             console.log(`Bolinha ${color} movida para o fundo do tubo vazio ${tube.classList[0]}`);
//         } else {
//             moveBallToTube(tube, color);
//         }
//     }
// }

// // Adicionar event listeners para os tubos
// tubes.forEach(tube => {
//     tube.addEventListener('click', () => handleTubeClick(tube));
// });

// emptyTubes.forEach(emptyTube => {
//     emptyTube.addEventListener('click', () => {
//         if (selectedBall) {
//             const color = selectedBall.getAttribute('data-color');
//             moveBallToTube(emptyTube, color);
//         } else {
//             const balls = emptyTube.querySelectorAll('.ball');
//             if (balls.length > 0) {
//                 selectedBall = balls[balls.length - 1];
//                 console.log(`Bolinha selecionada no tubo vazio ${emptyTube.classList[0]}`);
//             }
//         }
//     });
// });









// const tubes = document.querySelectorAll('.tube0, .tube1, .tube2, .tube3');
// const emptyTubes = [document.querySelector('.empty-tube'), document.querySelector('.empty-tube1')];
// let selectedBall = null;

// function moveBallToTube(tube, color) {
//     const ballsInTube = tube.querySelectorAll('.ball');
    
//     if (ballsInTube.length < 4) {
//         tube.appendChild(selectedBall);
//         let positionOffset = 3.3; // Espaçamento padrão entre as balls
//         if (color === 'deeppink' && ballsInTube.length === 0) {
//             selectedBall.style.bottom = '0.1rem';
//         } else {
//             selectedBall.style.bottom = `${ballsInTube.length * positionOffset}rem`;
//         }
//         console.log(`Bolinha ${color} movida para o tubo ${tube.classList[0]}`);
//         selectedBall = null; // Deseleciona a bolinha após movê-la
//     }
// }

// function handleTubeClick(tube) {
//     const balls = tube.querySelectorAll('.ball');
    
//     if (!selectedBall) {
//         if (balls.length > 0) {
//             selectedBall = balls[balls.length - 1];
//             console.log(`Bolinha selecionada no tubo ${tube.classList[0]}`);
//         }
//     } else {
//         const color = selectedBall.getAttribute('data-color');
//         if ((color === 'deeppink' || color === 'yellow') && balls.length === 0) {
//             // Se o tubo estiver vazio, posicione a bolinha no fundo
//             selectedBall.style.bottom = '0.1rem';
//             tube.appendChild(selectedBall);
//             selectedBall = null;
//             console.log(`Bolinha ${color} movida para o fundo do tubo vazio ${tube.classList[0]}`);
//         } else {
//             moveBallToTube(tube, color);
//         }
//     }
// }

// // Adicionar event listeners para os tubos
// tubes.forEach(tube => {
//     tube.addEventListener('click', () => handleTubeClick(tube));
// });

// emptyTubes.forEach(emptyTube => {
//     emptyTube.addEventListener('click', () => {
//         if (selectedBall) {
//             const color = selectedBall.getAttribute('data-color');
//             moveBallToTube(emptyTube, color);
//         } else {
//             const balls = emptyTube.querySelectorAll('.ball');
//             if (balls.length > 0) {
//                 selectedBall = balls[balls.length - 1];
//                 console.log(`Bolinha selecionada no tubo vazio ${emptyTube.classList[0]}`);
//             }
//         }
//     });
// });






// const tubes = document.querySelectorAll('.tube0, .tube1, .tube2, .tube3');
// const emptyTubes = [document.querySelector('.empty-tube'), document.querySelector('.empty-tube1')];
// let selectedBall = null;

// function moveBallToTube(tube, color) {
//     const ballsInTube = tube.querySelectorAll('.ball');
    
//     if (ballsInTube.length < 4) {
//         tube.appendChild(selectedBall);
//         let positionOffset = 3.4; // Espaçamento padrão entre as balls
//         if (color === 'deeppink' && ballsInTube.length === 0) {
//             selectedBall.style.bottom = '0.2rem';
//         } else {
//             selectedBall.style.bottom = `${ballsInTube.length * positionOffset}rem`;
//         }
//         console.log(`Bolinha ${color} movida para o tubo ${tube.classList[0]}`);
//         selectedBall = null; // Deseleciona a bolinha após movê-la
//     }
// }

// function handleTubeClick(tube) {
//     const balls = tube.querySelectorAll('.ball');
    
//     if (!selectedBall) {
//         if (balls.length > 0) {
//             selectedBall = balls[balls.length - 1];
//             console.log(`Bolinha selecionada no tubo ${tube.classList[0]}`);
//         }
//     } else {
//         const color = selectedBall.getAttribute('data-color');
//         if ((color === 'deeppink' || color === 'yellow') && balls.length === 0) {
//             // Se o tubo estiver vazio, posicione a bolinha no fundo
//             selectedBall.style.bottom = '0.3rem';
//             tube.appendChild(selectedBall);
//             selectedBall = null;
//             console.log(`Bolinha ${color} movida para o fundo do tubo vazio ${tube.classList[0]}`);
//         } else {
//             moveBallToTube(tube, color);
//         }
//     }
// }

// // Adicionar event listeners para os tubos
// tubes.forEach(tube => {
//     tube.addEventListener('click', () => handleTubeClick(tube));
// });

// emptyTubes.forEach(emptyTube => {
//     emptyTube.addEventListener('click', () => {
//         if (selectedBall) {
//             const color = selectedBall.getAttribute('data-color');
//             moveBallToTube(emptyTube, color);
//         } else {
//             const balls = emptyTube.querySelectorAll('.ball');
//             if (balls.length > 0) {
//                 selectedBall = balls[balls.length - 1];
//                 console.log(`Bolinha selecionada no tubo vazio ${emptyTube.classList[0]}`);
//             }
//         }
//     });
// });





// const tubes = document.querySelectorAll('.tube0, .tube1, .tube2, .tube3');
// const emptyTubes = [document.querySelector('.empty-tube'), document.querySelector('.empty-tube1')];
// let selectedBall = null;

// function moveBallToTube(tube, color) {
//     const ballsInTube = tube.querySelectorAll(`[data-color="${color}"]`);
    
//     if (ballsInTube.length < 4) {
//         tube.appendChild(selectedBall);
//         let positionOffset = 3.2; // Espaçamento de 5 pixels entre as balls
//         switch (color) {
//             case 'deeppink':
//                 positionOffset = 3.2;
//                 break;
//             case 'yellow':
//                 positionOffset = 3.2; // Ajuste conforme necessário
//                 break;
//             // Adicione mais casos conforme necessário
//             default:
//                 positionOffset = 3; // Valor padrão
//         }
//         selectedBall.style.bottom = `${ballsInTube.length * positionOffset}rem`;
//         console.log(`Bolinha ${color} movida para o tubo ${tube.classList[0]}`);
//         selectedBall = null; // Deseleciona a bolinha após movê-la
//     }
// }

// function handleTubeClick(tube) {
//     const balls = tube.querySelectorAll('.ball');
    
//     if (!selectedBall) {
//         if (balls.length > 0) {
//             selectedBall = balls[balls.length - 1];
//             console.log(`Bolinha selecionada no tubo ${tube.classList[0]}`);
//         }
//     } else {
//         const color = selectedBall.getAttribute('data-color');
//         if ((color === 'deeppink' || color === 'yellow') && balls.length === 0) {
//             // Se o tubo estiver vazio, posicione a bolinha no fundo
//             selectedBall.style.bottom = '0.2rem';
//             tube.appendChild(selectedBall);
//             selectedBall = null;
//             console.log(`Bolinha ${color} movida para o fundo do tubo vazio ${tube.classList[0]}`);
//         } else {
//             moveBallToTube(tube, color);
//         }
//     }
// }

// // Adicionar event listeners para os tubos
// tubes.forEach(tube => {
//     tube.addEventListener('click', () => handleTubeClick(tube));
// });

// emptyTubes.forEach(emptyTube => {
//     emptyTube.addEventListener('click', () => {
//         if (selectedBall) {
//             const color = selectedBall.getAttribute('data-color');
//             moveBallToTube(emptyTube, color);
//         } else {
//             const balls = emptyTube.querySelectorAll('.ball');
//             if (balls.length > 0) {
//                 selectedBall = balls[balls.length - 1];
//                 console.log(`Bolinha selecionada no tubo vazio ${emptyTube.classList[0]}`);
//             }
//         }
//     });
// });




// const tubes = document.querySelectorAll('.tube0, .tube1, .tube2, .tube3');
// const emptyTubes = [document.querySelector('.empty-tube'), document.querySelector('.empty-tube1')];
// let selectedBall = null;

// function moveBallToTube(tube, color) {
//     const ballsInTube = tube.querySelectorAll(`[data-color="${color}"]`);
    
//     if (ballsInTube.length < 4) {
//         tube.appendChild(selectedBall);
//         let positionOffset;
//         switch (color) {
//             case 'deeppink':
//                 positionOffset = 51.5;
//                 break;
//             case 'yellow':
//                 positionOffset = 0;
//                 break;
//             // Adicione mais casos conforme necessário
//             default:
//                 positionOffset = 50; // Valor padrão
//         }
//         selectedBall.style.bottom = `${ballsInTube.length * positionOffset}px`;
//         console.log(`Bolinha ${color} movida para o tubo ${tube.classList[0]}`);
//         selectedBall = null; // Deseleciona a bolinha após movê-la
//     }
// }

// function handleTubeClick(tube) {
//     const balls = tube.querySelectorAll('.ball');
    
//     if (!selectedBall) {
//         if (balls.length > 0) {
//             selectedBall = balls[balls.length - 1];
//             console.log(`Bolinha selecionada no tubo ${tube.classList[0]}`);
//         }
//     } else {
//         const color = selectedBall.getAttribute('data-color');
//         if ((color === 'deeppink' || color === 'yellow') && balls.length === 0) {
//             // Se o tubo estiver vazio, posicione a bolinha no fundo
//             selectedBall.style.bottom = '0px';
//             tube.appendChild(selectedBall);
//             selectedBall = null;
//             console.log(`Bolinha ${color} movida para o fundo do tubo vazio ${tube.classList[0]}`);
//         } else {
//             moveBallToTube(tube, color);
//         }
//     }
// }

// // Adicionar event listeners para os tubos
// tubes.forEach(tube => {
//     tube.addEventListener('click', () => handleTubeClick(tube));
// });

// emptyTubes.forEach(emptyTube => {
//     emptyTube.addEventListener('click', () => {
//         if (selectedBall) {
//             const color = selectedBall.getAttribute('data-color');
//             moveBallToTube(emptyTube, color);
//         } else {
//             const balls = emptyTube.querySelectorAll('.ball');
//             if (balls.length > 0) {
//                 selectedBall = balls[balls.length - 1];
//                 console.log(`Bolinha selecionada no tubo vazio ${emptyTube.classList[0]}`);
//             }
//         }
//     });
// });



// const tubes = document.querySelectorAll('.tube0, .tube1, .tube2, .tube3');
// const emptyTubes = [document.querySelector('.empty-tube'), document.querySelector('.empty-tube1')];
// let selectedBall = null;

// function moveBallToTube(tube, color) {
//     const ballsInTube = tube.querySelectorAll(`[data-color="${color}"]`);
    
//     if (ballsInTube.length < 4) {
//         tube.appendChild(selectedBall);
//         // Ajuste a posição da bolinha com base na cor
//         let positionOffset;
//         switch (color) {
//             case 'deeppink':
//                 positionOffset = 51.5;
//                 break;
//             case 'yellow':
//                 positionOffset = -100.5;
//                 break;
//             // Adicione mais casos conforme necessário
//             default:
//                 positionOffset = 50; // Valor padrão
//         }
//         selectedBall.style.bottom = `${ballsInTube.length * positionOffset}px`;
//         console.log(`Bolinha ${color} movida para o tubo ${tube.classList[0]}`);
//         selectedBall = null; // Deseleciona a bolinha após movê-la
//     }
// }

// function handleTubeClick(tube) {
//     const balls = tube.querySelectorAll('.ball');
    
//     if (!selectedBall) {
//         if (balls.length > 0) {
//             selectedBall = balls[balls.length - 1];
//             console.log(`Bolinha selecionada no tubo ${tube.classList[0]}`);
//         }
//     } else {
//         const color = selectedBall.getAttribute('data-color');
//         moveBallToTube(tube, color);
//     }
// }

// // Adicionar event listeners para os tubos
// tubes.forEach(tube => {
//     tube.addEventListener('click', () => handleTubeClick(tube));
// });

// emptyTubes.forEach(emptyTube => {
//     emptyTube.addEventListener('click', () => {
//         if (selectedBall) {
//             const color = selectedBall.getAttribute('data-color');
//             moveBallToTube(emptyTube, color);
//         } else {
//             const balls = emptyTube.querySelectorAll('.ball');
//             if (balls.length > 0) {
//                 selectedBall = balls[balls.length - 1];
//                 console.log(`Bolinha selecionada no tubo vazio ${emptyTube.classList[0]}`);
//             }
//         }
//     });
// });





// const tubes = document.querySelectorAll('.tube0, .tube1, .tube2, .tube3');
// const emptyTubes = [document.querySelector('.empty-tube'), document.querySelector('.empty-tube1')];
// let selectedBall = null;

// function moveBallToTube(tube, color) {
//     const ballsInTube = tube.querySelectorAll(`[data-color="${color}"]`);
    
//     if (ballsInTube.length < 4) {
//         tube.appendChild(selectedBall);
//         // Ajuste a posição da bolinha com base na cor
//         let positionOffset;
//         switch (color) {
//             case 'deeppink':
//                 positionOffset = 51.5;
//                 break;
//             case 'yellow':
//                 positionOffset = 100.5;
//                 break;
//             // Adicione mais casos conforme necessário
//             default:
//                 positionOffset = 50; // Valor padrão
//         }
//         selectedBall.style.bottom = `${ballsInTube.length * positionOffset}px`;
//         selectedBall = null;
//         console.log(`Bolinha ${color} movida para o tubo ${tube.classList[0]}`);
//     }
// }

// function handleTubeClick(tube) {
//     const balls = tube.querySelectorAll('.ball');
    
//     if (!selectedBall) {
//         if (balls.length > 0) {
//             selectedBall = balls[balls.length - 1];
//             console.log(`Bolinha selecionada no tubo ${tube.classList[0]}`);
//         }
//     } else {
//         const color = selectedBall.getAttribute('data-color');
//         moveBallToTube(tube, color);
//     }
// }

// // Adicionar event listeners para os tubos
// tubes.forEach(tube => {
//     tube.addEventListener('click', () => handleTubeClick(tube));
// });


// emptyTubes.forEach(emptyTube => {
//     emptyTube.addEventListener('click', () => {
//         if (selectedBall) {
//             moveBallToTube(emptyTube);
//         } else {
//             const balls = emptyTube.querySelectorAll('.ball');
//             if (balls.length > 0) {
//                 selectedBall = balls[balls.length - 1];
//             }
//         }
//     });
// });

// emptyTubes.forEach(emptyTube => {
//     emptyTube.addEventListener('click', () => {
//         if (selectedBall) {
//             moveBallToTube(emptyTube);
//         } else {
//             const balls = emptyTube.querySelectorAll('.ball');
//             if (balls.length > 0) {
//                 selectedBall = balls[balls.length - 1];
//             }
//         }
//     });
// });



