import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import CInformacion from '../components/CInformacion'

const Informacion = () => {
    const location = useLocation()
    
    const ticket = location.state?.ticket
    useEffect(()=>{
        console.log( ticket)
        console.log('si sirve desde la pagina informacion ')
        
    })

    return (
        <div>
            
            <CInformacion ticket={ticket} idBuscado="Búsqueda reciente" />
        </div>
    )
}

export default Informacion