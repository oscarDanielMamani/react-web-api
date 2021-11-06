import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

export default function BasicCard(props){
  let{titulo, descripcion, fechaCreacion, url, onDeleteClick, onEditClick, _id}= props;
  return (
    <Card sx={{ minWidth: 275, maxWidth: 500, marginBottom: 10}}>
      <CardContent>

        <Typography variant="h5" component="div">
          {titulo  || "Titulo de la nota"}
          <DeleteIcon style={{cursor: 'pointer'}} onClick={()=> onDeleteClick(_id)}/>
          <EditIcon style={{cursor: 'pointer'}} onClick={()=> onEditClick(_id)}/>
        </Typography>
        {/* TITULO DE LA NOTA */}
       
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {fechaCreacion  || "10/10/2021"} 
        </Typography>
        <Typography variant="body2">
          {descripcion || "desc de la nota"}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Ver informacion ampliada</Button>
      </CardActions>
    </Card>
  );
}
