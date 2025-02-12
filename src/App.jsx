import { useState } from 'react'
import './App.css'
import HtmlEditor from './components/HtmlEditor.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignUp from './pages/SignUp.jsx'
import NoPage from './pages/NoPage.jsx'
import Home from './pages/Home.jsx'
import CssHome from './components/css/CssHome.jsx'
import Navbar from './components/Navbar.jsx'
import JsHome from './components/js/JsHome.jsx'
import DomHome from './components/dom/DomHome.jsx'
import HtmlHome from './components/html/HtmlHome.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/singup' element={<SignUp />} />
        <Route 
          path='/csscourse'
          element={<CssHome />}
        />
        <Route 
          path='/jscourse'
          element={<JsHome />}
        />
        <Route 
          path='/domcourse'
          element={<DomHome />}
        />
        <Route 
          path='/reactjscourse'
          element={<DomHome />}
        />
        <Route 
          path='/nodejscourse'
          element={<DomHome />}
        />
        <Route 
          path='/htmlcourse'
          element={<HtmlHome />}
        />
        <Route path='*' element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
