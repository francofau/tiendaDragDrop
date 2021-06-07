// Array de productos
productos = [
  ["Patatas", 2, 1],
  ["Zanahorias", 2, 1],
  ["Tomates", 2, 1],
  ["Cebollas", 2, 1],
  ["Calabacín", 2, 1],
  ["Pimientos", 2, 1]
];

var productsSelectors = [
  document.querySelector("#Patatas"), document.querySelector("#Zanahorias")
];

// Reacciones Botones
var addToCartButtons = document.querySelectorAll(".addCarrito");
addToCartButtons.forEach((addToCart) => {
  addToCart.addEventListener("click", () => {
  console.log(productsSelectors);
  });
});

//Creacion de tabla para el carrito
var tabla = document.createElement("table");
document.querySelector("#lista").appendChild(tabla);
var indicadores = document.createElement("tr");
var tablasIndicadores = `<th>Producto</th><th>Precio</th><th>Unidades</th>`;
indicadores.innerHTML = tablasIndicadores;
tabla.appendChild(indicadores);
tabla.id = "tabla";
tabla.style.display = "none"

// Permiso para Drag
function allowDrop(ev) {
    ev.preventDefault();
}

// En el Drag
function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

// En el Drop
function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  console.log(data);

  // Display ON de Indicadores
  tabla.style.display = "table"
  // Generador de la Tabla del Carrito 
  for (let producto of productos) {
    var tr = document.createElement("tr");
    var ifExistData = document.querySelector(`#tr${producto[0]}`);
    if (producto[0] == data) {
      if (ifExistData) {
        ifExistData.innerHTML = `<td>${producto[0]}</td><td>${producto[1]}€</td><td>${producto[2] += 1}</td><td><button id="deleteItem" type="button" class="btn btn-danger">X</button></td>`;
      } else {
        tr.id = `tr${producto[0]}`;
        tr.innerHTML = `<td>${producto[0]}</td><td>${producto[1]}€</td><td>${producto[2]}</td><td><button id="deleteItem" type="button" class="btn btn-danger">X</button></td>`;
        tabla.appendChild(tr);
      }
    }
  }
/*
  var deleteItem = document.querySelector("#deleteItem");
  deleteItem.addEventListener("click", () => {
    console.log(`deleted item ${data}`)
    tabla.remove(tr);
});
*/
};