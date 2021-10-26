
import {Fragment} from 'react';

import {useLocation, useHistory} from 'react-router-dom';

export default function CategoriesPage(){
  const location= useLocation();
  const query= new URLSearchParams(location.search);
  const history= new useHistory();

  const skip= parseInt(query.get("skip")) || 0;
  const limit= query.get("limit") || 15;

  // query.forEach( (queryValue,queryName)=>{
  //   console.log(queryName + ":" + queryValue);
  // })

  // query.append("NewEntry", "rosa")

  function handleNext(){
    query.set("skip", skip + limit);
    // query.set("limit", 50);
    // history.push('/contact'); redireccion
    // history.push({pathname: '/contact', search: "?sabor=chocolate&color=blanco"});
    history.push({search: query.toString()});


  }
  return(
    <Fragment>
      <h1>Hola desde categoriesPages</h1>
      <p style={{fontSize: '4rem'}}>
        skip: {skip},
        limit: {limit},
      </p>

      <button onClick={handleNext}>
        Siguiente
      </button>

    </Fragment>
  )
}