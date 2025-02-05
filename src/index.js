//import React from 'react';
import ReactDOM from 'react-dom/client'; // biblioteca de gerenciamento de rotas
import { BrowserRouter, Routes, Route } from "react-router-dom"; //BrowserRouter é a rota do site ao navegador
// import reportWebVitals from './reportWebVitals';
import CEL from './paginas/CEL.js';//sao as paginas para cada rota
//import NoPage from "./NoPage.js";
import Cadastro from "./paginas/Cadastro.js"
import Principal from "./paginas/Principal.js"
import Postagens from "./paginas/Postagens.js"
import Mensagem from './paginas/Mensagem.js';
import Usuarios from './paginas/usuarios.js';
export default function App()  { //exporta a funcao ao abrir o site
    return (
        <BrowserRouter>
            <Routes>
                {/* <Route path="/" element={<Paginas />}> */}
                    <Route index element={<CEL />} />  {/* rota inicial */}
                    <Route path="/cadastro" element={<Cadastro/>} /> 
                    <Route path="/Mensagem" element={<Mensagem/>} /> 
                    <Route path="/Principal" element={<Principal/>}/>
                    <Route path="/usuarios" element={<Usuarios/>}/>
                    <Route path="/Postagens" element={<Postagens/>}/>
                {/* </Route> */}
            </Routes>
        </BrowserRouter>

        // <Cadastro/>
        //    <Principal/>
        // <CEL/> 
    );




}






const root = ReactDOM.createRoot(document.getElementById('root')); // pega a div root e renderiza no "App"
root.render(<App/>)
    ;


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

