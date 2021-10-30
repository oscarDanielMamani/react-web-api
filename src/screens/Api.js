
import {useState, useEffect} from 'react';
import Container from '@mui/material/Container';
import RefreshIcon from '@mui/icons-material/Refresh';

import BasicCard from '../components/BasicCard';
import { notasListar, notaBorrar} from '../helpers/api';

function Api(){
  const [ noteList, setNoteList] = useState(null);
  const [ toggle, setToggle] = useState(true);

  useEffect( ()=>{
    traerData();
  }, [])

  useEffect( ()=>{
    traerData();
  }, [toggle])

  async function traerData(){
    let resultJson= await notasListar();
    console.log(resultJson)
    setNoteList(resultJson)
  }

  async function onDeleteClick(_id){
    console.log("borrando id: " + _id);
    let mensaje= await notaBorrar(_id)

    setNoteList( noteList.filter( nota => nota._id !== _id) )

    console.log("borrado exitoso id: " + JSON.stringify(mensaje));
  }
  
  return(
    <Container>
      <h1>CRUD (create, read, update, delete) basico contra server Nodejs</h1>
      <RefreshIcon 
        onClick={()=> setToggle(!toggle)} 
        style={{width:"50px", height:"50px", cursor: 'pointer'}}>
      </RefreshIcon>
     
      {/* {
        noteList && 
        <pre>{JSON.stringify(noteList,null,2)}</pre>
      } */}

      {
        noteList && noteList.length == 0 &&
        <h3>No hay Notas</h3>
      }
      

      {
        noteList && 
        noteList.map( unaNota =>
          <BasicCard 
            key={unaNota._id} 
            titulo={unaNota.title} 
            descripcion={unaNota.content} 
            fechaCreacion={unaNota.createdAt} 
            onDeleteClick={onDeleteClick}
            _id={unaNota._id}
            />
        )
      }

      
    </Container>
  )
}

export default Api;