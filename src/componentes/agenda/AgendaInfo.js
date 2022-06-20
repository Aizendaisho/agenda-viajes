import React from 'react'
import Info from './Info'
import Agenda from './Agenda'

const AgendaInfo = Info.map((ageninfo) =>{
    return <Agenda key={ageninfo.id} ageninfo={ageninfo} />
    
})





export default AgendaInfo