
// fetch("views/consultaLogin.php")
// .then(res => res.json())
// .then(datos => {

//   console.log(datos);

   const usuario = document.getElementById("user");
   const password = document.getElementById("pass");
   const buttonLogin = document.getElementById("button-login")
   const errorAlert = document.getElementById("alert")
   const iconUser = document.getElementById("icon-user");
   const iconPass = document.getElementById("icon-pass");

//     buttonLogin.addEventListener('click',()=>{
//       for (const cuenta of datos) {
//         if(usuario.value === cuenta.user && password.value === cuenta.password){
//           window.location.href="index.html"
//           }
//       }
      
//      })
// })


usuario.addEventListener('focusin',()=>{
  usuario.classList.add('focus');
  iconUser.classList.add('focus-icon');
})

usuario.addEventListener('focusout',()=>{
  usuario.classList.remove('focus');
  iconUser.classList.remove('focus-icon');
})

password.addEventListener('focusin',()=>{
  password.classList.add('focus');
  iconPass.classList.add('focus-icon');
})

password.addEventListener('focusout',()=>{
  password.classList.remove('focus');
  iconPass.classList.remove('focus-icon');
})


