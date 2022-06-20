import React from 'react'
import "./agenda.css"



const Agenda = (props) => {
  console.log(props)
  return (
    
    <div className='contenedor-primario'>
      <img src={props.ageninfo.img} alt="" className='imagen-agenda'/>
      <div className='informacion'>
          <div className='localitation-info'> 
            <img src="./images/localitation.png" alt="" className='loca'/>
            <h4 className='pais'>{props.ageninfo.pais}</h4>
            <h5 className='google'>View on Google Maps</h5>
         </div>
        <h1 className='locacion'>{props.ageninfo.location}</h1>
        <h4 className='fecha'>{props.ageninfo.fecha}</h4>
        <p className='descripcion'>{props.ageninfo.descripcion}</p>

      </div>

    </div>
   
  )
}

export default Agenda