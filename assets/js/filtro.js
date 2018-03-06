var campoBusca = document.querySelector('#busca-personagem');

campoBusca.addEventListener("input", function() {
  var personagens = document.querySelectorAll('.personagem');
    if (this.value.length > 0) {
      for (var i = 0; i < personagens.length; i++) {
        var personagem = personagens[i];
        var tdNome = personagem.querySelector('.td-nome');
        var nome = tdNome.querySelector('.nome').textContent;
        var regExp = new RegExp(this.value,'i');

        if (!regExp.test(nome)) {
          personagem.classList.add('removido');
        } else {
          personagem.classList.remove('removido');
        }
      }
    } else {
      for (var i = 0; i < personagens.length; i++) {
          var personagem = personagens[i];
          personagem.classList.remove('removido');
      }
    }
});
