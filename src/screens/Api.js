
import {Fragment, useState} from 'react';

function Api(){

  const [link, setLink] = useState(null);
  async function traerData(){
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", "Bearer BQA0gjbPCvJMB4__s04VCVjqJ7ymVBOgDiAKRpHihIaJFmCCV_qmH57W1o4AJMeh0ERI91ph_n6xwIYF0j8GIIOnrqqiaUvZxVLV82BpiKQyrfXHIav3ocoYLtehkG6Ydw3gsAWfTmFyeh5bbXQypg_6voGZ0sM");

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    
    let result= await fetch("https://api.spotify.com/v1/search?q=duki&type=track%2Cartist", requestOptions);
    let resultJson= await result.json();
    console.log(resultJson)
    setLink(resultJson.artists.href)
    
  }
  
  return(
    <Fragment>
      <h1>Hola desde Api js</h1>
      {
      link ?
        <a href={link}> link aca!</a>
        :<h2>Dale click para traer el link de tu artista favorito</h2>  
      } 

      <button onClick={traerData}>Traer data</button>
    </Fragment>
  )
}

export default Api;