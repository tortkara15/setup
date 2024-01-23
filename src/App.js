import React from 'react'
import Navbar from './components/Navbar'
import Hero from './Hero'
import Sidebar from './components/Sidebar'
import Submenu from './components/Submenu'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Contacts from './pages/Contacts'
import Error from './pages/Error'
import SteelnessLists from './pages/SteelnessLists'
import Pipes from './pages/Pipes'
import Machines from './pages/Machines'
import Pomps from './pages/Pomps'
import SteelPipe from './pages/SteelPipe'
import Sensors from './pages/Sensors'
import Clapans from './pages/Clapans'
import MilkMachines from './pages/MilkMachines'
import Tanks from './pages/Tanks'
import Mixers from './pages/Mixers'
import Complexes from './pages/Complexes'

function App() {
  return (
    <>
    <Router>
     <Navbar/>
     <Sidebar/>
     <Routes>
        <Route exact path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
         <Route path="/SteelnessLists" element={<SteelnessLists />} />
         <Route path="/Pipes" element={<Pipes />} />
         <Route path="/Machines" element={<Machines />} />
         <Route path="/Pomps" element={<Pomps />} />
         <Route path="/SteelPipe" element={<SteelPipe />} />
         <Route path="/Sensors" element={<Sensors />} />
         <Route path="/Clapans" element={<Clapans />} />
         <Route path="/MilkMachines" element={<MilkMachines />} />
         <Route path="/Complexes" element={<Complexes />} />
         <Route path="/Mixers" element={<Mixers />} />
         <Route path="/Tanks" element={<Tanks />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="*" element={<Error />} />
      </Routes> 
     <Submenu/>
    </Router>
    </>
  )
}

export default App
