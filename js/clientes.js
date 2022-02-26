fetch("views/consultaCliente.php")
.then(res => res.json())    //Sacando los datos de la Base de Datos y Convirtiendolo en .JSON
.then(data => {

  const tr = document.getElementById('tr');
  const tBody = document.getElementById('cListtBody');
  const topName = document.getElementById('topName');
  const topFecha = document.getElementById('topFecha');
  const topFoto = document.getElementById('topFoto');
  const nacionalidad = document.getElementById('nacionalidad');
  const cedOPast = document.getElementById('cedOPast');
  const typePersona = document.getElementById('tPersona');
  const lmtCredito = document.getElementById('ltCredito');
  const estado = document.getElementById('estado');
  const verButton = document.getElementsByClassName('clientes--listado-button');

    let str ='';
  
  data.map(item =>{
  
      str += `
        <td class = "td">
          <div class="cliente--photo">
            <img class="cliente--photo--img" src="source/images/clientes/fotosPerfil/${item.Cedula}.${item.Extension}">
          </div>
          <h5 class="clientes--listado-name">${item.Nombre} ${item.Apellidos}</h5>

          <button class="clientes--listado-button" id="${item.Cedula}"><i class="fa-solid fa-eye"></i></button>
        </td>
            `          
          tBody.innerHTML = str;    
  })

  function showInfo(ide) { //Funcion colocar datos De los Clientes en el cuadro.

  this.id = ide;

  for (const cliente of data) {
  
    let cedula = ide;
    if(cliente.Cedula == cedula){
      //Primer Cuadro
      topFoto.src = `source/images/clientes/fotosPerfil/${cliente.Cedula}.${cliente.Extension}`;
      topName.textContent = `${cliente.Nombre} ${cliente.Apellidos}`;
      topFecha.textContent = `${cliente.Fecha}`;
      //Cuadro Informacion Cliente
      nacionalidad.textContent = `Dominicano`;
      cedOPast.textContent = `${cliente.Cedula}`;
      typePersona.textContent = `${cliente.Tpersona}`;
      lmtCredito.textContent = `${cliente.LtCredito}`;

      if(cliente.Estado == 1){
        estado.textContent = `Activo`;
        estado.style.color = 'rgb(54, 199, 54)';
      }else{
        estado.textContent = `Inactivo`
        estado.style.color = '#FE1E1E';
      }

    }
  }
    
  }
  
  //For para identifcar el boton pulsado y tomar su ID.

  for(let i = 0; i <verButton.length; i++){
    verButton[i].addEventListener('click',()=>{
      let buttonID = verButton[i].id;
      let Eleid = buttonID;
      showInfo(Eleid);
    });

  }


})

