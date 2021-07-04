const calcularDescuento = (precio, descuento=0) => precio * (1 - descuento / 100);
const calcularDescuentoMasCupon = (precio, descuento=0, cupon) =>
  precio * (1 - (descuento + cupon) / 100);

const haveCupon = () => document.getElementById("InputCupon").value !== "";
const haveDiscount = () =>
  document.getElementById("InputDiscount").value !== "";

const cupones = [
  { name: "platzi", value: 10 },
  { name: "mama", value: 20 },
  { name: "ponquesito", value: 30 },
];

function onclickCalcularDescuento() {
  const price = parseInt(document.getElementById("InputPrice").value);
  let discount = parseInt(document.getElementById("InputDiscount").value);
  const cupon = document.getElementById("InputCupon").value;
  let finalPrice;


  if (cupon != "") {
    switch (cupon) {
      case "platzi":
        finalPrice = calcularDescuentoMasCupon(price, discount, 10);
        break;
      case "mama":
        finalPrice = calcularDescuentoMasCupon(price, discount, 20);
        break;
      case "ponquesito":
        finalPrice = calcularDescuentoMasCupon(price, discount, 30);
        break;
      default:
        finalPrice= "El Cupon es invalido";
        break;
    }
  } else {
    finalPrice = calcularDescuento(price, discount);
  }

  // console.log(finalPrice);
  document.getElementById("ResultPrice").innerText = finalPrice;
  // document.getElementById("result-container").innerHTML = `<p class="example">${finalPrice}</p>`
}
