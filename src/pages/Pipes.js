import React from 'react'
import { useGlobalContext } from "../context";

const Pipes = ()=> {
    const {closeSubmenu} = useGlobalContext();
return(
    <section className="pipes section" onMouseOver={closeSubmenu}>
        <div className="pipes-container">
        <h3>Трубы и комплектующие из нержавеющей стали</h3>
          <div className="pipes-links">
          <a href="/SteelPipe">
            <h4>Трубы</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Quia facilis pariatur laudantium recusandae temporibus! 
                Eum iure molestias quia labore doloribus aliquam fugiat? 
                Ut repudiandae amet quam voluptate animi quis ratione, 
                </p>
            </a>
             <a href="/Pomps">
            <h4>Насосы</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Quia facilis pariatur laudantium recusandae temporibus! 
                Eum iure molestias quia labore doloribus aliquam fugiat? 
                Ut repudiandae amet </p>
            </a>
             <a href="/Sensors">
            <h4>Датчики</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Quia facilis pariatur laudantium recusandae temporibus! 
                Eum iure molestias quia labore doloribus aliquam fugiat? 
                Ut repudiandae amet quam voluptate animi quis ratione, 
                nostrum dolore perspiciatis optio ea voluptatem sequi 
                </p>
            </a>
              <a href="/Clapans">
            <h4>Клапаны и арматура</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Quia facilis pariatur laudantium recusandae temporibus! 
                Eum iure molestias quia labore doloribus aliquam fugiat? 
                Ut repudiandae amet quam voluptate animi quis ratione, 
                nostrum dolore perspiciatis optio ea voluptatem sequi 
                </p>
            </a>
         
            </div>
        </div>
         
    </section> 
)
}
export default Pipes;