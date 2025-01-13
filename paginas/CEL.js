import '../App.css';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import {Link, useNavigate} from "react-router-dom";
 
function CEL() {
    const x = useNavigate();
    useEffect(() => {
        const form = document.getElementById('formulario');

        form.addEventListener('submit', (event) => {
            event.preventDefault()

            const formData = new FormData(form);

            fetch('http://localhost/Gabriel-%20Atlas/php_atlas/Login.php', { method: 'POST', body: formData })
                .then(response => response.text())
                .then(result => { console.log('ok'+result); 
                   if(result === "logado"){
                    x('/Principal');
                   }else {alert("esse usuario nao existe")}
                    
               

                })
                .catch(error => { console.log('ocorreu um erro esperado' + error); });




        });
    }


);




    return (
        <div>
      <Helmet>
        <title>Login Atlas</title>
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
       
        <h3>É bom ter você de volta!</h3>

        <label htmlFor="username">Username</label>
        <input name="email" type="text" placeholder="Email" id="username" />

        <label htmlFor="password">Senha</label>
        <input name="senha" type="password" placeholder="Password" id="password" />
        <br/>
      <div>
        <button class="loginbutton" type="submit">Login</button>
        <br/><br/>
        <Link id = "link" to="/cadastro">Cadastre-se</Link>
        </div>

        <div className="social">
          <div className="go">
            <i className="fab fa-google"></i> Google
          </div>
        </div>
      </form>

      
    </div>
  );
}

export default CEL;