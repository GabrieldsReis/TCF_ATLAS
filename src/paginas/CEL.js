import logo from '../logo.svg';
import '../App.css';
import { useEffect } from 'react';

function CEL() {
    // useEffect(() => {
    //     const form = document.getElementById('formulario');

    //     form.addEventListener('submit', (event) => {
    //         event.preventDefault()

    //         const formData = new FormData(form);

    //         fetch('http://localhost/Gabriel-%20Atlas/php_atlas/CEL.php', { method: 'POST', body: formData })
    //             .then(response => response.text())
    //             .then(result => { console.log(result); })
    //             .catch(error => { console.log('ocorreu um erro un esperado' + error); });
    //         window.location.ref = "" //pagina inicial do app

    //     });
    // });




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

        </div>
    );
}

export default CEL;