import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ES6 from './components/ES6'
import Form from './components/Form'
import State from './components/State'
import Counter from './components/Counter'
import Events from './components/Events'
import List from './components/List'
import Form1 from './components/Form1'
import RouterLink from './components/RouterLink'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Error from './components/Error'
import Dynamicroute from './components/Dynamicroute'
import Child from './components/Child'
import Props from './components/Props'
import Style from './components/style'
import Memo from './components/Memo'
import Memo1 from './components/Memo1'
import Memo2 from './components/Memo2'
import UseTask from './components/useTask'
import UseEffect from './components/useEffect'
import LoginForm from './components/LoginForm'
import RegisterForm from './components/RegisterForm'



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
    <Route path='/routerlink'element={<RouterLink/>}/>
    <Route path='/home'element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='*' element={<Error/>}/>
    <Route path='/Dynamicroute/:Name' element={<Dynamicroute/>}/>
    <Route path='/child' element={<Child/>}/>
    <Route path='/props' element={<Props/>}/>
    <Route path='/colormodules' element={<Style/>}/>
    <Route path='/updatememo' element={<Memo/>}/>
    <Route path='/updatememo1' element={<Memo1/>}/>
    <Route path='/updatememo2' element={<Memo2/>}/>
    <Route path='/usetask' element={<UseTask/>}/>
    <Route path='/useeffect' element={<UseEffect/>}/>
    <Route path='/loginform' element={<LoginForm/>}/>
    <Route path='/registerform' element={<RegisterForm/>}/>



  </Routes>
  </BrowserRouter>
  )
}

export default App
