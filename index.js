// const numSemana = 4;
// const dias = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
// let datosHoras = {};

// // Inicializar la estructura de datos
// function inicializarDatos() {
//   for (let semana = 0; semana < numSemana; semana++) {
//     datosHoras[semana] = {};
//     for (let dia of dias) {
//       datosHoras[semana][dia] = {
//         entrada: 0,
//         inicioDescanso: 0,
//         finDescanso: 0,
//         salida: 0,
//       };
//     }
//   }
// }

// //Crear formulario para cada semana y dia
// function crearFormularios() {
//   const container = document.getElementById("semanasContainer");
//   for (let semana = 0; semana < numSemana; semana++) {
//     const semanaDiv = document.createElement("div");
//     semanaDiv.className = "week-container";
//     semanaDiv.innerHTML = `<h2>Semana ${semana + 1}</h2>`;

//     for (let dia of dias) {
//       const diaDiv = document.createElement("div");
//       diaDiv.className = "day-container";
//       diaDiv.innerHTML = `
//             <h3>${dia}</h3>
//             <div class="form-group">
//             <label>Horas de Entraada:</label>
//             <input type="number" step ="0.01"
//             onchange ="actualizarDatos(${semana}, '${dia}','entrada',this.value)">
//             </div>
            
            
//             <div class="form-group">
//             <label>Inicio de Descanso:</label>
//             <input type="number" step ="0.01"
//             onchange ="actualizarDatos(${semana}, '${dia}','inicioDecanso',this.value)">
//             </div>
            
            
//             <div class="form-group">
//             <label>Fin de Descanso:</label>
//             <input type="number" step ="0.01"
//             onchange ="actualizarDatos(${semana}, '${dia}','finDescanso',this.value)">
//             </div>

//             <div class="form-group">
//             <label>Hora de Salida:</label>
//             <input type="number" step ="0.01"
//             onchange ="actualizarDatos(${semana}, '${dia}','salida',this.value)">
//             </div>
//             `;
//       semanaDiv.appendChild(diaDiv);
//     }
//     container.appendChild(semanaDiv);
// }
// }

// // Actualizar daros cuando se midifica un input
// function actualizarDatos(semana, dia, campo, valor) {
//   datosHoras[semana][dia][campo] = parseFloat(valor) || 0;
// }

// //Calcular horas trabajadas para un dia
// function calcularHorarsByDay(datos) {
//   const primerTramo = datos.inicioDescanso - datos.entrada;
//   const segundoTramo = datos.salida - datos.finDescanso;
//   const totalHoras = primerTramo + segundoTramo;
//   const horasCompletas = Math.floor(totalHoras);
//   const minutos = Math.round((totalHoras - horasCompletas) * 60);
//   return { horas: horasCompletas, minutos: minutos };
// }
// //Calcular totales y mostrar resumen

// function calcularTotales() {
//   const tarifaPorHora =
//     parseFloat(document.getElementById("tarifaPorHora").value) || 0;
//   let horasTotales = 0;
//   let resumenHTML = "";

//   for (let semana = 0; semana < numSemana; semana++) {
//     resumenHTML += `<h3>Semana ${semana + 1}</h3>`;
//     resumenHTML += `<table>
//       <tr>
//       <th>Dia</th>
//       <th>Entrada</th>
//       <th>Inicio Descanso</th>" 
//       "<th>Fin Descanso</th> 
//       <th>Salida</th>
//       <th>Total</th>
//       </tr>`;

//     for (let dia of dias) {
//       const datos = datosHoras[semana][dia];
//       const horasTrabajadas = calcularHorarsByDay(datos);
//       horasTotales += horasTrabajadas.horas + horasTrabajadas.minutos / 60;
//       resumenHTML += `
//         <tr>
//         <td>${dia}</td>
//         <td>${datos.entrada}</td>
//         <td>${datos.inicioDescanso}</td>
//         <td>${datos.finDescanso}</td>
//         <td>${datos.salida}</td>
//         <td>${horasTrabajadas.horas} horas y ${horasTrabajadas.minutos} minutos</td>
//         </tr>
        
//         `;
//     }
//     resumenHTML += "</table>";
//   }
//   const salarioTotal = horasTotales * tarifaPorHora;
//   resumenHTML += `
//     <div class="total-section">
//     <h3>Totales Mensuales</h3>
//     <p> Total horas trabajadas: ${horasTotales.toFixed(2)}</p>
//     <p>Salario mensual: $${salarioTotal.toFixed(2)}</p>
//     </div>
    
//     `;
//   document.getElementById("resumenContent").innerHTML = resumenHTML;
// }

// //Inicializar la aplicacion
// document.addEventListener("DOMContentLoaded", function () {
//   inicializarDatos();
//   crearFormularios();
// });

// index.js
const numSemana = 4;
const dias = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
let datosHoras = {};

// Inicializar la estructura de datos
function inicializarDatos() {
    for (let semana = 0; semana < numSemana; semana++) {
        datosHoras[semana] = {};
        for (let dia of dias) {
            datosHoras[semana][dia] = {
                entrada: 0,
                inicioDescanso: 0,
                finDescanso: 0,
                salida: 0,
            };
        }
    }
}

function crearFormularios() {
    const container = document.getElementById("semanasContainer");
    for (let semana = 0; semana < numSemana; semana++) {
        const semanaDiv = document.createElement("div");
        semanaDiv.className = "week-container";
        semanaDiv.innerHTML = `<h2>Semana ${semana + 1}</h2>`;

        for (let dia of dias) {
            const diaDiv = document.createElement("div");
            diaDiv.className = "day-container"; // Corregido el nombre de la clase
            diaDiv.innerHTML = `
                <h3>${dia}</h3>
                <div class="form-group">
                    <label>Hora de Entrada:</label>
                    <input type="number" step="0.01"
                        onchange="actualizarDatos(${semana}, '${dia}', 'entrada', this.value)">
                </div>
                <div class="form-group">
                    <label>Inicio de Descanso:</label>
                    <input type="number" step="0.01"
                        onchange="actualizarDatos(${semana}, '${dia}', 'inicioDescanso', this.value)">
                </div>
                <div class="form-group">
                    <label>Fin de Descanso:</label>
                    <input type="number" step="0.01"
                        onchange="actualizarDatos(${semana}, '${dia}', 'finDescanso', this.value)">
                </div>
                <div class="form-group">
                    <label>Hora de Salida:</label>
                    <input type="number" step="0.01"
                        onchange="actualizarDatos(${semana}, '${dia}', 'salida', this.value)">
                </div>
            `;
            semanaDiv.appendChild(diaDiv);
        }
        container.appendChild(semanaDiv);
    }
}

function actualizarDatos(semana, dia, campo, valor) {
    datosHoras[semana][dia][campo] = parseFloat(valor) || 0;
}

function calcularHorasDia(datos) {
    const primerTramo = datos.inicioDescanso - datos.entrada;
    const segundoTramo = datos.salida - datos.finDescanso;
    const totalHoras = primerTramo + segundoTramo;
    const horasCompletas = Math.floor(totalHoras);
    const minutos = Math.round((totalHoras - horasCompletas) * 60);
    return { horas: horasCompletas, minutos: minutos };
}

function calcularTotales() {
    const tarifaPorHora = parseFloat(document.getElementById("tarifaPorHora").value) || 0;
    let horasTotales = 0;
    let resumenHTML = "";

    for (let semana = 0; semana < numSemana; semana++) {
        resumenHTML += `<h3>Semana ${semana + 1}</h3>`;
        resumenHTML += `
            <table>
                <tr>
                    <th>Día</th>
                    <th>Entrada</th>
                    <th>Inicio Descanso</th>
                    <th>Fin Descanso</th>
                    <th>Salida</th>
                    <th>Total</th>
                </tr>
        `;

        for (let dia of dias) {
            const datos = datosHoras[semana][dia];
            const horasTrabajadas = calcularHorasDia(datos);
            horasTotales += horasTrabajadas.horas + horasTrabajadas.minutos / 60;
            
            resumenHTML += `
                <tr>
                    <td>${dia}</td>
                    <td>${datos.entrada}</td>
                    <td>${datos.inicioDescanso}</td>
                    <td>${datos.finDescanso}</td>
                    <td>${datos.salida}</td>
                    <td>${horasTrabajadas.horas} horas y ${horasTrabajadas.minutos} minutos</td>
                </tr>
            `;
        }
        resumenHTML += "</table>";
    }

    const salarioTotal = horasTotales * tarifaPorHora;
    resumenHTML += `
        <div class="total-section">
            <h3>Totales Mensuales</h3>
            <p>Total horas trabajadas: ${horasTotales.toFixed(2)}</p>
            <p>Salario mensual: $${salarioTotal.toFixed(2)}</p>
        </div>
    `;

    document.getElementById("resumenContent").innerHTML = resumenHTML;
}

// Inicializar la aplicación
document.addEventListener('DOMContentLoaded', function() {
    inicializarDatos();
    crearFormularios();
});