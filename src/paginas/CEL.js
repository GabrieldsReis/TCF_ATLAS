import logo from '../logo.svg';
import '../App.css';
import { useEffect } from 'react';
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
                .then(result => { console.log(result); 
                   if(result === "logado"){
                       x('/Principal');
                   }else {alert("esse usuario nao existe")}
                    
                // useNavigate("/Principal");

                })
                .catch(error => { console.log('ocorreu um erro esperado' + error); });

        });
    });




    return (
        <div>
            <form id="formulario" action="http://localhost/Gabriel-%20Atlas/php_atlas/Login.php" method="POST">
                <h1>Login</h1><br></br>

                <label>Email</label>
                <input type="text" name="email" />

                <label>Senha</label>
                <input type="text" name="senha" />

                <input type="submit"></input>
            </form>
        <Link to = "/cadastro">Cadastre-se </Link>
        </div>
    );
}

export default CEL;