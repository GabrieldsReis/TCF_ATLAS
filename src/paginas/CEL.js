import logo from '../logo.svg';
import '../App.css';
import {Outlet, Link} from 'react-router-dom';

function CEL(){
    return(
<div>
        <h1>Login</h1><br></br>
        <label>Usuario</label>
        <input type = "text"/>
        <label>Senha</label>
        <input type = "text"/>
        <button onclick = "Lbotao">botao</button>

       
        </div>
    );
}

export default CEL;