
Swal.fire({
    icon: "sucess",
    title:"Bienvenido a Banco Torola",
    text:"SIMULADOR DE PRESUPUESTO",
    showClass:{
        showClass: {
            popup: 'animate__animated animate__bounceInUp'
          },
          hideClass: {
            popup: 'animate__animated animate__bounceInUp'
          }
    }
    
  
})
let calculadora = document.getElementById("vacationCalc");

calculadora.addEventListener("submit", calcular_gastos);

function tomar_valores(){
    let destino = document.getElementById("destiny").value;
    let presupuesto = document.getElementById("budget").value;
    let alojamiento = document.getElementById("acomodation").value;
    let transporte = document.getElementById("transport").value;
    let comida = document.getElementById("food").value;

    return{destino,presupuesto,alojamiento,transporte,comida};

}

function calcular_gastos(e){

    e.preventDefault();


    const {destino,presupuesto,alojamiento,transporte,comida} = tomar_valores();

    let gastos = parseInt (alojamiento) + parseInt(transporte) + parseInt(comida)

    let balance = presupuesto - gastos

    UI(destino,presupuesto,balance);
    
}


function UI(destino,presupuesto,balance){
    let resultado = document.getElementById("result");
    let data = document.createElement("div")
    data.innerHTML = `<div class="container-data row">
    <div class="col s4">
    <h6>${destino}</h6>
    </div>
    <div class="col s4">
    <h6>${presupuesto}</h6>
    </div>
    <div class="col s4">
    <h6>${balance}</h6>
    </div>
    </div>`
    resultado.appendChild(data);

    reiniciar();

}




function reiniciar(){
    let calculadora = document.getElementById("vacationCalc");

}