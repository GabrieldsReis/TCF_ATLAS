import { useState, useEffect } from 'react';
import './Principal.css'; // Verifique se a folha de estilo está importada corretamente
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';

function Principal() {
  // Estado para controlar a visibilidade do formulário
  const [showPostForm, setShowPostForm] = useState(false);

  // Estado para controlar a visibilidade da aba lateral
  const [isAbaLateralVisible, setIsAbaLateralVisible] = useState(false);

  // Função para alternar a visibilidade do formulário
  const togglePostForm = () => {
    setShowPostForm(prevState => !prevState);
  };

  // Função para alternar a visibilidade da aba lateral
  const toggleAbaLateral = () => {
    setIsAbaLateralVisible(prevState => !prevState);
  };

  // Função que processa os posts
  useEffect(() => {
    fetch('http://localhost/Gabriel-%20Atlas/php_atlas/Ler_Posts.php')
      .then(response => response.json())
      .then(resultado => {
        Cards(resultado);
      })
      .catch(error => {
        console.log("Ocorreu um erro inesperado: " + error);
      });
  }, []);

  function Cards(posts) {
    if (!Array.isArray(posts)) {
      console.error("Posts não são um array válido");
      return;
    }

    let tamanho = posts.length;
    var feed = $('#feed');
    var Inicio = $('#Inicio');

    for (let i = 0; i <= tamanho; i++) {
      let clone = Inicio.clone();
      clone.find('#Oteste').attr('src', 'http://localhost/Gabriel-%20Atlas/php_atlas/' + posts[i].Imagem);
      clone.find('#ImagemPost').attr('src', 'http://localhost/Gabriel-%20Atlas/php_atlas/' + posts[i].Imagem);
      clone.find('.descricao-postagem').text(posts[i].Texto);
      clone.find('.post-username').text(posts[i].Id);
      feed.append(clone);
      clone.css('display', 'block');
    }
  }

  return (
    <div id="site">
      {/* Menu Superior */}
      <div href="#" className="menu-superior">
        <button id="toggle-aba" onClick={toggleAbaLateral}>
          {isAbaLateralVisible ? '#' : '#'}
        </button>
        <div id="perfis-pai">
          {/* Imagens de perfis */}
          <img className="perfis" src="https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2023/07/17/1250579066-i764852.png" alt="Perfil 1" />
          <img className="perfis" src="https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2023/07/17/1250579066-i764852.png" alt="Perfil 2" />
          <img className="perfis" src="https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2023/07/17/1250579066-i764852.png" alt="Perfil 3" />
          <img className="perfis" src="https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2023/07/17/1250579066-i764852.png" alt="Perfil 4" />
          <img className="perfis" src="https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2023/07/17/1250579066-i764852.png" alt="Perfil 5" />
        </div>
      </div>

      {/* Menu Lateral */}
      <div className={`aba-lateral ${isAbaLateralVisible ? 'show' : 'hide'}`}>
        <div className="menu-lateral">
          <a id="imgs" href="#">🏠 Home</a>
          <a id="imgs" href="#">🔍 Busca</a>
          <a id="imgs" href="#">❤️ Favoritos</a>
          <a id="imgs" href="#">👤 Perfil</a>
          <a id="imgs" href="#">⚙️ Configurações</a>
        </div>
      </div>

      {/* Feed de Postagens */}
      <div id="feed" className="feed">
        {/* Botão para exibir ou esconder o formulário */}
        <button id="tt" onClick={togglePostForm}>
          {showPostForm ? 'voltar' : 'Postar'}
        </button>

        {/* Formulário de Postagem */}
        {showPostForm && (
          <form id="postar" action="http://localhost/Gabriel-%20Atlas/php_atlas/Postagens.php" method="POST" encType="multipart/form-data">
            <div style={{ display: 'flex' }}>
              <img id="usuario11" className="post-profile" src="https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2023/07/17/1250579066-i764852.png" alt="Post profile" />
              <input placeholder="O que está acontecendo?" type="text" id="fname" name="texto" />
            </div>

            <input type="file" name="fileUpload" />
            <br />
            <button id="obotao" name="arquivo" type="submit">Postar</button>
          </form>
        )}

        {/* Postagens */}
        <div id="Inicio" className="postagem">
          <div className="post-header">
            <img className="post-profile" id="Oteste" src="https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2023/07/17/1250579066-i764852.png" alt="Post profile" />
            <span className="post-username" id='test1'>Usuário 1</span>
          </div>
          <img className="imagem-postagem" id="ImagemPost" src="https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2023/07/17/1250579066-i764852.png" alt="Post 1" />
          <p className="descricao-postagem">Descrição da postagem aqui</p>
        </div>
        <div id="Inicio" className="postagem">
          <div className="post-header">
            <img className="post-profile" src="https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2023/07/17/1250579066-i764852.png" alt="Post profile" />
            <span className="post-username">Usuário 2</span>
          </div>
          <img className="imagem-postagem" src="https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2023/07/17/1250579066-i764852.png" alt="Post 2" />
          <p className="descricao-postagem">Outra descrição aqui</p>
        </div>
      </div>
    </div>
  );
}

export default Principal;
