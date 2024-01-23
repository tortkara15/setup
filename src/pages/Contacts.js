import React from 'react'
import { useGlobalContext } from "../context";


const Contacts = ()=> {
    const {closeSubmenu} = useGlobalContext();
return(
    <section className="contacts" onMouseOver={closeSubmenu}>
        
          <h2>Contacts</h2>
        
    </section> 
)
}
export default Contacts;