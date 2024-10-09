// Configurações Gerais
//
// Variáveis globais

// Definindo a variável audiosAtivos como um array vazio para armazenar os áudios que estão sendo reproduzidos
const audiosAtivos = [];

// Variável para armazenar se o usuário já interagiu com a página, inicializada como false
let userInteracted = false;

// Variável para armazenar o nível atual do jogo, inicializada como 1
let nivelAtual = 1;

// Função para carregar e configurar os áudios
// Parâmetros:
// - caminho: string com o caminho do arquivo de áudio
// - loop: booleano opcional para definir se o áudio deve ser reproduzido em loop (padrão é false)
function carregarEConfigurarAudio(caminho, loop = false) {
  const audio = new Audio(caminho); // Cria um novo objeto de áudio com o caminho fornecido
  audio.loop = loop; // Define se o áudio deve ser reproduzido em loop
  return audio; // Retorna o objeto de áudio configurado
}

// Carregando e configurando os áudios do jogo

// Áudio para o som de queda, sem loop
const somQueda = carregarEConfigurarAudio(
  'Assets/Audios-de efeitos-do-jogo/bolinha-no-tubo.mp3'
);

// Áudio para o som de comemoração, sem loop
const somComemoracao = carregarEConfigurarAudio(
  'Assets/Audios-de efeitos-do-jogo/comemoracao.mp3'
);

// Áudio para o som de abertura da interface, sem loop
const somPlay = carregarEConfigurarAudio(
  'Assets/Audios-de efeitos-do-jogo/interface-abrir.mp3'
);

// Áudio para o som de fechamento da interface, sem loop
const somFecharInterface = carregarEConfigurarAudio(
  'Assets/Audios-de efeitos-do-jogo/interface-fechar.mp3'
);

// Áudio para o som de avanço para o próximo nível, sem loop
const somProximoNivel = carregarEConfigurarAudio(
  'Assets/Audios-de efeitos-do-jogo/proximo-nivel.mp3'
);

// Áudio para o som do jogo, configurado para loop
const somJogo = carregarEConfigurarAudio(
  'Assets/Audios-de efeitos-do-jogo/som-do-jogo.mp3',
  true
);

// Áudio para o som do ícone, sem loop
const somIcon = carregarEConfigurarAudio(
  'Assets/Audios-de efeitos-do-jogo/som-do-icon.mp3'
);

// Áudio para os sons dos botões do template, sem loop
const somTemplateButons = carregarEConfigurarAudio(
  'Assets/Audios-de efeitos-do-jogo/bEN-bC-bP-bTU.mp3'
);

// Adicionando os sons à lista de áudios ativos
// Adiciona todos os áudios carregados ao array audiosAtivos
audiosAtivos.push(
  somQueda,
  somComemoracao,
  somPlay,
  somFecharInterface,
  somProximoNivel,
  somJogo,
  somIcon,
  somTemplateButons
);

// // Elementos DOM que podem ser usados em várias funções
// // Seleciona o template da página inicial
// const templateHome = document.querySelector('.template-da-Home');

// // Seleciona o elemento do jogo pelo ID
// const jogo = document.getElementById('jogo');

// // Seleciona o botão da página inicial
// const botonHome = document.querySelector('.boton-Home');

// // Seleciona o elemento que exibe o valor do nível
// let nivelElemento = document.getElementById('nivel-valor');

// // Seleciona o template das configurações
// const templateConfiguracoes = document.querySelector('.template-configuracoes');

// // Seleciona o botão de estéreo
// let estereoButton = document.querySelector('.estereo');

// // Seleciona o botão de silenciar
// let silenciarButton = document.querySelector('.silenciar');

// // Seleciona o botão de vibração
// let vibrationButton = document.querySelector('.vibration');

// // Seleciona o botão de desativar vibração
// let noVibrationButton = document.querySelector('.noVibration');

// // Seleciona a barra de navegação pelo ID
// let navbar = document.getElementById('navbar');

// Funções Gerais de Controle de Áudio
//
// Função para carregar e configurar áudio sob demanda
// Parâmetros:
// - caminho: string com o caminho do arquivo de áudio
// - loop: booleano opcional para definir se o áudio deve ser reproduzido em loop (padrão é false)
function carregarEConfigurarAudio(caminho, loop = false) {
  let audio = new Audio(caminho); // Cria um novo objeto de áudio com o caminho fornecido
  audio.autoplay = false; // Define que o áudio não deve ser reproduzido automaticamente
  audio.muted = false; // Define que o áudio não está silenciado
  audio.loop = loop; // Define se o áudio deve ser reproduzido em loop
  audio.load(); // Carrega o áudio
  return audio; // Retorna o objeto de áudio configurado
}

// Adiciona eventos para detectar a interação do usuário
// Evento para detectar clique do usuário
document.addEventListener(
  'click',
  () => {
    userInteracted = true; // Marca que o usuário interagiu com a página
    tocarSomPlay(); // Toca o som de play
    console.log('Usuário interagiu com a página (click).'); // Loga a interação do usuário
  },
  { once: true } // Garante que o evento será executado apenas uma vez
);

// Evento para detectar toque do usuário
document.addEventListener(
  'touchstart',
  () => {
    userInteracted = true; // Marca que o usuário interagiu com a página
    tocarSomPlay(); // Toca o som de play
    console.log('Usuário interagiu com a página (touchstart).'); // Loga a interação do usuário
  },
  { once: true } // Garante que o evento será executado apenas uma vez
);

// Funções de Controle de Áudio
//
// Função para tocar o som de play
function tocarSomPlay() {
  if (somPlay) {
    // Verifica se o objeto somPlay está disponível
    somPlay
      .play() // Tenta reproduzir o som
      .then(() => {
        console.log('Som de play reproduzido com sucesso.'); // Loga o sucesso da reprodução
      })
      .catch((error) => {
        console.error('Erro ao tentar reproduzir o som de play:', error); // Loga o erro caso a reprodução falhe
      });
  } else {
    console.error('Objeto somPlay não está disponível.'); // Loga um erro caso o objeto somPlay não esteja disponível
  }
}

// Função para silenciar os áudios
document.querySelector('.estereo').addEventListener('click', function () {
  tocarSomIcon(); // Toca o som do ícone
  console.log('Stereo button clicked'); // Loga o clique no botão estéreo

  const estereoButton = document.querySelector('.estereo'); // Seleciona o botão estéreo
  const silenciarButton = document.querySelector('.silenciar'); // Seleciona o botão de silenciar

  if (estereoButton && silenciarButton) {
    // Verifica se ambos os botões foram encontrados
    estereoButton.style.visibility = 'hidden'; // Esconde o botão estéreo
    silenciarButton.style.visibility = 'visible'; // Mostra o botão de silenciar

    audiosAtivos.forEach((audio) => {
      // Itera sobre todos os áudios ativos
      if (audio !== somIcon) {
        // Verifica se o áudio não é o som do ícone
        audio.muted = true; // Silencia o áudio
        console.log(`Audio ${audio.src} muted: ${audio.muted}`); // Loga que o áudio foi silenciado
      }
    });
  } else {
    console.error('Um ou mais elementos DOM não foram encontrados.'); // Loga um erro caso um dos botões não seja encontrado
  }
});

// Função para pausar o som do jogo
function pausarSomJogo() {
  if (somJogo) {
    // Verifica se o objeto somJogo está disponível
    somJogo.pause(); // Pausa o som do jogo
    console.log('O som do jogo foi pausado.'); // Loga que o som do jogo foi pausado
  } else {
    console.error('Objeto somJogo não está disponível.'); // Loga um erro caso o objeto somJogo não esteja disponível
  }
}

// Função para reativar os áudios
document.querySelector('.silenciar').addEventListener('click', function () {
  tocarSomTemplateButons(); // Toca o som dos botões do template
  console.log('Muted button clicked'); // Loga o clique no botão de silenciar

  const estereoButton = document.querySelector('.estereo'); // Seleciona o botão estéreo
  const silenciarButton = document.querySelector('.silenciar'); // Seleciona o botão de silenciar

  if (estereoButton && silenciarButton) {
    // Verifica se ambos os botões foram encontrados
    silenciarButton.style.visibility = 'hidden'; // Esconde o botão de silenciar
    estereoButton.style.visibility = 'visible'; // Mostra o botão estéreo

    audiosAtivos.forEach((audio) => {
      // Itera sobre todos os áudios ativos
      // Reativa todos os áudios, incluindo o de comemoração
      if (audio !== somIcon) {
        // Verifica se o áudio não é o som do ícone
        audio.muted = false; // Reativa o áudio
        console.log(`Audio ${audio.src} muted: ${audio.muted}`); // Loga que o áudio foi reativado
      }
    });
  } else {
    console.error('Um ou mais elementos DOM não foram encontrados.'); // Loga um erro caso um dos botões não seja encontrado
  }
});

/////////////////////////////////////////////////////////////////////////////////////

// Funções Gerais do Jogo Primeira - Interação com a Interface
//
// Função para tocar o som ao fechar interfaces
function tocarSomFecharInterface() {
  if (userInteracted) {
    // Verifica se o usuário já interagiu com a página
    if (somFecharInterface) {
      // Verifica se o objeto somFecharInterface está disponível
      somFecharInterface.play().catch(function (error) {
        // Tenta reproduzir o som de fechamento da interface
        console.error(
          'Erro ao tentar reproduzir o som de interface fechada:',
          error
        ); // Loga um erro caso a reprodução falhe
      });
    } else {
      console.error('Objeto somFecharInterface não está disponível.'); // Loga um erro caso o objeto somFecharInterface não esteja disponível
    }
  } else {
    console.log(
      'Som de interface fechada não reproduzido porque o usuário não interagiu com a página.'
    ); // Loga que o som não foi reproduzido porque o usuário não interagiu com a página
  }
}

// Função para tocar som dos botões da interface de configurações
// Botões dentro da classe template buttons
function tocarSomTemplateButons() {
  if (somTemplateButons) {
    // Verifica se o objeto somTemplateButons está disponível
    somTemplateButons
      .play() // Tenta reproduzir o som
      .then(() => {
        console.log('Som de Template Butons reproduzido com sucesso.'); // Loga o sucesso da reprodução
      })
      .catch((error) => {
        console.error(
          'Erro ao tentar reproduzir o som de Template Butons:',
          error
        ); // Loga o erro caso a reprodução falhe
      });
  } else {
    console.error('Objeto Template Butons não está disponível.'); // Loga um erro caso o objeto somTemplateButons não esteja disponível
  }
}

// Adiciona event listener para todos os botões dentro da classe 'template-buttons', exceto o botão de fechar
const buttons = document.querySelectorAll('.template-buttons button');
buttons.forEach((button) => {
  if (!button.classList.contains('fechar-configuracoes')) {
    // Verifica se o botão não é o de fechar configurações
    button.addEventListener('click', () => {
      tocarSomTemplateButons(); // Adiciona o evento de tocar som ao clicar no botão
    });
  }
});

// Função para tocar o som dos ícones de som
// São dois botões dentro da interface de configurações
function tocarSomIcon() {
  if (userInteracted) {
    // Verifica se o usuário já interagiu com a página
    if (somIcon) {
      // Verifica se o objeto somIcon está disponível
      somIcon.play().catch(function (error) {
        // Tenta reproduzir o som dos ícones
        console.error('Erro ao tentar reproduzir o som dos ícones:', error); // Loga o erro caso a reprodução falhe
      });
    } else {
      console.error('Objeto somIcon não está disponível.'); // Loga um erro caso o objeto somIcon não esteja disponível
    }
  } else {
    console.log(
      'Som não reproduzido porque o usuário não interagiu com a página.'
    ); // Loga que o som não foi reproduzido porque o usuário não interagiu com a página
  }
}

// Evento que detecta a queda da bolinha no tubo
function detectarQueda() {
  // Lógica para detectar a queda da bolinha
  // Quando a bolinha cair no tubo, toque o som
  tocarSomQueda(); // Chama a função para tocar o som de queda
}

// Função para tocar o som de queda
function tocarSomQueda() {
  if (userInteracted) {
    // Verifica se o usuário já interagiu com a página
    if (somQueda) {
      // Verifica se o objeto somQueda está disponível
      somQueda.play().catch(function (error) {
        // Tenta reproduzir o som de queda
        console.error('Erro ao tentar reproduzir o som:', error); // Loga o erro caso a reprodução falhe
      });
    } else {
      console.error('Objeto somQueda não está disponível.'); // Loga um erro caso o objeto somQueda não esteja disponível
    }
  } else {
    console.log(
      'Som não reproduzido porque o usuário não interagiu com a página.'
    ); // Loga que o som não foi reproduzido porque o usuário não interagiu com a página
  }
}

// Função para tocar o som do jogo
function tocarSomJogo() {
  if (userInteracted) {
    // Verifica se o usuário já interagiu com a página
    if (somJogo) {
      // Verifica se o objeto somJogo está disponível
      somJogo.play().catch(function (error) {
        // Tenta reproduzir o som do jogo
        console.error('Erro ao tentar reproduzir o som do jogo:', error); // Loga o erro caso a reprodução falhe
      });
    } else {
      console.error('Objeto somJogo não está disponível.'); // Loga um erro caso o objeto somJogo não esteja disponível
    }
  } else {
    console.log(
      'Som do jogo não reproduzido porque o usuário não interagiu com a página.'
    ); // Loga que o som do jogo não foi reproduzido porque o usuário não interagiu com a página
  }
}

// Função para tocar o som de comemoração
function tocarSomComemoracao() {
  if (userInteracted) {
    // Verifica se o usuário já interagiu com a página
    if (somComemoracao) {
      // Verifica se o objeto somComemoracao está disponível
      somComemoracao.play().catch(function (error) {
        // Tenta reproduzir o som de comemoração
        console.error('Erro ao tentar reproduzir o som de comemoração:', error); // Loga o erro caso a reprodução falhe
      });
    } else {
      console.error('Objeto somComemoracao não está disponível.'); // Loga um erro caso o objeto somComemoracao não esteja disponível
    }
  } else {
    console.log(
      'Som de comemoração não reproduzido porque o usuário não interagiu com a página.'
    ); // Loga que o som de comemoração não foi reproduzido porque o usuário não interagiu com a página
  }
}

// Função para tocar o som para próximo nível
function tocarSomProximoNivel() {
  if (userInteracted) {
    // Verifica se o usuário já interagiu com a página
    if (somProximoNivel) {
      // Verifica se o objeto somProximoNivel está disponível
      somProximoNivel.play().catch(function (error) {
        // Tenta reproduzir o som de próximo nível
        console.error(
          'Erro ao tentar reproduzir o som de próximo nível:',
          error
        ); // Loga o erro caso a reprodução falhe
      });
    } else {
      console.error('Objeto somProximoNivel não está disponível.'); // Loga um erro caso o objeto somProximoNivel não esteja disponível
    }
  } else {
    console.log(
      'Som de próximo nível não reproduzido porque o usuário não interagiu com a página.'
    ); // Loga que o som não foi reproduzido porque o usuário não interagiu com a página
  }
}

////////////////////////////////////////////////////////////////////////////////////

// Funções de Jogo e Interação com o Usuário
//
// Função para iniciar o jogo ao clicar no botão play central e inicial
document.querySelector('.boton').addEventListener('click', function () {
  userInteracted = true; // Marca que o usuário interagiu com a página
  tocarSomPlay(); // Toca o som de play
  console.log('Usuário interagiu com a página (click).'); // Loga a interação do usuário
  console.log('Jogo iniciado'); // Loga que o jogo foi iniciado

  // Agrupar operações DOM
  const elementosParaEsconder = ['.mascara', '.boton', '.template-da-Home'];
  elementosParaEsconder.forEach((seletor) => {
    document.querySelector(seletor).style.display = 'none'; // Esconde os elementos especificados
  });
  document.getElementById('jogo').style.display = 'block'; // Mostra o elemento do jogo

  tocarSomJogo(); // Toca o som do jogo
  // iniciarJogo(); // Removido para evitar recursão infinita
});

// Função para abrir interface da Home
function homeAction() {
  console.log('homeAction chamada'); // Loga que a função homeAction foi chamada

  // Adiciona um atraso de 770 milissegundos antes de tocar o som de play
  setTimeout(() => {
    tocarSomPlay(); // Toca o som de play após o atraso
  }, 770);

  // Pausa o som do jogo
  if (somJogo) {
    // Verifica se o objeto somJogo está disponível
    somJogo.pause(); // Pausa o som do jogo
  } else {
    console.error('Objeto somJogo não está disponível.'); // Loga um erro caso o objeto somJogo não esteja disponível
  }

  // Agrupar operações DOM
  const templateHome = document.querySelector('.template-da-Home'); // Seleciona o template da Home
  const jogo = document.getElementById('jogo'); // Seleciona o elemento do jogo
  const botonHome = document.querySelector('.boton-Home'); // Seleciona o botão da Home
  let nivelAtual = document.getElementById('nivel-atual'); // Seleciona o elemento do nível atual

  if (templateHome && jogo && botonHome && nivelAtual) {
    // Verifica se todos os elementos foram encontrados
    templateHome.style.display = 'block'; // Mostra o template da Home
    jogo.style.display = 'none'; // Esconde o elemento do jogo
    botonHome.style.display = 'block'; // Mostra o botão da Home
    nivelAtual.classList.add('template-da-Home'); // Adiciona a classe 'template-da-Home' ao elemento do nível atual
    nivelAtual.style.display = 'none'; // Esconde o elemento do nível atual
    nivelAtual.style.display = 'block'; // Mostra o elemento do nível atual
  } else {
    console.error('Um ou mais elementos DOM não foram encontrados.'); // Loga um erro caso um dos elementos não seja encontrado
  }
}

// Configuração do botão central de play na Interface-Home
// Fechar Interface-Home e os botões, e exibe o jogo
// document.querySelector('.boton-Home').addEventListener('click', function () {
//   tocarSomFecharInterface();
//   console.log('jogoAction chamada');
//   document.querySelector('.template-da-Home').style.display = 'none';
//   document.getElementById('jogo').style.display = 'block';
//   document.getElementById('nivel-atual').classList.remove('template-da-Home');
//   document.getElementById('nivel-atual').style.display = 'none';
//   document.getElementById('nivel-atual').style.display = 'block';
//   somJogo.play();
// });

// Função abaixo é a mesma ajustada para maior desempenho
//
// Função do botão para fechar interface da home e voltar ao jogo
document.querySelector('.boton-Home').addEventListener('click', function () {
  // Tocar som de fechar interface
  tocarSomFecharInterface();
  console.log('jogoAction chamada'); // Loga que a função jogoAction foi chamada

  // Agrupar operações DOM
  const templateHome = document.querySelector('.template-da-Home'); // Seleciona o template da Home
  const jogo = document.getElementById('jogo'); // Seleciona o elemento do jogo
  let nivelAtual = document.getElementById('nivel-atual'); // Seleciona o elemento do nível atual

  if (templateHome && jogo && nivelAtual) {
    // Verifica se todos os elementos foram encontrados
    templateHome.style.display = 'none'; // Esconde o template da Home
    jogo.style.display = 'block'; // Mostra o elemento do jogo
    nivelAtual.classList.remove('template-da-Home'); // Remove a classe 'template-da-Home' do elemento do nível atual
    nivelAtual.style.display = 'none'; // Esconde o elemento do nível atual
    nivelAtual.style.display = 'block'; // Mostra o elemento do nível atual
  } else {
    console.error('Um ou mais elementos DOM não foram encontrados.'); // Loga um erro caso um dos elementos não seja encontrado
  }

  // Tocar som do jogo
  if (somJogo) {
    // Verifica se o objeto somJogo está disponível
    somJogo.play().catch(function (error) {
      // Tenta reproduzir o som do jogo
      console.error('Erro ao tentar reproduzir o som do jogo:', error); // Loga o erro caso a reprodução falhe
    });
  } else {
    console.error('Objeto somJogo não está disponível.'); // Loga um erro caso o objeto somJogo não esteja disponível
  }
});

// Função para abrir configurações - Botão localizado na interface da home
function configuracoes() {
  // Adiciona um atraso de 100 milissegundos antes de tocar o som de play
  setTimeout(() => {
    tocarSomPlay(); // Toca o som de play após o atraso
  }, 100);

  // Agrupar operações DOM
  const templateConfiguracoes = document.querySelector(
    '.template-configuracoes'
  ); // Seleciona o template de configurações
  const botonHome = document.querySelector('.boton-Home'); // Seleciona o botão da Home

  if (templateConfiguracoes && botonHome) {
    // Verifica se ambos os elementos foram encontrados
    templateConfiguracoes.style.display = 'block'; // Mostra o template de configurações
    botonHome.style.display = 'none'; // Esconde o botão da Home
  } else {
    console.error('Um ou mais elementos DOM não foram encontrados.'); // Loga um erro caso um dos elementos não seja encontrado
  }
}

// Função para fechar configurações - Botão localizado na interface de configurações
function fechar() {
  tocarSomFecharInterface(); // Toca o som de fechar interface

  // Agrupar operações DOM
  const templateConfiguracoes = document.querySelector(
    '.template-configuracoes'
  ); // Seleciona o template de configurações
  const botonHome = document.querySelector('.boton-Home'); // Seleciona o botão da Home

  if (templateConfiguracoes && botonHome) {
    // Verifica se ambos os elementos foram encontrados
    templateConfiguracoes.style.display = 'none'; // Esconde o template de configurações
    botonHome.style.display = 'block'; // Mostra o botão da Home
  } else {
    console.error('Um ou mais elementos DOM não foram encontrados.'); // Loga um erro caso um dos elementos não seja encontrado
  }
}

// Função para atualizar o nível
function atualizarNivel() {
  nivelAtual++; // Incrementa o nível atual
  const nivelElemento = document.getElementById('nivel-valor'); // Seleciona o elemento que exibe o valor do nível
  if (nivelElemento) {
    // Verifica se o elemento foi encontrado
    nivelElemento.textContent = nivelAtual; // Atualiza o texto do elemento com o novo nível
  } else {
    console.error('Elemento de nível não encontrado.'); // Loga um erro caso o elemento não seja encontrado
  }
}

///////////////////////////////////////////////////////////////////////////////////

// Funções de Vibração e Navbar

// Função para vibrar o dispositivo
function vibrarDispositivo() {
  if ('vibrate' in navigator) {
    // Verifica se a vibração é suportada pelo navegador
    navigator.vibrate(200); // Faz o dispositivo vibrar por 200 milissegundos
    console.log('Vibração iniciada.'); // Loga que a vibração foi iniciada
  } else {
    console.error('Vibração não suportada neste dispositivo.'); // Loga um erro caso a vibração não seja suportada
  }
}

// Função para ativar a vibração
function vibrationOn() {
  vibrarDispositivo(); // Chama a função para vibrar o dispositivo
  console.log('Vibração ativada.'); // Loga que a vibração foi ativada
}

// Função para desativar a vibração
function vibrationOff() {
  console.log('Vibração desativada.'); // Loga que a vibração foi desativada
}

// Evento para o botão de desativar vibração
document.querySelector('.noVibration').onclick = function () {
  console.log('No Vibration button clicked'); // Loga o clique no botão de desativar vibração

  const vibrationButton = document.querySelector('.vibration'); // Seleciona o botão de ativar vibração
  const noVibrationButton = document.querySelector('.noVibration'); // Seleciona o botão de desativar vibração

  if (vibrationButton && noVibrationButton) {
    // Verifica se ambos os botões foram encontrados
    noVibrationButton.style.visibility = 'hidden'; // Esconde o botão de desativar vibração
    vibrationButton.style.visibility = 'visible'; // Mostra o botão de ativar vibração
    vibrationOn(); // Ativa a vibração
    tocarSomTemplateButons(); // Toca o som dos botões do template
  } else {
    console.error('Um ou mais elementos DOM não foram encontrados.'); // Loga um erro caso um dos botões não seja encontrado
  }
};

// Evento para o botão de ativar vibração
document.querySelector('.vibration').onclick = function () {
  console.log('Vibration button clicked'); // Loga o clique no botão de ativar vibração

  let vibrationButton = document.querySelector('.vibration'); // Seleciona o botão de ativar vibração
  let noVibrationButton = document.querySelector('.noVibration'); // Seleciona o botão de desativar vibração

  if (vibrationButton && noVibrationButton) {
    // Verifica se ambos os botões foram encontrados
    noVibrationButton.style.visibility = 'visible'; // Mostra o botão de desativar vibração
    vibrationButton.style.visibility = 'hidden'; // Esconde o botão de ativar vibração
    vibrationOff(); // Desativa a vibração
  } else {
    console.error('Um ou mais elementos DOM não foram encontrados.'); // Loga um erro caso um dos botões não seja encontrado
  }
};

// Função para atualizar a navbar
function atualizarNavbar() {
  let navbar = document.getElementById('navbar'); // Seleciona o elemento da navbar
  if (navbar) {
    // Verifica se o elemento foi encontrado
    if (nivelAtual >= 2) {
      // Verifica se o nível atual é maior ou igual a 2
      navbar.style.display = 'flex'; // Exibe a navbar
    } else {
      navbar.style.display = 'none'; // Oculta a navbar
    }
  } else {
    console.error('Elemento navbar não encontrado.'); // Loga um erro caso o elemento não seja encontrado
  }
}

// CÓDIGO ABAIXO RESERVADO PARA IMPLEMENTAÇÃO FUTURA__________________________________________________________________________
// // Função para resetar o nível
// function resetarNivel() {
//   // Exemplo de resetar variáveis
//   nivelAtual = 1; // ou qualquer valor inicial
// }

// // Função para resetar o nível
// function resetarNivel() {
//   console.log('Resetando o nível...');

//   // Aqui você pode adicionar qualquer lógica adicional para resetar o nível
//   // Por exemplo, resetar variáveis específicas do jogo
//   // nivelAtual = 1; // Se você quiser resetar para o nível 1
//   // Ou manter o nível atual
//   // nivelAtual = nivelAtual; // Mantém o nível atual

//   // Resetar o estado do jogo sem recarregar a página
//   iniciarNivel(nivelAtual);
// }

// // Função para iniciar o nível
// function iniciarNivel(nivel) {
//   console.log(`Iniciando o nível ${nivel}...`);
//   // Adicione aqui a lógica para iniciar o nível
//   // Por exemplo, configurar o estado inicial do nível
//   // e carregar os elementos do jogo para o nível atual
// }

// // Adicionar evento ao botão de reset
// document.querySelector('.reset').addEventListener('click', resetarNivel);

// // Exemplo de chamada para iniciar o nível atual ao carregar a página
// iniciarNivel(nivelAtual);
// ________________________________________________________________________________

// Lógica Base do jogo

// Seleciona todos os tubos do jogo
const tubes = document.querySelectorAll('.tube0, .tube1, .tube2, .tube3');

// Seleciona os tubos vazios
const emptyTubes = [
  document.querySelector('.empty-tube'),
  document.querySelector('.empty-tube1'),
];

// Variável para armazenar a bola selecionada
let selectedBall = null;

// Constante para definir o espaçamento padrão entre as bolinhas
const POSITION_OFFSET = 3.3; // Espaçamento em rem

/**
 * Move a bola selecionada para o tubo especificado, se possível.
 * @param {Element} tube - O tubo para onde a bola será movida.
 * @param {string} color - A cor da bola selecionada.
 */
function moveBallToTube(tube, color) {
  // Seleciona todas as bolas dentro do tubo
  const ballsInTube = tube.querySelectorAll('.ball');

  // Obtém a cor da bola no topo do tubo, se houver
  const topBallColor = ballsInTube.length
    ? ballsInTube[ballsInTube.length - 1].getAttribute('data-color')
    : null;

  // Loga a cor da bola no topo do tubo e a cor da bola selecionada
  console.info(
    `Cor da bola no topo do tubo ${tube.className}: ${topBallColor}`
  );
  console.info(`Cor da bola selecionada: ${color}`);

  // Verifica se a bola selecionada pode ser movida para o tubo
  if (
    selectedBall && // Verifica se há uma bola selecionada
    ballsInTube.length < 4 && // Verifica se o tubo não está cheio
    (!topBallColor || topBallColor === color) // Verifica se o tubo está vazio ou se a cor da bola no topo é a mesma da bola selecionada
  ) {
    tube.appendChild(selectedBall); // Move a bola selecionada para o tubo
    selectedBall.style.bottom = ballsInTube.length
      ? `${ballsInTube.length * POSITION_OFFSET}rem` // Define a posição da bola dentro do tubo
      : '0.1rem'; // Define a posição da primeira bola no tubo
    console.info(`Bolinha ${color} movida para o tubo ${tube.className}`); // Loga que a bola foi movida

    selectedBall = null; // Deseleciona a bola após movê-la

    // Adiciona um pequeno atraso para garantir que a bola esteja no tubo antes de tocar o som
    setTimeout(() => {
      tocarSomQueda(); // Toca o som quando a bola é movida para o tubo
    }, 939); // Ajuste o tempo conforme necessário
  } else {
    // Loga um erro se a bola não puder ser movida para o tubo
    console.error(
      `Não é possível mover a bolinha ${color} para o tubo ${tube.className} porque contém bolas de outra cor ou está cheio.`
    );
    selectedBall = null; // Deseleciona a bola se a movimentação não for permitida
  }
}

const MAX_BALLS_PER_TUBE = 4; // Número máximo de bolas por tubo

/**
 * Manipula o clique em um tubo.
 * @param {Element} tube - O tubo que foi clicado.
 */
function handleTubeClick(tube) {
  const balls = tube.querySelectorAll('.ball'); // Seleciona todas as bolas no tubo

  if (!selectedBall) {
    // Se nenhuma bola estiver selecionada
    selectBallFromTube(tube, balls); // Seleciona a bola do topo do tubo
  } else {
    moveSelectedBallToTube(tube, balls); // Move a bola selecionada para o tubo
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
    // Se houver bolas no tubo
    selectedBall = balls[balls.length - 1]; // Seleciona a bola do topo
    console.info(`Bolinha selecionada no tubo ${tube.className}`); // Loga a seleção da bola
  }
}

/**
 * Move a bola selecionada para o tubo especificado, se possível.
 * @param {Element} tube - O tubo para onde a bola será movida.
 * @param {NodeList} balls - As bolas no tubo.
 */
function moveSelectedBallToTube(tube, balls) {
  const color = selectedBall.getAttribute('data-color'); // Obtém a cor da bola selecionada
  const topBallColor =
    balls.length > 0
      ? balls[balls.length - 1].getAttribute('data-color') // Obtém a cor da bola no topo do tubo
      : null;

  console.info(
    `Cor da bola no topo do tubo ${tube.className}: ${topBallColor}`
  );
  console.info(`Cor da bola selecionada: ${color}`);

  if (
    balls.length < MAX_BALLS_PER_TUBE && // Verifica se o tubo não está cheio
    (!topBallColor || topBallColor === color) // Verifica se o tubo está vazio ou se a cor da bola no topo é a mesma da bola selecionada
  ) {
    moveBallToTube(tube, color); // Move a bola para o tubo
    // tocarSomQueda(); // Toca o som quando a bolinha é movida para o tubo
  } else {
    console.error(
      `Não é possível mover a bolinha ${color} para o tubo ${tube.className} porque contém bolas de outra cor ou está cheio.`
    ); // Loga um erro se a bola não puder ser movida para o tubo
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
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]]; // Troca os elementos de lugar
  }
  return newArray; // Retorna a lista embaralhada
}

// Embaralhar as bolinhas
const shuffledBalls = shuffle([...balls]); // Usar spread operator em vez de Array.from

// Limpar os tubos antes de redistribuir as bolinhas
tubes.forEach((tube) => {
  tube.innerHTML = ''; // Usar innerHTML em vez de remover filhos um a um
});

/**
 * Distribui as bolinhas embaralhadas nos tubos.
 * @param {Array} shuffledBalls - As bolinhas embaralhadas.
 */
shuffledBalls.forEach((ball, index) => {
  const tubeIndex = index % tubes.length; // Calcula o índice do tubo para distribuir as bolinhas
  tubes[tubeIndex].appendChild(ball); // Adiciona a bolinha ao tubo correspondente
  ball.style.bottom = `${(tubes[tubeIndex].childElementCount - 1) * 3.3}rem`; // Ajusta a posição da bolinha dentro do tubo
});

// Adicionar event listeners para os tubos
tubes.forEach((tube) => {
  tube.addEventListener('click', () => handleTubeClick(tube)); // Adiciona o evento de clique para cada tubo
});

// Adicionar event listeners para os tubos vazios
emptyTubes.forEach((emptyTube) => {
  console.info(
    `Adicionando event listener ao tubo vazio ${emptyTube.classList[0]}`
  );
  emptyTube.addEventListener('click', () => {
    if (selectedBall) {
      // Se houver uma bolinha selecionada
      const color = selectedBall.dataset.color; // Obtém a cor da bolinha selecionada usando dataset
      moveBallToTube(emptyTube, color); // Move a bolinha para o tubo vazio
      // tocarSomQueda(); // Toca o som quando a bolinha é movida para o tubo
    } else {
      const balls = emptyTube.querySelectorAll('.ball'); // Seleciona todas as bolinhas no tubo vazio
      if (balls.length > 0) {
        // Se houver bolinhas no tubo vazio
        selectedBall = balls[balls.length - 1]; // Seleciona a bolinha do topo
        emptyTube.removeChild(selectedBall); // Remove a bolinha do tubo vazio
        console.info(
          `Bolinha selecionada no tubo vazio ${emptyTube.classList[0]}`
        );
      }
    }
  });
});

// FIM.. Da Lógica Base Código Acima_____________________________________

nivelAtual = 1;

// Defina como verdadeiro para usar a lógica atual ou falso para a nova lógica
// UseCurrentLogic = true ou false, como um interruptor -> Alternando Entre lógica Ativa e Inativa
// Posiçoes de tubos de lógica base afetados pela lógica introdutória
// Pois usa os mesmos elementos e precisei mudar a posição
// Dos tubos no css Classe tubes
const useCurrentLogic = false;

if (useCurrentLogic) {
  // Lógica atual com 4 tubos
  // Nenhuma alteração aqui
} else {
  console.info('Nível introdutório iniciado');

  // Começa Lógica introdutória Código Abaixo_________________________________________
  // Se UseCurrentLogic=false;
  // Lógica Introdutória
  //
  // Remover todas as bolas existentes dos tubos
  // Alteração: usar `while` em vez de `for` para remover todos os filhos
  tubes.forEach((tube) => {
    while (tube.firstChild) {
      tube.removeChild(tube.firstChild); // Remove todas as bolas do tubo
    }
  });

  // Variável para armazenar a bola selecionada
  let selectedBall = null;

  // Seleciona os tubos e o tubo vazio
  const tube0 = document.querySelector('.tube0');
  const tube1 = document.querySelector('.tube1');
  const tube2 = document.querySelector('.tube2');
  const tube3 = document.querySelector('.tube3');
  const emptyTube1 = document.querySelector('.empty-tubes');

  /**
   * Adiciona bolas empilhadas a um tubo.
   * @param {Element} tube - O tubo onde as bolas serão adicionadas.
   * @param {string} color - A cor das bolas.
   * @param {number} numBalls - O número de bolas a serem adicionadas.
   */
  function addBalls(tube, color, numBalls) {
    const positionOffset = 3.3; // Espaçamento padrão entre as bolinhas
    let bottomPosition = 0.1; // Valor padrão para a primeira bola

    for (let i = 0; i < numBalls; i++) {
      const ball = document.createElement('div'); // Cria uma nova bola
      ball.classList.add('ball', `${color}-ball`); // Adiciona classes à bola
      ball.setAttribute('data-color', color); // Define o atributo de cor
      ball.style.bottom = `${bottomPosition}rem`; // Define a posição da bola
      tube.appendChild(ball); // Adiciona a bola ao tubo
      console.info(`Bola ${color} adicionada ao tubo: ${i + 1}`); // Loga a adição da bola
      bottomPosition += positionOffset; // Atualiza a posição para a próxima bola
    }
  }

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

  // Remover event listeners dos tubos 3
  tube3.removeEventListener('click', handleTubeClick);
  emptyTube1.removeEventListener('click', handleTubeClick);

  // Esconder tubos 3 e emptyTube1
  tube3.style.display = 'none';
  emptyTube1.style.display = 'none';

  // Bloqueia cliques nos tubos especificados
  function bloquearCliques() {
    tube0.classList.add('blocked');
    tube1.classList.add('blocked');
  }
  /**
   * Desbloqueia cliques em um tubo específico.
   * @param {Element} tubo - O tubo a ser desbloqueado.
   */
  function desbloquearClique(tubo) {
    tubo.classList.remove('blocked'); // Remove a classe "blocked" do tubo
  }

  /**
   * Bloqueia cliques em todos os tubos.
   */
  function bloquearTodosOsTubos() {
    const allTubes = document.querySelectorAll('.tube0, .tube1, .tube2'); // Seleciona todos os elementos com a classe "tube"
    allTubes.forEach((tube) => tube.classList.add('blocked')); // Adiciona a classe "blocked" a cada tubo
  }

  /**
   * Desbloqueia cliques em todos os tubos.
   */
  function desbloquearTodosOsTubos() {
    const allTubes = document.querySelectorAll('.tube0, .tube1, .tube2'); // Seleciona todos os elementos com a classe "tube"
    allTubes.forEach((tube) => tube.classList.remove('blocked')); // Remove a classe "blocked" de cada tubo
  }

  /**
   * Reseta a opacidade de todos os tubos.
   */
  function resetOpacidade() {
    const allTubes = document.querySelectorAll('.tube0, .tube1, .tube2'); // Seleciona todos os elementos com a classe "tube"
    allTubes.forEach((tube) => tube.classList.add('resetOpacity')); // Adiciona a classe "resetOpacity" a cada tubo
  }

  // Função para selecionar uma bola
  function selecionarBola(event) {
    const target = event.target; // Obtém o elemento clicado

    // Se já houver uma bolinha selecionada
    if (selectedBall) {
      const corSelecionada = selectedBall.getAttribute('data-color'); // Obtém a cor da bola selecionada
      const corClicada = target.getAttribute('data-color'); // Obtém a cor da bola clicada

      // Se a cor da bola clicada for diferente da bola selecionada
      if (corSelecionada !== corClicada) {
        // A bola selecionada cai de volta no tubo
        selectedBall.style.transform = 'translateY(0)';
        selectedBall.classList.remove('flutuando', 'unclickable');
        selectedBall = null;

        // A bola clicada começa a flutuar
        if (!target.classList.contains('unclickable')) {
          selectedBall = target;
          selectedBall.classList.add('flutuando', 'unclickable');
          selectedBall.style.transform = 'translateY(-130px)';
        }
        return;
      }

      // Se a cor da bola clicada for a mesma da bola selecionada
      const tuboDestino = target.parentElement; // Obtém o tubo de destino
      if (podeMoverParaTubo(tuboDestino, selectedBall)) {
        tuboDestino.appendChild(selectedBall); // Move a bola para o tubo de destino
        selectedBall.style.transform = 'translateY(-1px)';
        selectedBall.classList.remove('flutuando', 'unclickable');
        selectedBall = null;
        console.info('Bola movida para o tubo:', tuboDestino); // Loga a movimentação da bola
      } else {
        console.error(
          'Não é possível mover a bolinha para o tubo:',
          tuboDestino
        ); // Loga um erro se a bola não puder ser movida
      }
      return;
    }

    // Se não houver bolinha selecionada, selecionar a bolinha clicada
    if (!target || target.classList.contains('unclickable')) return;
    selectedBall = target;
    selectedBall.classList.add('flutuando', 'unclickable');
    selectedBall.style.transform = 'translateY(-130px)';

    console.info('Bola selecionada:', selectedBall); // Loga a seleção da bola
  }

  // Função para verificar se a bolinha pode ser movida para o tubo
  function podeMoverParaTubo(tubo, bola) {
    const bolasNoTubo = tubo.querySelectorAll('.ball'); // Seleciona todas as bolas no tubo
    if (bolasNoTubo.length === 0) {
      return true; // O tubo está vazio, pode mover
    }

    const corTopo =
      bolasNoTubo[bolasNoTubo.length - 1].getAttribute('data-color'); // Obtém a cor da bola no topo do tubo
    const corBola = bola.getAttribute('data-color'); // Obtém a cor da bola

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
          console.error(
            'Não é possível mover a bolinha para o tubo:',
            tuboDestino
          );
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
  document.querySelectorAll('.ball, .tube').forEach((element) => {
    if (element.classList.contains('tube') && element.children.length === 0) {
      console.warn(
        'Tentando adicionar event listener a um tubo vazio:',
        element
      );
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
        console.warn(
          `Não é possível mover a bolinha ${corBolaSelecionada} para o tubo ${tubo.className} porque contém bolas de outra cor ou está cheio.`
        );
        return;
      }

      // Lógica para mover a bola
      tubo.appendChild(elementoClicado);
      console.info(
        `Bolinha ${corBolaSelecionada} movida para o tubo ${tubo.className}`
      );
    }
  }

  /**
   * Função para remover todas as indicações.
   */
  function removerIndicacao() {
    const indicacoes = document.querySelectorAll('.indicacao');
    indicacoes.forEach((indicacao) => indicacao.remove());
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
    mensagens.forEach((mensagem) => (mensagem.style.display = 'none'));
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
      }, 1001);

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
    }, 1000);
  }

  /**
   * Função para criar confetes na posição especificada.
   * @param {number} x - A posição x onde os confetes serão criados.
   * @param {number} y - A posição y onde os confetes serão criados.
   */
  function criarConfetes(x, y) {
    const container = document.getElementById('confetes');

    // Limpar confetes existentes
    while (container.firstChild) {
      container.removeChild(container.firstChild); // Remove todos os confetes existentes
    }

    for (let i = 0; i < 47; i++) {
      // Ajustado para 47 confetes
      const confetti = document.createElement('div'); // Cria um novo elemento div para o confete
      confetti.classList.add('confete'); // Adiciona a classe 'confete' ao elemento
      confetti.style.left = `${x}px`; // Define a posição x do confete
      confetti.style.top = `${y}px`; // Define a posição y do confete
      confetti.style.backgroundColor = `hsl(${Math.random() * 350}, 100%, 50%)`; // Define uma cor aleatória para o confete

      // Dispersão circular
      const angle = Math.random() * 5 * Math.PI; // Ângulo aleatório em radianos
      const radius = Math.random() * 160; // Raio aleatório até 160px
      const offsetX = Math.cos(angle) * radius; // Calcula o deslocamento x
      const offsetY = Math.sin(angle) * radius; // Calcula o deslocamento y

      confetti.style.transform = `translate(${offsetX}px, ${offsetY}px)`; // Aplica a transformação de translação
      container.appendChild(confetti); // Adiciona o confete ao container

      // Animação de queda usando requestAnimationFrame
      requestAnimationFrame(() => {
        confetti.style.transition =
          'transform 2s ease-out, opacity 0.8s ease-out'; // Define a transição
        confetti.style.transform = `translate(${offsetX}px, ${
          offsetY + 100
        }px)`; // Aplica a queda de 100px
        confetti.style.opacity = '1'; // Define a opacidade

        // Remover confete após a animação
        setTimeout(() => {
          confetti.remove(); // Remove o confete após 950ms
        }, 950);
      });
    }
  }

  /**
   * Função para disparar uma explosão de confetes.
   */
  function triggerConfete() {
    const width = window.innerWidth / 2;
    const height = window.innerHeight / 2;

    // Coordenadas aleatórias para a explosão
    const x = Math.random() * width;
    const y = Math.random() * height;

    criarConfetes(x, y); // Cria confetes na posição aleatória
  }

  /**
   * Função para iniciar uma sequência contínua de explosões de confetes.
   */
  function sequenciaExplosoes() {
    // Explosões contínuas em diferentes partes da tela
    setInterval(() => {
      triggerConfete();
    }, 290); // Intervalo de 290ms entre explosões
  }

  // Iniciar sequência de explosões
  sequenciaExplosoes();

  /**
   * Função para criar confetes que saem dos tubos.
   * @param {Element} tubo - O tubo de onde os confetes sairão.
   */
  function criarConfetesDosTubos(tubo) {
    const containerTubo = document.getElementById('confetesDosTubos');
    const fragment = document.createDocumentFragment();
    containerTubo.style.display = 'flex'; // Mostrar o container de confetes dos tubos

    const rect = tubo.getBoundingClientRect();
    const xPos = rect.left + rect.width / 2;
    const yPos = rect.top;

    for (let i = 0; i < 100; i++) {
      const confettiTubo = document.createElement('div');
      confettiTubo.classList.add('confeteTubo');
      confettiTubo.style.left = `${xPos}px`;
      confettiTubo.style.top = `${yPos}px`;
      confettiTubo.style.backgroundColor = `hsl(${
        Math.random() * 70
      }, 100%, 50%)`;

      const angle = Math.random() * Math.PI; // Ângulo aleatório em radianos
      const radius = Math.random() * 50; // Raio aleatório até 50px
      const offsetX = Math.cos(angle) * radius;
      const offsetY = -Math.random() * 198; // Sobe até 198px

      confettiTubo.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
      fragment.appendChild(confettiTubo);

      requestAnimationFrame(() => {
        confettiTubo.style.transition =
          'transform 1.95s ease-out, opacity 1.80s ease-out';
        confettiTubo.style.transform = `translate(${offsetX}px, ${
          offsetY - 130
        }px)`; // Sobe 130px
        confettiTubo.style.opacity = '1';

        setTimeout(() => {
          const fallOffsetX = (Math.random() - 0.4) * 205; // Variação horizontal na queda
          confettiTubo.style.transform = `translate(${
            offsetX + fallOffsetX
          }px, ${offsetY + 350}px)`; // Cai 350px
          confettiTubo.style.opacity = '1';
        }, 893); // Inicia a queda após 893ms
      });

      setTimeout(() => {
        confettiTubo.remove();
      }, 2900); // Remover após 2900ms
    }

    containerTubo.appendChild(fragment);
  }

  /**
   * Função para disparar confetes dos tubos.
   * @param {Element} tubo - O tubo de onde os confetes sairão.
   */
  function triggerConfetesDosTubos(tubo) {
    criarConfetesDosTubos(tubo); // Chama a função para criar confetes dos tubos
  }

  /**
   * Função para iniciar uma sequência de explosões de confetes dos tubos.
   * @param {Element} tubo - O tubo de onde os confetes sairão.
   */
  function sequenciaExplosoesTubo(tubo) {
    triggerConfetesDosTubos(tubo); // Disparo único

    // Esconder o container de confetes dos tubos após a animação
    setTimeout(() => {
      const containerTubo = document.getElementById('confetesDosTubos');
      containerTubo.style.display = 'none';
    }, 2900); // Esconder após 2900ms
  }

  /**
   * Função para verificar se o tubo está completo.
   * @param {Element} tubo - O tubo a ser verificado.
   */
  function verificarCompleto(tubo) {
    const bolas = tubo.querySelectorAll('.ball');
    if (bolas.length === 4) {
      const cor = bolas[0].getAttribute('data-color'); // Assumindo que todas as bolas têm a mesma cor
      tubo.style.boxShadow = getBoxShadow(cor); // Aplica o box-shadow baseado na cor
      // Vibra o dispositivo quando o tubo for completado
      vibrarDispositivo();
      // triggerConfetesDosTubos(tubo); // Use esta chamada se necessário
    } else {
      tubo.style.boxShadow = 'none'; // Remove o brilho se o tubo não estiver completo
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
      tubo.classList.add(`complete-${cor}`); // Adiciona a classe de brilho correspondente
      sequenciaExplosoesTubo(tubo); // Chama a explosão para o tubo completado
    } else {
      tubo.classList.remove('complete-blue', 'complete-red', 'complete-white'); // Remove todas as classes de brilho
    }
  }

  /**
   * Função para iniciar o jogo.
   */
  function iniciarJogo() {
    bloquearCliques(tube0, tube1); // Bloquear cliques nos tubos 0 e 1 inicialmente
    adicionarIndicacao(tube2);

    tube2.addEventListener(
      'click',
      function () {
        removerIndicacao(tube2);
        selecionarBolaPorCor(tube2, 'blue'); // Garantir que a bolinha azul flutue
        bloquearTodosOsTubos();
        desbloquearClique(tube0); // Desbloquear clique no tubo 0
        adicionarIndicacao(tube2);
        adicionarIndicacao(tube0);
        esconderMensagens('mensagem1');
        mostrarMensagem('mensagem2');

        tube0.addEventListener(
          'click',
          function () {
            removerIndicacao(tube0);
            moverBola(tube0);
            bloquearCliques(tube0); // Bloquear cliques nos tubos 0 e 1 novamente
            desbloquearClique(tube2);
            verificarCompleto(tube0);
            verificarCompletoBefore(tube0);
            adicionarIndicacao(tube2);
            esconderMensagens('mensagem2');
            mostrarMensagem('mensagem1');

            tube2.addEventListener(
              'click',
              function () {
                removerIndicacao(tube2);
                selecionarBolaPorCor(tube2, 'red'); // Garantir que a bolinha vermelha flutue
                bloquearTodosOsTubos();
                desbloquearClique(tube1); // Desbloquear clique no tubo 1
                adicionarIndicacao(tube2);
                adicionarIndicacao(tube1);
                esconderMensagens('mensagem1');
                mostrarMensagem('mensagem3');

                tube1.addEventListener(
                  'click',
                  function () {
                    removerIndicacao(tube1);
                    moverBola(tube1);
                    verificarCompleto(tube1);
                    verificarCompletoBefore(tube1);
                    esconderMensagens('mensagem3');
                    document.getElementById('mensagem3').style.display = 'none'; // Esconde a mensagem 3
                    verificarGanho(); // Verifica se o jogador completou a tarefa
                    bloquearTodosOsTubos();
                    resetOpacidade();
                  },
                  { once: true }
                );
              },
              { once: true }
            );
          },
          { once: true }
        );
      },
      { once: true }
    );
  }

  // Iniciar o jogo ao carregar a página
  window.onload = iniciarJogo;

  // Adiciona evento de clique para avançar para o próximo nível
  document.getElementById('proximo-nivel').addEventListener('click', () => {
    tocarSomProximoNivel();
    atualizarNivel();
    atualizarNavbar();
    desbloquearTodosOsTubos();

    // Inicializa a navbar no estado correto
    atualizarNavbar();

    document.getElementById('nivel-atual').textContent = `Nível: ${nivelAtual}`;
    document.getElementById('mensagem-vitoria').classList.remove('mostrar');
    iniciarProximoNivel();
  });

// FIM... Da Lógica de Nivel De Introdução_____________________________________________

// Começa um Novo Nivel_______________________________________________________________
// Este trecho em diante seria responsável por iniciar novos níveis, incluindo a criação de novos tubos e bolas
// Talvez a maneira que estou tentando desenvolver esta lógica esteja errada
// Por isso preciso de uma nova visão

/**
 * Função para resetar os tubos, removendo todas as bolas.
 */
function resetarTubos() {
  tubes.forEach((tube) => {
    while (tube.firstChild) {
      tube.removeChild(tube.firstChild); // Remove todas as bolas do tubo
    }
  });
  console.info('Tubos resetados');
}

/**
 * Função para iniciar o próximo nível.
 * Adicione aqui a lógica para iniciar o próximo nível.
 */
function iniciarProximoNivel() {
  resetarTubos();

  /**
   * Adiciona bolas empilhadas a um tubo.
   * @param {Element} tube - O tubo onde as bolas serão adicionadas.
   * @param {string} color - A cor das bolas.
   * @param {number} numBalls - O número de bolas a serem adicionadas.
   */
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

  // Adicionar bolas ao tube2 manualmente
  const yellowBall = document.createElement('div');
  yellowBall.classList.add('ball', 'yellow-ball');
  yellowBall.setAttribute('data-color', 'yellow');
  yellowBall.style.bottom = '0.1rem'; // Posição no fundo
  tube2.appendChild(yellowBall);
  console.info(`Bola amarela adicionada ao tubo 2: 1`);

  const deeppinkBall = document.createElement('div');
  deeppinkBall.classList.add('ball', 'deeppink-ball');
  deeppinkBall.setAttribute('data-color', 'deeppink');
  deeppinkBall.style.bottom = '3.4rem'; // Posição acima da bola amarela
  tube2.appendChild(deeppinkBall);
  console.info(`Bola rosa adicionada ao tubo 2: 1`);

  // Adicionar bolas nos outros tubos conforme especificado
  addBalls(tube0, 'deeppink', 3);
  addBalls(tube1, 'yellow', 3);

  // Váriávele função selecionarBola(event)
  //     // SelecionarBola é declarado mas seu valor nunca é lido
  //     // Este problema foi porque não foi chamada a função
  //     // E se chamada é irrelevante causa algum tipo de problema
  //     // E talves este trecho não será necessário
  //

  // Função para selecionar uma bola
  // Trecho irrelevante
  //   function selecionarBola(event) {

  //     const target = event.target;

  //     if (selectedBall) {
  //       const corSelecionada = selectedBall.getAttribute('data-color');
  //       const corClicada = target.getAttribute('data-color');

  //       if (corSelecionada !== corClicada) {
  //         selectedBall.style.transform = 'translateY(0)';
  //         selectedBall.classList.remove('flutuando', 'unclickable');
  //         selectedBall = null;

  //         if (!target.classList.contains('unclickable')) {
  //           selectedBall = target;
  //           selectedBall.classList.add('flutuando', 'unclickable');
  //           selectedBall.style.transform = 'translateY(-130px)';
  //         }
  //         return;
  //       }

  //       const tuboDestino = target.parentElement;
  //       if (podeMoverParaTubo(tuboDestino, selectedBall)) {
  //         tuboDestino.appendChild(selectedBall);
  //         selectedBall.style.transform = 'translateY(-1px)';
  //         selectedBall.classList.remove('flutuando', 'unclickable');
  //         selectedBall = null;
  //         console.info('Bola movida para o tubo:', tuboDestino);
  //       } else {
  //         console.error('Não é possível mover a bolinha para o tubo:', tuboDestino);
  //       }
  //       return;
  //     }

  //     if (!target || target.classList.contains('unclickable')) return;
  //     selectedBall = target;
  //     selectedBall.classList.add('flutuando', 'unclickable');
  //     selectedBall.style.transform = 'translateY(-130px)';

  //     console.info('Bola selecionada:', selectedBall);
  //   }

  //     // Função para verificar se a bolinha pode ser movida para o tubo
  // function podeMoverParaTubo(tubo, bola) {
  //   const bolasNoTubo = tubo.querySelectorAll('.ball');
  //   if (bolasNoTubo.length === 0) {
  //     return true; // O tubo está vazio, pode mover
  //   }

  //   const corTopo = bolasNoTubo[bolasNoTubo.length - 1].getAttribute('data-color');
  //   const corBola = bola.getAttribute('data-color');

  //   return corTopo === corBola && bolasNoTubo.length < 4; // A cor é a mesma e há espaço no tubo
  // }
  ////////////////////////////////////////////////////////////////////////////////////

  /**
   * Função para iniciar o jogo.
   */
  function iniciarJogo() {
    tube2.addEventListener(
      'click',
      function () {
        removerIndicacao(tube2);
        selecionarBolaPorCor(tube2, 'deeppink'); // Garantir que a bolinha deeppink flutue
        esconderMensagens('mensagem1');

        tube0.addEventListener(
          'click',
          function () {
            removerIndicacao(tube0);
            moverBola(tube0);
            verificarCompleto(tube0);
            verificarCompletoBefore(tube0);
            esconderMensagens('mensagem2');

            tube2.addEventListener(
              'click',
              function () {
                removerIndicacao(tube2);
                selecionarBolaPorCor(tube2, 'yellow'); // Garantir que a bolinha yellow flutue
                esconderMensagens('mensagem1');

                tube1.addEventListener(
                  'click',
                  function () {
                    removerIndicacao(tube1);
                    moverBola(tube1);
                    verificarCompleto(tube1);
                    verificarCompletoBefore(tube1);
                    esconderMensagens('mensagem3');
                    document.getElementById('mensagem3').style.display = 'none'; // Esconde a mensagem 3
                    verificarGanho(); // Verifica se o jogador completou a tarefa
                    bloquearTodosOsTubos();
                    resetOpacidade();
                  },
                  { once: true }
                );
              },
              { once: true }
            );
          },
          { once: true }
        );
      },
      { once: true }
    );
  }

  // Exemplo:
  iniciarJogo();
  criarConfetes();
  // resetarTubos();
  // gerarNovasBolas();
}

//________________________________________________________________________________
// Código e lógica acima problemática
//
// Funções que precisam entrar sem ter que repetir a lógica - >
// iniciarJogo() ou função, Pois se for ver está se repetindo e chamando
// A mesma função e só aceitou uma nova configuração de cores e bolas
// o que esta funcionando - >
// Função de flutuação das bolas
// Confetes dos tubos quando completos
// Confetes e mensagem de vitória apos completar todos os tubos
// Tirei os chamados de indicação dos tubos
// Escondi as mensagens do conjunto de indicadores
// E desbloqueei todos os tubos
// O que é necessario embaralhamento das bolas nos tubos neste nivel
// Ficando dois tubos com duas cores de bolas de forma embaralhada
// Exemplo: Tube0 -> yellow yellow pink e pink e Tube1 -> pink yellow pink e yellow
// E 1 tubo vazio - > emptyTube
// Primeira Problemática resolvida preciso fazer com que tenha,
// Uma lógica que adicione tubos e bolas já existentes que,
// Ainda não foram usados a partir que acabar os elemntos existentes,
// A lógica comece a criar novos tubos e novas bolas e adicionando ao jogo,
// Conforme passe o nível deixando o jogo assim mais dificil
// E a partir disto a lógica total do jogo fica pronta
// Deixando asssim algumas configurações de botoes
// Como o botão de resetar o nível da mesma forma que iniciou
// Exemplo Nível 2 travou volta o nivel 2 do incio e comece a jogar novamente
// Botão voltar movimentos das bolas
// E por fim botão de adicionar mais um tubo
// Onde vou colocar uma lógica também para deixar mais dificil
// A primeira adição não adicionará o tubo inteiro
// E sim apenas uma capacidade para colocar apenas uma bola
// A segunda adição o tubo aumenta e terá capacidade para duas bolas
// E assim por diante até atingir a capcidade para comportar 4 bolas
// Ainda estou pensando numa limitação de vezes para adição de tubos
// Caso o jogador queira fazer mais adição terá que assistir anuncio para monetizar
// Após todos esses ajustes o jogo estrá completo  e pronto para ser publicado
// E futuramente  posso adicionar mais recursos e melhorias

  /**
   * Função para mudar o background do nível do jogo.
   * @param {string} nivel - O background a ser aplicado.
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

// Função Para Otimizar o Desempenho no carregamento de imagens Lazy-Loading...
document.addEventListener('DOMContentLoaded', function () {
  let lazyBackgrounds = [].slice.call(document.querySelectorAll('.lazy-bg'));

  // Adicione os caminhos das imagens aqui
  let backgroundImages = [
    'Assets/Temas-para-o-Jogo/tema1-peixe-palhaço.jpg',
    'Assets/Icone-de-indicação/indicador.png',
    'Assets/imagens-template-da-home/template-1.webp',
    'Assets/imagens-template-da-home/template-configuracoes.jpg',
    'Assets/Img-Principal/img-de-inicio-do-jogo.jpeg',
  ];

  // Atribui os caminhos das imagens aos elementos com a classe 'lazy-bg'
  lazyBackgrounds.forEach((lazyBackground, index) => {
    lazyBackground.dataset.bg = backgroundImages[index];
  });

  if ('IntersectionObserver' in window) {
    let lazyBackgroundObserver = new IntersectionObserver(function (
      entries,
      observer
    ) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          let lazyBackground = entry.target;
          lazyBackground.style.backgroundImage = `url(${lazyBackground.dataset.bg})`;
          lazyBackground.classList.remove('lazy-bg');
          lazyBackgroundObserver.unobserve(lazyBackground);
        }
      });
    });

    // Observa cada elemento com a classe 'lazy-bg'
    lazyBackgrounds.forEach(function (lazyBackground) {
      lazyBackgroundObserver.observe(lazyBackground);
    });
  } else {
    // Fallback para navegadores que não suportam Intersection Observer
    let lazyLoad = function () {
      lazyBackgrounds.forEach(function (lazyBackground) {
        if (
          lazyBackground.getBoundingClientRect().top < window.innerHeight &&
          lazyBackground.getBoundingClientRect().bottom > 0 &&
          getComputedStyle(lazyBackground).display !== 'none'
        ) {
          lazyBackground.style.backgroundImage = `url(${lazyBackground.dataset.bg})`;
          lazyBackground.classList.remove('lazy-bg');
        }
      });

      if (lazyBackgrounds.length === 0) {
        document.removeEventListener('scroll', lazyLoad);
        window.removeEventListener('resize', lazyLoad);
        window.removeEventListener('orientationchange', lazyLoad);
      }
    };

    document.addEventListener('scroll', lazyLoad);
    window.addEventListener('resize', lazyLoad);
    window.addEventListener('orientationchange', lazyLoad);
  }
});
// FIM....
