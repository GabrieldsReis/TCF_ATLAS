function Cadastro(){
   
    return(
<div>
        <h1>Cadastro </h1><br></br>

        <form action = "http://localhost/Gabriel-%20Atlas/Index.php" method = "POST">
        <label>Nome</label>
        <input type = "text" name="nome"/>

        <label>Idade</label>
        <input type = "text" name="idade"/>

        <label>Email</label>
        <input type = "text" name="email"/>

        <label>Senha</label>
        <input type = "text" name="senha"/>

        <input type = "submit" />
        </form>
     
        </div>
    );
}



export default Cadastro;