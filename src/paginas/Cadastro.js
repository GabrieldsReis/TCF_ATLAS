import './Cadastro.css'
import {useEffect} from 'react';
import {useNavigate} from "react-router-dom";

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
            <h1 id="title">Cadastro </h1><br></br>

            <form id="formulario" action="http://localhost/Gabriel-%20Atlas/php_atlas/Cadastro.php" method="POST">
                <label>Nome</label>
                <input type="text" name="nome" />

                <label>Idade</label>
                <input type="text" name="idade" />

                <label>Email</label>
                <input type="text" name="email" />

                <label>Senha</label>
                <input type="text" name="senha" />

                <input type="submit" />
            </form>

        </div>
    );
}



export default Cadastro;