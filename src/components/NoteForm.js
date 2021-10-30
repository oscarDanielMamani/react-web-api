import {useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function NoteForm(props) {
  const [noteTitle, setNoteTitle] = useState("");
  const [noteContent, setNoteContent] = useState("");

  function onChangeTitle( e ){
    setNoteTitle(e.target.value);
  }

  function onChangeContent( e ){
    setNoteContent(e.target.value);
  }

  function enviarNuevaNota(){
    let notaNueva={
      "title": noteTitle,
      "content": noteContent
    }
    console.log("vas a crear una nueva nota: " + noteTitle + "\n" + noteContent); 
    props.crearNota(notaNueva)
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

      <Button onClick={enviarNuevaNota} variant="contained">Enviar Nota</Button>
    </Box>
  );
}