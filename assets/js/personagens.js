// Criando personagem
function criaPersonagem(personagem) {
  // Criando os blocos de personagens.
  var personagemTr = document.createElement('tr');
  personagemTr.classList.add('personagem');

  // Criando tabelas, adicionando classes e listas dos itens.
  var nomeTd = document.createElement('td');
  nomeTd.classList.add('td-nome');
  var seriesTd = document.createElement('td');
  seriesTd.classList.add('td-series');
  var serieslista = document.createElement('ul');
  var eventosTd = document.createElement('td');
  eventosTd.classList.add('td-eventos');
  var eventoslista = document.createElement('ul');

  // Call da function
  adicionaItens(eventoslista, personagem.events.items);
  adicionaItens(serieslista, personagem.series.items);

  // Realizando append nos elementos
  var personagemThumbnail = personagem.thumbnail.path + '/standard_xlarge.jpg';

  nomeTd.innerHTML = '<div class="avatar-personagem"><img src="'+ personagemThumbnail +'" alt="'+ personagem.name +'" /></div><p class="nome">'+ personagem.name +'</p>';
  eventosTd.appendChild(eventoslista);
  seriesTd.appendChild(serieslista);

  personagemTr.appendChild(nomeTd);
  personagemTr.appendChild(seriesTd);
  personagemTr.appendChild(eventosTd);

  return personagemTr;
}

// Adicionando Itens nas Listas, tais como series e eventos
function adicionaItens(lista, conteudo) {
  for (var i in conteudo) {
    if (i <= 2) {
      var itemlista = document.createElement('li');
        itemlista.textContent = conteudo[i].name;
        lista.appendChild(itemlista);
        // console.log(conteudo[i].name);
    }
  }
}

function adicionaPersonagemNaTabela(personagem) {
    var personagemTr = criaPersonagem(personagem);
    var tabelaPersonagens = document.querySelector("#tabela-personagens");
    // Adicionando personagem na tabela
    tabelaPersonagens.appendChild(personagemTr);
}
