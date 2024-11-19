import './Principal.css';
import { useEffect } from 'react';
import $ from 'jquery';


function Principal() {
     useEffect(() => {
          fetch('http://localhost/Gabriel-%20Atlas/php_atlas/Ler_Post.php')
               .then(response => response.text())
               .then(resultado => {
                    // console.log(resultado)
                    const jsonData = `[${resultado.replace(/}{/g, '},{')}]`; // Adiciona vírgulas entre os objetos
                    const parsedData = JSON.parse(jsonData);
                   a(parsedData);


               })
               .catch(error => {
                    console.log("ocorreu um erro inesperado" + error);


               })




     });
     
     function a(posts){
          let tamanho = posts.length;
          
         var feed = $('#feed');
       var Inicio = $('#Inicio');

          for(let i= 0;i<10;i++){
               console.log(posts[i]);

        //   var postagens = document.createElement("div");
        //   var imagem = document.createElement("img");
        //   imagem.src = "https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2023/07/17/1250579066-i764852.png"
        //   postagens.appendChild();
          feed.appendChild(Inicio.cloneNode(true));
          }


       
     }

     function b(){
        
       var feed = $('#feed');
     var Inicio = $('#Inicio');
     var clone = Inicio.clone(true)
     clone.find('#test1').html('Nome do post')
console.log(feed);
        for(let i= 0;i<10;i++){

        feed.append(clone);
        }


     
   }
     



     return (
        <div>
          {/* Menu Superior */}
          <div className="menu-superior">
            <i className="fa-brands fa-instagram logo"></i>
            <div id="perfis-pai">
              {/* Imagens de perfis */}
              <img className="perfis" src="https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2023/07/17/1250579066-i764852.png" alt="Perfil 1" />
              <img className="perfis" src="https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2023/07/17/1250579066-i764852.png" alt="Perfil 2" />
              <img className="perfis" src="https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2023/07/17/1250579066-i764852.png" alt="Perfil 3" />
              <img className="perfis" src="https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2023/07/17/1250579066-i764852.png" alt="Perfil 4" />
              <img className="perfis" src="https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2023/07/17/1250579066-i764852.png" alt="Perfil 5" />
            </div>
          </div>
    
          {/* Container Principal */}
          <div className="container">
            {/* Menu Lateral */}
            <div className="aba-lateral">
              <div className="menu-lateral">
                <a id="imgs" href="#">🏠</a>
                <a id="imgs" href="#">🔍</a>
                <a id="imgs" href="#">❤️</a>
                <a id="imgs" href="#">👤</a>
                <a id="imgs" href="#">⚙️</a>
              </div>
            </div>
    
            {/* Feed de Postagens */}
            <button onClick={b}>Adcionar</button>
            <div id="feed" className="feed">
              <div id="Inicio"className="postagem">
                <div className="post-header">
                  <img className="post-profile" src="https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2023/07/17/1250579066-i764852.png" alt="Post profile" />
                  <span className="post-username" id='test1'>Usuário 1</span>
                </div>
                <img className="imagem-postagem" src="https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2023/07/17/1250579066-i764852.png" alt="Post 1" />
                <p className="descricao-postagem">Descrição da postagem aqui</p>
              </div>
              <div className="postagem">
                <div className="post-header">
                  <img className="post-profile" src="https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2023/07/17/1250579066-i764852.png" alt="Post profile" />
                  <span className="post-username">Usuário 2</span>
                </div>
                <img className="imagem-postagem" src="https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2023/07/17/1250579066-i764852.png" alt="Post 2" />
                <p className="descricao-postagem">Outra descrição aqui</p>
              </div>
            </div>
          </div>
        </div>
      );
    }
export default Principal;