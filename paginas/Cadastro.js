import './Cadastro.css';
import {useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import { Helmet } from 'react-helmet';



function Cadastro() {
    const x = useNavigate();
    useEffect(() => {
        const form = document.getElementById('formulario');

        form.addEventListener('submit', (event) => {
            event.preventDefault(); //impede o envio normal do formulario,sem mostrar o php pro usuario

            const formData = new FormData(form); //cria um formData com os dados do usuario


            //fetch é um api de requisição
            fetch('http://localhost/Gabriel-%20Atlas/php_atlas/Cadastro.php', { method: 'POST', body: formData })
                .then(response => response.text())//le a resposta como texto
                .then(result => { console.log(result);
                    if(result === "Cadastro Concluido"){
                        x('/');
                    }else {
                        
                        alert("cadastro nao concluido")
                    }
                 })
                .catch(error => { console.log('Ocorreu um erro inesperado:' + error); });
                
                

        });

    });


    return (
       

      <div>
      <Helmet>
        <title>Cadastro Atlas</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;600&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      
      <form
        id="formulario"
        action="http://localhost/Gabriel-%20Atlas/php_atlas/Login.php"
        method="POST"
      >
       
        <h3>Seja bem vindo !</h3>

        <label htmlFor="username">Username</label>
        <input type="text" placeholder="Email" id="username" />

        <label htmlFor="password">Senha</label>
        <input type="password" placeholder="Password" id="password" />
        <br/>
      <div>
        <button id="cadas"type="submit">Cadastrar</button>
        <br/><br/>
        
        </div>

        <div className="social">
          <div className="go">
            <i className="fab fa-google"></i> Google
          </div>
        </div>
      </form>

      
    </div>
  );
};



export default Cadastro;