// Array de productos
productos = [
  ["Patatas", 1.40, 1],
  ["Zanahorias", 0.40, 1],
  ["Tomates", 0.80, 1],
  ["Cebollas", 0.30, 1],
  ["Calabacín", 2.40, 1],
  ["Pimientos", 2, 1]
];
  // Crea la variable del Total
  var totalPrice = 0.0;

// Creacion de tabla para el carrito
var tabla = document.createElement("table");
document.querySelector("#lista").appendChild(tabla);
var indicadores = document.createElement("tr");
var tablasIndicadores = `<th>Producto</th><th>Precio</th><th>Unidades</th>`;
indicadores.innerHTML = tablasIndicadores;
tabla.appendChild(indicadores);
tabla.id = "tabla";
tabla.style.display = "none"

// Reacciones Botones
var addToCartButtons = document.querySelectorAll(".addCarrito");
addToCartButtons.forEach((addToCart) => {
  addToCart.addEventListener("click", () => {
    // Display ON de Indicadores
    tabla.style.display = "table";
    // Generador de la Tabla del Carrito 
    for (let producto of productos) {
      var tr = document.createElement("tr");
      var ifExistData = document.querySelector(`#tr${producto[0]}`);
      var productId = addToCart.closest("a").id;
      if (productId.includes(producto[0])) {
        if (ifExistData) {
          ifExistData.innerHTML = `<td>${producto[0]}</td><td>${producto[1].toFixed(2)}€</td><td>${producto[2] += 1}</td><td><button id="deleteItem" type="button" class="btn btn-danger">X</button></td>`;
          totalPrice += producto[1];
        } else {
          tr.id = `tr${producto[0]}`;
          tr.innerHTML = `<td>${producto[0]}</td><td>${producto[1].toFixed(2)}€</td><td>${producto[2]}</td><td><button id="deleteItem" type="button" class="btn btn-danger">X</button></td>`;
          tabla.appendChild(tr);
          totalPrice += producto[1];
        }
      }
    }
  });
});
// Permiso para Drag
function allowDrop(ev) {
    ev.preventDefault();
};
// En el Drag
function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
};
// En el Drop
function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  // Display ON de Indicadores
  tabla.style.display = "table";
  // Generador de la Tabla del Carrito 
  for (let producto of productos) {
    var tr = document.createElement("tr");
    var ifExistData = document.querySelector(`#tr${producto[0]}`);
    if (producto[0] == data) {
      if (ifExistData) {
        ifExistData.innerHTML = `<td>${producto[0]}</td><td>${producto[1].toFixed(2)}€</td><td>${producto[2] += 1}</td><td><button id="delete${producto[0]}" type="button" class="btn btn-danger">X</button></td>`;
        totalPrice += producto[1];
      } else {
        tr.id = `tr${producto[0]}`;
        tr.innerHTML = `<td>${producto[0]}</td><td>${producto[1].toFixed(2)}€</td><td>${producto[2]}</td><td><button id="delete${producto[0]}" type="button" class="btn btn-danger">X</button></td>`;
        tabla.appendChild(tr);
        totalPrice += producto[1];
          // Boton de Eliminar
          console.log(document.querySelector(`#delete${producto[0]}`).closest("tr"));
            document.querySelector(`#delete${producto[0]}`).addEventListener("click", () => {
              document.querySelector(`#delete${producto[0]}`).closest("tr").remove(1);
          });
        }
      }
    }
  }
  
  // Boton del Total
document.querySelector("#total").addEventListener("click", () => {
  swal(`El total a pagar de tu carrito es de ${totalPrice.toFixed(2)}€`, {
    buttons: ["Seguir comprando", "Finalizar compra"],
  });
});
  // Boton de Vaciar
document.querySelector("#vaciar").addEventListener("click", () => {
  tabla.innerHTML = "";
  totalPrice = 0;
  productos = [
    ["Patatas", 1.40, 1],
    ["Zanahorias", 0.40, 1],
    ["Tomates", 0.80, 1],
    ["Cebollas", 0.30, 1],
    ["Calabacín", 2.40, 1],
    ["Pimientos", 2, 1]
  ];
});
