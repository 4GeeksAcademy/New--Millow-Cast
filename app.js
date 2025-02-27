/* 
Funciones a elaborar:

* animateByLine: 
    Esta función debe imprimir el corazón línea por línea en la consola del editor, debe de haber un salto de línea entre cada impresión. 
    Recibe un parámetro llamado "ms" que indica el retraso en milisegundos entre cada impresión de línea.

* animateByChart: 
    Esta función debe imprimir el corazón carácter por carácter en la consola del editor, debe de haber un delay entre cada impresión de carácter. 
    Cada vez que se complete la impresión de una línea, se debe hacer un salto de línea. 
    Recibe un parámetro llamado "ms" que indica el retraso en milisegundos entre cada impresión de carácter.

Pistas:

- Investiga sobre la función setTimeout, puede ser de interés.
- Usa console.log o process.stdout.write para imprimir en la consola de acuerdo a lo que necesites.
- Recuerda que necesitas iterar un string, ¿cómo lo conviertes en un array de caracteres?

Para iniciar el proyecto, ejecuta node app.js

*/




const asciiHeart =  [

 "  ⢀⣤⣶⣶⣶⣦⣄    ⢀⣤⣴⣶⣶⣶⣤⡀",
 " ⣼⣿⣿⣿⣿⣿⣿⣿⣷⣤⣾⣿⣿⣿⣿⣿⣿⣿⣧",
 " ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿",
 " ⠹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠏",
 "  ⠙⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠋ ",
 "    ⠙⢿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠛⠁⠀",
 "      ⠉⢿⣿⣿⣿⣿⠟⠋⠀",
 "⠀       ⠙⠻⠟⠁"

]


const animatedByChart = (ms) => {
  let totalDelay = 0; 

  asciiHeart.forEach((line) => {
      line.split('').forEach((char, charIndex) => { 
          setTimeout(() => {
              process.stdout.write(char);
              if (charIndex === line.length - 1) {
                  process.stdout.write('\n');
              }
          }, totalDelay);
          totalDelay += ms;
      });
  });

  
};


animatedByChart(100)


const animateByLine = (ms) => {
  asciiHeart.forEach((line, index) => {
      setTimeout(() => {
          console.log(line);
      }, index * ms);
  });
};

animateByLine(0)

  
  // Salida:
  
  // este es el tercer mensaje
  // este es el segundo mensaje
  // este es el primer mensaje
  