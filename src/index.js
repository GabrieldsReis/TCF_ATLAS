import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';
import CEL from './paginas/CEL.js';
import NoPage from "./NoPage.js";
import Cadastro from "./paginas/Cadastro.js"

export default function App() {
    return (
        // <BrowserRouter>
        //     <Routes>
        //         <Route path="/" element={<Cel />}>
        //             <Route index element={<NoPage />} />
        //             <Route path="/cadastro" element={<Cadastro />} />
        //         </Route>
        //     </Routes>
        // </BrowserRouter>

   // <Cadastro/>
   <CEL/>
    );




}






const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />)
    ;


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
