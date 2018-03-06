var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://gateway.marvel.com:443/v1/public/characters?series=9085&apikey=05ebd1d5d75cd03c4432667a437dc224');

xhr.addEventListener('load', function() {
  if ( xhr.status == 200) {
    var resposta = xhr.responseText;
    var personagensList = JSON.parse(resposta);
    var personagens = personagensList.data.results;

    personagens.forEach( function(personagem) {
      console.log(personagem);
      adicionaPersonagemNaTabela(personagem);
    });
  } else {
    console.log( xhr.status);
    console.log( xhr.responseText);
    var erroAjax = document.querySelector("#erro-busca");
    erroAjax.classList.remove('invisivel');
  }
});

xhr.send();
