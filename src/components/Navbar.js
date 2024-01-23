import React from 'react'
import { FaBars } from 'react-icons/fa'
import {useGlobalContext} from '../context';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


const Navbar = () => {
  const {openSidebar, openSubmenu, closeSubmenu} = useGlobalContext();

  const displaySubmenu = (e) => {
    const page = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect();
    const center = (tempBtn.left+tempBtn.right)/2;
    const bottom = tempBtn.bottom-3;
    openSubmenu(page, {center, bottom});
  }
  const handleSubmenu = (e) => {
    if (!e.target.classList.contains('link-btn')) {
      closeSubmenu();
    }
  }
  return (
    <nav className="nav" onMouseOver={handleSubmenu}>
      <div className="nav-center">
        <div className="nav-header">
           <h4 className='nav-header_title'> <a href="/">ТОО "CSI-ASTANA"</a></h4>
           <button className="btn toggle-btn" onClick={openSidebar}>
            <FaBars/>
           </button>
        </div>
        <ul className="nav-links">
          <li>
             <button className="link-btn" onMouseOver={displaySubmenu}>
                Продукция
             </button>
          </li>
          <li>
             <button className="link-btn" >
               <a href="./About">О нас</a> 
             </button>
          </li>
          <li>
             <button className="link-btn" >
               <a href="/Contacts">контакты</a> 
             </button>
          </li>
        </ul>
       
      </div>
    </nav>
  )
}

export default Navbar
