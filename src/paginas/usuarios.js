import { useState, useEffect } from 'react';
import './Principal.css'; // Verifique se a folha de estilo está importada corretamente
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';

let buscar = '';

function Usuarios() {
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

  function Filtro(){
    

    useEffect(() => {
      fetch('http://localhost/Gabriel-%20Atlas/php_atlas/Ler_Usuarios.php')
        .then(response => response.json())
        .then(resultado => {
          Cards(resultado);
        })
        .catch(error => {
          console.log("Ocorreu um erro inesperado: " + error);
        });
    }, []);
  }
  Filtro()
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
     
      clone.find('#ImagemPost').attr('src', 'https://static.vecteezy.com/system/resources/previews/000/550/731/original/user-icon-vector.jpg' );
      clone.find('.descricao-postagem').text(posts[i].Nome);
  
      clone.find('.post-username').text(posts[i].Nome);
      feed.append(clone);
      clone.css('display', 'block');
    }
  }

  return (
    <div id="site">
      {/* Menu Superior */}
      <div href="#" className="menu-superior">
        {/* <button id="toggle-aba" onClick={toggleAbaLateral}>
          {isAbaLateralVisible ? '#' : '#'}
        </button> */}
        <div id="aba-superior">
          {/* Imagens de perfis */}
          <img className="perfis" src="https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2023/07/17/1250579066-i764852.png" alt="Perfil 1" />

        </div>
      </div>

      {/* Menu Lateral */}
      <div className={`aba-lateral ${isAbaLateralVisible ? 'show' : 'hide'}`}>
        <div className="menu-lateral">
          <button id="toggleBotton" onClick={toggleAbaLateral}>
            {isAbaLateralVisible ? '>' : '<'}
          </button>
          <div class="usuario">

            <img className="post-profile" id="perfil" src="https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2023/07/17/1250579066-i764852.png" alt="Post profile" />
            <p>Nome do usuario</p>
          </div>
          <div class="listinha">
            <hr id="hr"></hr>
            <a id="imgs" href="#">🔍 Busca</a>
            <a id="imgs" href="#">❤️ Favoritos</a>
            <a id="imgs" href="#">👤 Perfil</a>
            <a id="imgs" href="#">⚙️ Configurações</a>
            <a id="imgs" href="http://localhost:3000/Mensagem">📢 Mensagens</a>
          </div>
        </div>
      </div>

      {/* Feed de Postagens */}
      <div id="feed" className="feed">
        {/* Botão para exibir ou esconder o formulário */}
        <button id="tt" onClick={togglePostForm}>
          {showPostForm ? 'voltar' : 'Postar'}
        </button>

        {/* Formulário de Postagem */}
      
        <input type="text" id="buscar" value={buscar} onChange={Filtro()}></input>

        {/* Postagens */}
        <div id="Inicio" className="postagem">
          <div className="post-header">
           
     
          </div>
          <img className="imagem-postagem" id="ImagemPost" src="https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2023/07/17/1250579066-i764852.png" alt="Post 1" />
          <p className="descricao-postagem">Descrição da postagem aqui</p>
        
        </div>
        
      </div>
    </div>
  );
}

export default Usuarios;
