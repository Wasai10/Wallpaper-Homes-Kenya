import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
// You will likely need this import for the shop route to work:
import Shop from './components/Shop' 

function App() { // <-- Added function declaration
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          {/* Capitalized 'Shop' and fixed closing tags below */}
          <Route path='/shop' element={<Shop />}/> 
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App