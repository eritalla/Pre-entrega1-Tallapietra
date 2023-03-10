//let productos = [
//   {borcego: "borcego"},
//   {texana: "texana"},
//   {botaCañaAlta: "bota caña alta", precio2: 35000},
//   {botaCañaBaja: "bota caña baja", precio3: 15000},
//   {zapatilla: "zapatilla", precio4: 20000}
//];
let borcego, texana, botaCañaAlta, botaCañaBaja, zapatilla;
borcego = "borcego";
texana = "texana";
botaCañaAlta = "botaCañaAlta";
botaCañaBaja = "botaCañaBaja";
zapatilla = "zapatilla";
let precio1 = 25000;
let precio2 = 35000;
let precio3 = 15000;
let precio4 = 20000;
alert("Bienvenida a la pagina de Maria. presione para continuar")
//alert("Hola! desea comprar algún producto si o no?");
let comprar = prompt("Hola! desea comprar algún producto si o no?")
function comprarProducto() {
   let seleccionados = prompt ("borcego, texana, bota caña alta, bota caña baja o zapatilla")
   if (seleccionados == borcego) {
      alert ("vas a pagar " + precio1);
   }
   else if (seleccionados == texana) {
      alert ("vas a pagar " + precio1);
   }
   else if (seleccionados == botaCañaAlta) {
      alert ("vas a pagar " + precio2);
   }
   else if (seleccionados == botaCañaBaja) {
      alert ("vas a pagar " + precio3);
   }
   else if (seleccionados == zapatilla) {
      alert ("vas a pagar " + precio4);
   }
}

if (comprar === "si") {
   alert ("elegí un producto");
   comprarProducto();
   alert ("si desea elegir otro producto presione si")
   comprarProducto();

} else {
   alert("Gracias por pasar");
}





//let comprar = "si";
//while (comprar === "si") {
//   alert ("elegí un producto");
//   comprarProducto();
//}
// acá me gustaría incluir la suma de ambos 
// productos pero no entiendo como puedo recuperar el precio de ambos para luego sumarlos.
// necesito ayuda. 