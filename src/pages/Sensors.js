import React from 'react'
import { useGlobalContext } from "../context";
import sensors from "../sensorsData";



const Sensors = ()=> {
    const {closeSubmenu} = useGlobalContext();
return(
    <section className="section steelnessLists" onMouseOver={closeSubmenu}>
   <h3 className='' > Датчики</h3>
   <div className="products-container">
    {sensors.map((sensor) => {
 const {name,image,category, id} = sensor;
 return (
    <ul>
        <li key={id}>
            <a href="/" className='productItem-container'>
                <div className="img-container">
                <img src={image} alt={name} />
                </div>
                <span>{name}</span>
                <h5>{category}</h5>
                {/* <p className='productItem-desc'>{desc}</p> */}
            </a>
        </li>
    </ul>
 )
    })}
   </div>
    </section>

)
}
export default Sensors;