function sum(num1, num2) {
    return num1 + num2;
  }
  // callback seria en este caso la funcion "sum"
  function calc(num1, num2, callback) {
    return callback(num1, num2);
  }
  
  console.log(calc(2, 2, sum));
  
  // Segundo ejemplo
  function date(regreso) {
    // Fecha actual, imprime la fecha actual dentro de la
    // ejecucion del programa
    console.log(new Date());
    setTimeout(() => {
      letdate = new Date();
      regreso(date);
    }, 4000);
  }
  
  function printDate(dateNow) {
    // Se muestra en consola la fecha despues de transcurrido el tiempo deseado
    console.log(dateNow);
  }
  
  date(printDate);