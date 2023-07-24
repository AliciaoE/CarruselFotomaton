const TEMA = "Fotos Peques 2023";
const RUTA = "img/";
//new Imagen (varImagen, varNombre, varTitle, varDescripcion
const imagenes = [
  //POSICIÓN 0
  new Imagen(
    "sansebastian.jpg",
    "El peine del viento",
    " Sant sebastián",
    "Está compuesto por tres esculturas de acero, de 10 toneladas de peso cada una, incrustadas en unas rocas que dan al mar Cantábrico, cuyas olas las azotan.."
  ), //1
  new Imagen(
    "mirador.jpg",
    "Miorador de Torre Baró",
    "Barcelona ",
    "Si queremos disfrutar de unas buenas vistas de la ciudad de Barcelona y sus alrededores, este mirador nos brinda la oportunidad. Situado en la cima de la colina de la Torre Baró"
  ),
  new Imagen(
    "esplugues.jpg",
    "Fiesta mayor",
    "Esplugues de llobregat",
    "La Fiesta Mayor de Sant Mateu se celebra cada año en Espluges de Llobregat alrededor del 21 de septiembre, festividad del santo."
  ),

  new Imagen(
    "bilbao.jpg",
    "Puente de la salve",
    "Bilbao",
    "también conocido como “el puente del Guggenheim”, pues el museo lo ‘abraza’ por debajo para levantar una torre del otro lado e integrar el viaducto "
  ),

  new Imagen(
    "beniquenza-.jpg",
    "Embalse de Mequinenza",
    "Zaragoza",
    "O mar de Aragón es un embalse del río Ebro que se encuentra en la provincia de Zaragoza. El embalse recibe el nombre de Mequinenza debido a que la presa que lo origina está ubicada en esta localidad bajocinqueña. "
  ),
  new Imagen(
    "olot.jpg",
    " Olot desde el volcán Montsacopa",
    "Olot",
    " Olot es un municipio y localidad de la provincia de Gerona, conocida por sus lugares de interés natural; no en vano todo su término municipal se encuentra dentro del parque natural de la Zona Volcánica de la Garrocha. "
  ),
];
console.log("array creat")
console.table(imagenes)