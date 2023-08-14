import 'bootstrap/dist/css/bootstrap.min.css'
import Navs from './components/Navs'
import Home from './pages/Home'
import Certificate from './components/Certificate'
import Consulmen from './pages/Consulmen'
import ConsulmenDetail from './pages/ConsulmenDetail'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import Footer from './components/Footer'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Login from './pages/Login'
import PrivateRouter from './router/PrivateRouter'
import About from './components/About'
import { useState } from 'react'


function App() {
  const [user, setUser] = useState(
    JSON.parse(sessionStorage.getItem("user")) || false
  );
  return (
    <BrowserRouter>
    <Navs/>
    <Routes>
     <Route  path="/" element={<Home/>}>
      <Route  element={<About/>}/>
      <Route  path="/certificate" element={<Certificate/>}/>
     </Route>
     <Route element={<PrivateRouter user={user}/>}>
     <Route path="/consulmen" element={<Consulmen/>}/>
     <Route  path="/consulmen/:id" element={<ConsulmenDetail/>}/>
     </Route>
     <Route path="/contact" element={<Contact/>}/>
     <Route path="/login" element={<Login setUser={setUser}/>}/>
     <Route  path="*" element={<NotFound/>}/>
    </Routes>
    <Footer/>
    
    </BrowserRouter>
  )
}

export default App
