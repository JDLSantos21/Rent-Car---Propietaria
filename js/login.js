
fetch("views/consultaLogin.php")
.then(res => res.json())
.then(datos => {

  console.log(datos);

  const usuario = document.getElementById("user");
  const password = document.getElementById("pass");
  const buttonLogin = document.getElementById("button-login")
  const errorAlert = document.getElementById("alert")

    buttonLogin.addEventListener('click',()=>{
      for (const cuenta of datos) {
        if(usuario.value === cuenta.user && password.value === cuenta.password){
          window.location.href="index.html"
          }
      }
      
     })
  
  

 
})
