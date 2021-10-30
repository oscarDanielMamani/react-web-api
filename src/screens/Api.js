
import {Fragment, useState} from 'react';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

import BasicCard from '../components/BasicCard';

//TODO: en un app real cargariamos esto de un archivo de configuracion o de variables de entorno
var BACKEND_URL= "http://localhost:3000";
//A: base url
var NOTES_URL= BACKEND_URL + "/notes";
//A: la url para obtener la lista de notas de nuestra web Api

// one_note_url= notes_url + "/" + id;

function Api(){
  const [ noteList, setNoteList] = useState(null);

  async function traerData(){
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
    console.log(resultJson)
    setNoteList(resultJson[0])
    
  }
  
  return(
    <Container>
      <h1>CRUD (create, read, update, delete) basico contra server Nodejs</h1>
     
      {
        noteList && 
        <pre>{JSON.stringify(noteList,null,2)}</pre>
      }
      <Button variant="contained" onClick={traerData}>Traer Notas</Button>

      {
        noteList && 
        <BasicCard titulo={noteList.title} descripcion={noteList.content} fechaCreacion={noteList.createdAt}/>
      }

      
    </Container>
  )
}

export default Api;