import {useState,useEffect} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function NoteForm(props) {
  const [noteTitle, setNoteTitle] = useState("");
  const [noteContent, setNoteContent] = useState("");

  let notaEnEdicion= props.notaEnEdicion;

  useEffect(()=>{
    if(notaEnEdicion){
      setNoteTitle(notaEnEdicion.title);
      setNoteContent(notaEnEdicion.content);
    }
  },[notaEnEdicion]);

  function onChangeTitle( e ){
    setNoteTitle(e.target.value);
  }

  function onChangeContent( e ){
    setNoteContent(e.target.value);
  }

  function onSubmitHandle(){
    let notaNueva={
      "title": noteTitle,
      "content": noteContent
    }
    console.log("vas a crear una nueva nota: " + noteTitle + "\n" + noteContent); 

    setNoteTitle("");
    setNoteContent("");

    if(props.notaEnEdicion){
      notaNueva._id= props.notaEnEdicion._id;
      return props.onEditHandle(notaNueva);
    }
    props.onCreateHandle(notaNueva)
  }
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField value={noteTitle} onChange={onChangeTitle} id="outlined-basic" label="Note Title" variant="outlined" />
      <TextField value={noteContent} onChange={onChangeContent} id="outlined-basic" label="Note Content" variant="outlined" />

      <Button onClick={onSubmitHandle} variant="contained">Enviar Nota</Button>
    </Box>
  );
}