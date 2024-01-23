import React from 'react'
import { useGlobalContext } from "../context";

const About = ()=> {
    const {closeSubmenu} = useGlobalContext();
return(
    <section className="about" onMouseOver={closeSubmenu}>
        
          <h2>About</h2>
        
    </section> 
)
}
export default About;