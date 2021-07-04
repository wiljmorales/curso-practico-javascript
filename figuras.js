const perimetroCuadrado = (lado) => lado * 4;

const areaCuadrado = (lado) => lado * lado;

const perimetroTriangulo = (lado1, lado2, lado3) => lado1 + lado2 + lado3;

const areaTriangulo = (base, altura) => base * altura / 2;

const perimetroCirculo = (radio) => radio * Math.PI *2;

const areaCirculo = (radio) => radio**2 * Math.PI;

function calcularPerimetroCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const perimetro = perimetroCuadrado(value);
  console.log(`El perimetro del cuadrado mide: ${perimetro} cms`);
}

function calcularAreaCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const area = areaCuadrado(value);
  console.log(`El area del cuadrado mide: ${area} cms`);
}

function calcularPerimetroTriangulo() {
  const lado1 = parseInt(document.getElementById("lado1Triangulo").value);
  const lado2 = parseInt(document.getElementById("lado2Triangulo").value);
  const base = parseInt(document.getElementById("baseTriangulo").value);
  
  const perimetro = perimetroTriangulo(lado1, lado2, base);
  console.log(`El perimetro del tirangulo mide: ${perimetro} cms`);
}

function calcularAlturaTriangulo() {
  const lado1 = parseInt(document.getElementById("lado1Triangulo").value);
  const lado2 = parseInt(document.getElementById("lado2Triangulo").value);
  const base = parseInt(document.getElementById("baseTriangulo").value);
  
  if (lado1 != lado2){
    console.log("el triangulo no tiene dos lados iguales")
  } else {
    const altura = Math.sqrt(lado1**2 - (base / 2)**2)
    console.log(`El altura del tirangulo mide: ${altura} cms`);
  }

}

function calcularAreaTriangulo() {
  const altura = parseInt(document.getElementById("alturaTriangulo").value);
  const base = parseInt(document.getElementById("baseTriangulo").value);
  
  const area = areaTriangulo(base, altura);
  console.log(`El area del tirangulo mide: ${area} cms`);
}

function calcularPerimetroCirculo() {
  const input = document.getElementById("InputCirculo");
  const value = input.value;

  const perimetro = perimetroCirculo(value);
  console.log(`El perimetro del circulo mide: ${perimetro} cms`);
}


function calcularAreaCirculo() {
  const input = document.getElementById("InputCirculo");
  const value = input.value;

  const area = areaCirculo(value);
  console.log(`El area del circulo mide: ${area} cms`);
}

//Código del Cuadrado
console.group("Cuadrados")
//Lado del cuadrado
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + " cms");
//Perimetro del cuadrado
const PERIMETROCUADRADO = perimetroCuadrado(4);
console.log("El perimetro del cuadrado mide: " + PERIMETROCUADRADO + " cms");
//Area del cuadrado
const AREACUADRADO = areaCuadrado(4);
console.log("El área del cuadrado mide: " + AREACUADRADO + " cms^2");
console.groupEnd();



//Código del Triangulo
console.group("Triangulo");
//Lados de triangulo
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo =5;
console.log("Los lados del triángulo miden: " + ladoTriangulo1 + " cms, " + ladoTriangulo2 + " cms, " + baseTriangulo + "cms.");
console.log("La altura del triangulo mide: " + alturaTriangulo + " cms");
//Perimetro del triangul
const PerimetroTriangulo = perimetroTriangulo(ladoTriangulo1, ladoTriangulo2, baseTriangulo);
console.log("El perimetro del triangulo mide: " + PerimetroTriangulo + " cms");
//Area del triangulo
const AreaTriangulo = (baseTriangulo * alturaTriangulo)/2;
console.log("El área del triangulo mide: " + AreaTriangulo + " cms^2");
console.groupEnd();


//Código del Circulos
console.group("Circulos");
//Radio
const radioCirculo = 4;
console.log("El radio del circulo es " + radioCirculo + " cms.");
//Diametro
const diametroCirculo = radioCirculo * 2;
console.log("El diametro del circulo es " + diametroCirculo + " cms.");
// PI
const PI = Math.PI;
console.log("PI es " + PI + ".");
// Perimetro
const PerimetroCirculo = perimetroCirculo(radioCirculo);
console.log("El perimetro del circulo es " + PerimetroCirculo + " cms.");
//Area
const AreaCirculo = PI * (radioCirculo**2);
console.log("El area del circulo es " + AreaCirculo + " cms.");
console.groupEnd();