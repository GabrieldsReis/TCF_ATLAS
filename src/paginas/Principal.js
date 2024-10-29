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
          
         var feed = $('feed');
       

          for(let i= 0;i<tamanho;i++){
               console.log(posts[i]);
          var postagens = document.createElement("div");
          var imagem = document.createElement("img");
          imagem.src = "https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2023/07/17/1250579066-i764852.png"
          postagens.appendChild(imagem);
          feed.appendChild(postagens);
          }


       
     }
     



     return (
<div>
<div class="menu-superior">
        <i className="fa-brands fa-instagram"></i>
        <div id="perfis-pai">
            <img className="perfis" src   ="https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2023/07/17/1250579066-i764852.png"/>
            <img className="perfis" src   ="https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2023/07/17/1250579066-i764852.png"/>
            <img className="perfis" src   ="https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2023/07/17/1250579066-i764852.png"/>
            <img className="perfis" src   ="https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2023/07/17/1250579066-i764852.png"/>
            <img className="perfis" src  ="https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2023/07/17/1250579066-i764852.png"/>
            <img className="perfis" src  ="https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2023/07/17/1250579066-i764852.png" />
        </div>
       
    </div>

    
    <div className="container">
        
        <div className="aba-lateral">
            <div className="menu-lateral">
                <a id="imgs">🏠</a>
                <a id="imgs">🔍</a>
                <a id="imgs">❤️</a>
                <a id="imgs">👤</a>
                <a id="imgs">⚙️</a>
            </div>
        </div>

     
        <div id="feed" className="feed">
            <div id = "Postagens">
<img style ={{height:"100px"}} 
src="https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2023/07/17/1250579066-i764852.png"></img>
<p>aaa</p>
            </div>
            
        </div>
    </div>
    </div>


     );


}
export default Principal;