import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ES6 from './components/ES6'
import Form from './components/Form'
import State from './components/State'
import Counter from './components/Counter'
import Events from './components/Events'
import List from './components/List'
import Form1 from './components/Form1'

function App() {
  
  return (
  <BrowserRouter>
  <Routes>
    <Route path='/create' element={<ES6/>}/>
    <Route path='/createForm' element={<Form/>}/>
    <Route path='/createState' element={<State/>}/>
    <Route path='/updateState' element={<Counter/>}/>
    <Route path='/updateEvents'element={<Events/>}/>
    <Route path='/updateList'element={<List/>}/>
    <Route path='/updateForm1' element={<Form1/>}/>




  </Routes>
  </BrowserRouter>
  )
}

export default App
