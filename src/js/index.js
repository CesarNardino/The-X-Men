// pegar os personagens no JS pra poder verificar QUANDO o usuário passar o mouse por cima de um deles;
const theX_Men = document.querySelectorAll('.x-men'); //Busca todos os itens com a classe "x-men" no "document"

theX_Men.forEach(x_Men => {
    x_Men.addEventListener('mouseenter', () => {

        if(window.innerWidth < 450) {
            window.scrollTo({top: 0, behavior: 'smooth'});
        }

        // verificar se JÁ EXISTE um personagem selecionado. Caso exista, remover a seleção dele;
        removerSelecaoPersonagem();

        // ADICIONAR a classe "selecionado" no personagem que o usuário passar o mouse em cima;
        x_Men.classList.add('selecionado');
    })

    x_Men.addEventListener('click', () => {

        // pegar o elemento do PERSONAGEM GRANDE pra adicionar as informações nele;
        alterarImagemPersonagemSelecionado(x_Men);

        // alterar o nome do personagem grande;
        alterarNomePersonagemSelecionado(x_Men);

        // alterar a descrição do personagem grande
        alterarDescricaoPersonagemSelecionado(x_Men);
    })
})

function alterarDescricaoPersonagemSelecionado(x_Men) {
    const descricaoPersonagem = document.getElementById('descricao-personagem');
    descricaoPersonagem.innerText = x_Men.getAttribute('data-description');
}

function alterarNomePersonagemSelecionado(x_Men) {
    const nomePersonagem = document.getElementById('nome-personagem');
    nomePersonagem.innerText = x_Men.getAttribute('data-name');
}

function alterarImagemPersonagemSelecionado(x_Men) {
    const imagemPersonagemGrande = document.querySelector('.personagem-grande');
    // alterar a imagem do personagem grande;
    const idX_Men = x_Men.attributes.id.value;
    imagemPersonagemGrande.src = `./src/imagens/card-${idX_Men}.png`;
}

function removerSelecaoPersonagem() {
    const x_MenSelecionado = document.querySelector('.selecionado');
    x_MenSelecionado.classList.remove('selecionado');
}
