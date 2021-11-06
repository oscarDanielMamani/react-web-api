//TODO: en un app real cargariamos esto de un archivo de configuracion o de variables de entorno
var BACKEND_URL= "http://localhost:3000";
//A: base url
var NOTES_URL= BACKEND_URL + "/notes";
//A: la url para obtener la lista de notas de nuestra web Api

// one_note_url= notes_url + "/" + id;

async function notasListar(){
  var myHeaders = new Headers();
  myHeaders.append("Accept", "application/json");
  myHeaders.append("Content-Type", "application/json");

  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };

  
  let result= await fetch(NOTES_URL, requestOptions);
  let resultJson= await result.json();
  return resultJson;
}

async function notaBorrar(id){
  var myHeaders = new Headers();
  myHeaders.append("Accept", "application/json");
  myHeaders.append("Content-Type", "application/json");

  var requestOptions = {
    method: 'DELETE',
    headers: myHeaders,
    redirect: 'follow'
  };

  let urlBorrado= `${NOTES_URL}/${id}`;
  
  let result= await fetch(urlBorrado, requestOptions);
  let resultJson= await result.json();
  return resultJson;
}

async function notaCrear(nota){
  var myHeaders = new Headers();
  myHeaders.append("Accept", "application/json");
  myHeaders.append("Content-Type", "application/json");

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    redirect: 'follow',
    body: JSON.stringify(nota)
  };
  
  let result= await fetch(NOTES_URL, requestOptions);
  let resultJson= await result.json();
  return resultJson;
}

async function notaEditar(nota){
  let id= nota._id;
  var myHeaders = new Headers();
  myHeaders.append("Accept", "application/json");
  myHeaders.append("Content-Type", "application/json");

  var requestOptions = {
    method: 'PUT',
    headers: myHeaders,
    redirect: 'follow',
    body: JSON.stringify(nota)
  };
  
  let urlEditar= `${NOTES_URL}/${id}`;

  let result= await fetch(urlEditar, requestOptions);
  let resultJson= await result.json();
  return resultJson;
}
module.exports={
  notasListar,
  notaBorrar,
  notaCrear,
  notaEditar
}

// notasListar
// notaEditar
// notaBorrar
// notaCrear
//las funciones que esperamos tener para interactuar con la api