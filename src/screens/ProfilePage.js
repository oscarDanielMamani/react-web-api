
import { useParams } from 'react-router-dom';

export default function ProfilePage(){

  const params= useParams();
  console.log(params)
  return(
    <h1>Hola {params.username}</h1>
  )
}