//tabla
$(document).ready(function() {
    $('#tabla-estadisticas').DataTable();
  });
  // realiza los pedidos 
  function realizarPedido() {
    var tabla = document.getElementById("tabla-estadisticas");
    var filas = tabla.rows;
  
    for (var i = 1; i < filas.length; i++) {
      var input = filas[i].getElementsByTagName("input")[0];
      var cantidadLocal = parseInt(filas[i].cells[2].textContent);
      var cantidadAPedir = parseInt(input.value);
      var disponibilidad = filas[i].cells[4];
  
      if (cantidadAPedir > cantidadLocal) {
        alert("La cantidad a pedir no puede ser mayor que la cantidad local.");
        return;
      } else {
        if (cantidadAPedir == 0) {
          if(cantidadLocal != 0){
            disponibilidad.textContent = "Disponible";
  
          }
          
        } else {
          
          filas[i].cells[2].textContent = cantidadLocal - cantidadAPedir;
          if(filas[i].cells[2].textContent==0){
            if(filas[i].cells[2].textContent==0){
              disponibilidad.textContent = "0 Stock";
  
            }
  
            
          }
          input.value = 0;
        }
      }
    }
  
    alert("Pedido realizado correctamente.");
  }
  // actualizar producto 
  function actualizarProducto(input) {
    var cantidadLocal = parseInt(input.parentNode.previousElementSibling.textContent);
    var cantidadAPedir = parseInt(input.value);
    var disponibilidad = input.parentNode.nextElementSibling;
    if (cantidadAPedir > cantidadLocal) {
      input.value = cantidadLocal;
      alert("La cantidad a pedir no puede ser mayor que la cantidad local.");
    } else {
      if (cantidadAPedir == 0) {
        if(cantidadLocal != 0){
            disponibilidad.textContent = "Disponible";
  
          }
      } else {
        if(cantidadLocal<=0){
          disponibilidad.textContent = "0 Stock";
  
        } 
      }
    }
  }  