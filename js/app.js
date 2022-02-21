fetch("views/consulta.php")
.then(res => res.json())    //Sacando los datos de la Base de Datos y Convirtiendolo en .JSON
.then(data => {
  console.log(data);

  const tBody = document.getElementById("CV-tbody");
  const CViContainer = document.getElementById("CV-imagen_container");
  const verButton = document.getElementsByClassName('button-show_info');
  const cvInfoLogo = document.getElementById('CV-info_logo');
  const cvInfoTitle = document.getElementById('CV-info_title');
  const cvInfoDetailsTipo = document.getElementById("CV-info_details__tipo");
  const cvInfoDetailsChasis = document.getElementById("CV-info_details__chasis");   //Declaracion de los Elementos.
  const cvInfoDetailsMotor = document.getElementById("CV-info_details__motor");
  const cvInfoFuelText = document.getElementById("CV-info_fuel__text");
  const cvInfoStatusContainer = document.getElementById("status-text-container");
  const cvInfoStatusText = document.getElementById("CV-info_status__text");
  const cvInfoDesText = document.getElementById("CV-info_description__text");

    let str ='';
  
  data.map(item =>{
  
      str += `
        <tr>
            <td id='${item.Placa}'>${item.ID}</td>
            <td>${item.Marca.toUpperCase()}</td>
            <td>${item.Modelo.toUpperCase()}</td>
            <td>${item.Year}</td>
            <td>${item.Placa.toUpperCase()}</td>
            <td>${(item.Estado == 1) ? '<span class="DisponibleCV">Disponible</span>' : '<span class="NoDisponibleCV">No Disponible</span>'}</td>
            <td> <button class="button-show_info" id="${item.Placa}">Ver</button> </td>
        <tr>
            `          
          tBody.innerHTML = str;    
  })

  function showInfo(ide) { //Funcion colocar datos de los vehiculos en la Consulta.

  this.id = ide;

  for (const vehiculo of data) {
  
    let placa = ide;
    if(vehiculo.Placa == placa){
      console.log(vehiculo);
      cvInfoLogo.src = `source/images/logos/${vehiculo.Marca}.png`;
      cvInfoTitle.textContent = `${vehiculo.Marca.toUpperCase()} ${vehiculo.Modelo.toUpperCase()} ${vehiculo.Year}`;
      //Cuadro detalles
      cvInfoDetailsTipo.textContent = `${vehiculo.Tipo}`;
      cvInfoDetailsChasis.textContent = `${vehiculo.Chasis}`;
      cvInfoDetailsMotor.textContent = `${vehiculo.Motor}`;
      //Cuadro Tipo Combustible
      cvInfoFuelText.textContent = `${vehiculo.Tcombustible}`;
      //Cuadro Estado
      if(vehiculo.Estado == 1){
        cvInfoStatusText.textContent = `DISPONIBLE`;
        cvInfoStatusContainer.style.backgroundColor = 'rgb(54, 199, 54)';
      }else{
        cvInfoStatusText.textContent = `NO DISPONIBLE`
        cvInfoStatusContainer.style.backgroundColor = '#FE1E1E';
      }
      //Cuadro Descripcion
      cvInfoDesText.textContent = `${vehiculo.Descripcion}`;

    }
  }

  let imgSRC = `source/images/${ide}.png`; //Ubicacion de la imagen del vehiculo.
  let imagenEX = `<img src="${imgSRC}" class="CV-imagen">`;

  CViContainer.innerHTML = imagenEX; //Mandando la imagen al DOM.
    
  }
  
  //For para identifcar el boton pulsado y tomar su ID.

  for(let i = 0; i <verButton.length; i++){
    verButton[i].addEventListener('click',()=>{
      let buttonID = verButton[i].id;
      let Eleid = buttonID;
      showInfo(Eleid);
    });

  }

 



  
  // function showCarInfo(placa){     //declaracion funcion para poner datos

  //   let imagenEX = `<img src="${imgSRC}" class="CV-imagen">`;

  //   CViContainer.innerHTML = imagenEX;

  // }

  // showCarInfo();    //ejecutando la funcion de la info
  //let imgSRC = `source/images/${item.placa}.png`;

  // verButton.addEventListener('click',()=>{
  //   alert('mmg');
  // })

  // let placas = [];

  // for (const vehiculo of data) {

  //   placas.push(vehiculo.placa);
    
  // }

  // function showInfo(placa){

  //   this.placa = placa;

  //   let imgSRC = `source/images/${placa}.png`;

  //   console.log()
  // }
  
  // console.log(showInfo());


  // buttonCV.addEventListener("click",(showCV));



})

