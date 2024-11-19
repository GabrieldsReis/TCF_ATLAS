import{useEffect} from 'react'

function Postagens() {











    
// useEffect(()=>{

// const form = document.querySelector("#postar");
//     form.addEventListener('submit',(event) => {
//         event.preventDefault();

//             const FormData = new FormData(form);

//             fetch('http://localhost/Gabriel-%20Atlas/php_atlas/Cadastro_postagens.php')
//             .then(response => response.text())
//             .then(result => {console.log(result);})
//             .catch(error => {console.log("ocorreu um erro" + error);});
            


//     })









// })










return(
    <div>
    <h1> Postagens</h1>
<form id ="postar" action ="http://localhost/Gabriel-%20Atlas/php_atlas/Postagens.php" method ="POST" enctype ="multipart/form-data">
<input type="file" name="fileUploud"></input><br/>
<textarea name="texto"></textarea><br/>
<button name="arquivo" type="submit" ></button>
</form>
</div>
)








}

export default Postagens;