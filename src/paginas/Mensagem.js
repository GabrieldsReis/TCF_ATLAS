import React, { useState } from 'react';
import './Mensagem.css';
import {useEffect} from 'react';
import {useNavigate} from "react-router-dom";

function Mensagem() {
  const x = useNavigate();
  useEffect(() => {
      const form = document.getElementById('form');

      form.addEventListener('submit', (event) => {
          event.preventDefault(); //impede o envio normal do formulario,sem mostrar o php pro usuario

          const formData = new FormData(form); //cria um formData com os dados do usuario


          //fetch é um api de requisição
          fetch('http://localhost/Gabriel-%20Atlas/php_atlas/Mensagens.php', { method: 'POST', body: formData })
              .then(response => response.text())//le a resposta como texto
              .then(result => { console.log(result);
                console.log("OK"+result);  
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
    <div className="mensagens-container">
      
      <div className="input-container">
        <form id="form">
          <input type="text" name="Remetente"></input>
          <input type="text" name="Destinatario"></input>
        {/* Campo de texto para o usuário digitar a mensagem */}
        <textarea
        name="Mensagem"
     
          placeholder="Digite sua mensagem..."
        />

        {/* Botão de envio */}
        <button  >Enviar</button>
    </form>
      </div>
    </div>

  );
}

export default Mensagem;
