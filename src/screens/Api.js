
import {useState, useEffect} from 'react';
import Container from '@mui/material/Container';
import RefreshIcon from '@mui/icons-material/Refresh';

import BasicCard from '../components/BasicCard';
import NoteForm from '../components/NoteForm';
import { notasListar, notaBorrar, notaCrear, notaEditar} from '../helpers/api';

function Api(){
  const [ noteList, setNoteList] = useState(null);
  const [ toggle, setToggle] = useState(true);

  const [ notaEnEdicion, setnotaEnEdicion] = useState(null);//A: aca guardamos la nota que el usuario quiere editar(su _id, su titulo etc)

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

  function onEditClick(_id){
    let notaAEditar= noteList.filter( nota => nota._id == _id )[0];
    setnotaEnEdicion(notaAEditar);
    console.log("vas a editar id: " + JSON.stringify(notaAEditar))
  }

  async function onCreateHandle(nuevaNota){
    let notaCreada= await notaCrear(nuevaNota);
    alert("Nueva nota creada: " + JSON.stringify(notaCreada));
    setNoteList( notasPrev =>  [ ...notasPrev ,notaCreada])
  }

  async function onEditHandle(notaEditada){
    console.log("vas a edita una nota : " + JSON.stringify(notaEditada));
    let result= await notaEditar(notaEditada);
    alert(JSON.stringify(result))
    setnotaEnEdicion(null);
  }

  return(
    <Container>
      <h1  style={{"marginBottom": "3px","color": "red"}}>CRUD (create, read, update, delete) basico contra server Nodejs</h1>
      <NoteForm notaEnEdicion={notaEnEdicion} onCreateHandle={onCreateHandle} onEditHandle={onEditHandle}/>
      <RefreshIcon 
        onClick={()=> setToggle(!toggle)} 
        style={{width:"50px", height:"50px", cursor: 'pointer'}}>
      </RefreshIcon>

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
            onEditClick={onEditClick}
            _id={unaNota._id}
            />
        )
      }

      
    </Container>
  )
}

export default Api;