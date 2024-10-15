import '../App.css';
import { useEffect } from 'react';


function Principal() {
     useEffect(() => {
          fetch('http://localhost/Gabriel-%20Atlas/php_atlas/Ler_Post.php')
               .then(response => response.text())
               .then(resultado => {
                    // console.log(resultado)
                    const jsonData = `[${resultado.replace(/}{/g, '},{')}]`; // Adiciona vírgulas entre os objetos
                    const parsedData = JSON.parse(jsonData);
                    console.log(parsedData)


               })
               .catch(error => {
                    console.log("ocorreu um erro inesperado" + error);


               })


          

     } for()
     

);

     return (


          <div style={{ display: "flex", justifyContent: "space-between" }}>
               {/* <img style = {{width:"10%"}}src = "https://www.creativefabrica.com/wp-content/uploads/2021/01/26/Cat-Icon-Graphics-8071439-1-1-580x387.jpg"/>
    <img style = {{width:"10%"}}src = "https://www.creativefabrica.com/wp-content/uploads/2021/01/26/Cat-Icon-Graphics-8071439-1-1-580x387.jpg"/>
    <img style = {{width:"10%"}}src = "https://www.creativefabrica.com/wp-content/uploads/2021/01/26/Cat-Icon-Graphics-8071439-1-1-580x387.jpg"/>
     */}

               {/* corpo do texto */}
               <div style={{
                    background
                         : "#1E90FF", width: "100%", height: "100vh"
               }}>


                    {/* aba de menu */}
                    <div style={{
                         background
                              : "black", height: "100vh", width: "8%"
                    }} >a

                    </div>


               </div>
          </div>





     );


}
export default Principal;