import React from 'react'
import { useGlobalContext } from "../context";

const Machines = ()=> {
    const {closeSubmenu} = useGlobalContext();
return(
    <section className="pipes section" onMouseOver={closeSubmenu}>
        <div className="pipes-container">
        <h3>Оборудование</h3>
          <div className="pipes-links">
          <a href="/Mixers">
            <h4>Перемешивающее оборудование</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Quia facilis pariatur laudantium recusandae temporibus! 
                Eum iure molestias quia labore doloribus aliquam fugiat? 
                Ut repudiandae amet quam voluptate animi quis ratione, 
                </p>
            </a>
             <a href="/Tanks">
            <h4>Емкостное оборудование</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Quia facilis pariatur laudantium recusandae temporibus! 
                Eum iure molestias quia labore doloribus aliquam fugiat? 
                Ut repudiandae amet </p>
            </a>
             <a href="/Complexes">
            <h4>Комплексные решения</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Quia facilis pariatur laudantium recusandae temporibus! 
                Eum iure molestias quia labore doloribus aliquam fugiat? 
                Ut repudiandae amet quam voluptate animi quis ratione, 
                nostrum dolore perspiciatis optio ea voluptatem sequi 
                </p>
            </a>
              <a href="/MilkMachines">
            <h4>Доильное оборудование</h4>
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
export default Machines;