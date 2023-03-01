alert();

let alumnosAprobados = []; 

while (true) {  
  let nombre = prompt("Ingrese el nombre del alumno"));
  let nota = parseFloat(prompt("Ingrese la nota del alumno"));  

  if (nombre === null || nota === null) { 
    break;
  }

  if (isNaN(nota)) { 
    alert("La nota ingresada no es válida. Por favor, ingrese un número.");
    continue;
  }

  if (nota >= 4) {      alumnosAprobados.push(nombre);
  }
}

console.log(alumnosAprobados); 
