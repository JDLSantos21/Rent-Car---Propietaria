fetch("views/consulta.php")
.then(res => res.json())
.then(data => {

  const avCars = document.getElementById("AT_avCars");
  const regCars = document.getElementById("AT_regCars");
  const rtCars = document.getElementById("AT_rtCars");
  console.log(data);

  //For para contar vehiculos. =

  let sumVehiculos = 0,sumDisponibles = 0,sumNoDisponibles = 0;

  for (const vehiculos of data) {

    sumVehiculos++;

    if(vehiculos.Estado == 1){
      sumDisponibles++;
    }else{
      sumNoDisponibles++;
    }
    
  }
  
  avCars.textContent = `${sumDisponibles}`;
  rtCars.textContent = `${sumNoDisponibles}`;
  regCars.textContent = `${sumVehiculos}`;
 
})







