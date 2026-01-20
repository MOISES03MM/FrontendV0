import React from 'react'
import {Route, Routes, Navigate, Link} from 'react-router-dom'
import Buscar from './pages/Buscar'
import Sistema from './pages/Sistema'
import Informacion from './pages/Informacion'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Sistema></Sistema>}></Route>
        <Route path='/buscar' element={<Buscar></Buscar>}></Route>
        <Route path='/informacion' element={<Informacion></Informacion>}></Route>
      </Routes>
    </div>
  )
}

export default App