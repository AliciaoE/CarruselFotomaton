let posicion = 0;
mostrarImagen();

function avanzar() {
  if (posicion >= imagenes.length - 1) {
    alert("Es la última imagen");
    posicion = 0;
  } else {
    posicion++;
  }
  mostrarImagen();
}
function retroceder() {
  if (posicion <= 0) {
    alert("Es la primera imagen");
    posicion = imagenes.length - 1;
  } else {
    posicion--;
  }
  mostrarImagen();
}
function mostrarImagen() {
  let imagen = RUTA + imagenes[posicion].imagen;
  let nombre= imagenes [posicion].nombre;
  let titulo= imagenes [posicion].title;
  let desc= imagenes [posicion].descripcion;
  document.getElementById("imagen").src = imagen;
  document.getElementById("imagen").title = titulo;
  document.getElementById("imagen").alt = imagenes [posicion].nombre;
  document.getElementById("nombreImagen").innerHTML = nombre
  document.getElementById("desc").innerHTML = desc;
}
