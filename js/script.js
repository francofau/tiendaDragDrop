productos = [
  ["Tomates", 2, 0],
  ["Patatas", 2, 0],
  ["Zanahorias", 2, 0],
  ["Tomates", 2, 0],
  ["Cebollas", 2, 0],
  ["Calabacín", 2, 0]
];



function allowDrop(ev) {
    ev.preventDefault();
  }
  
  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }

  var listaPorDefecto = document.querySelector("#lista");
  var lista = document.createElement("ul")
  listaPorDefecto.appendChild(lista);
  
  function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    console.log(data);

    // Reacciones Botones
    var addToCartButtons = document.querySelectorAll(".addCarrito");
    addToCartButtons.forEach((addToCart) => {
      addToCart.addEventListener("click", () => {
        console.log("click");
      });
    });
    
    switch (data) {
      case "patata": {
        var li = document.createElement("li");
        li.innerHTML = `${productos[1][0]} &nbsp; &nbsp; &nbsp; &nbsp; <span id="precio" type="number">${productos[1][1]}€</span> &nbsp; <span id="unidades" type="number">${productos[1][2]}</span> &nbsp; &nbsp; &nbsp; <button type="button" class="btn btn-danger">X</button>`;
        lista.appendChild(li);
      } break;
      case "tomates": {
        var li = document.createElement("li");
        li.innerHTML = `${productos[0][0]} &nbsp; &nbsp; &nbsp; &nbsp; <span id="precio" type="number">${productos[0][1]}€</span> &nbsp; <span id="unidades" type="number">${productos[0][2]}</span> &nbsp; &nbsp; &nbsp; <button type="button" class="btn btn-danger">X</button>`;
        lista.appendChild(li);
      }

      default:
        break;
    }
};
    


