import React from 'react'
import { useGlobalContext } from "../context";
import products from "../products";



const Mixers = ()=> {
    const {closeSubmenu} = useGlobalContext();
return(
    <section className="section steelnessLists" onMouseOver={closeSubmenu}>
   <h3 className='' >Перемешивающее оборудование</h3>
   <div className="products-container">
    {products.map((product) => {
 const {name,image,desc, category, id} = product;
 return (
    <ul>
        <li key={id}>
            <a href="/" className='productItem-container'>
                <div className="img-container">
                <img src={image} alt={name} />
                </div>
                <span>{name}</span>
                <h5>{category}</h5>
                <p className='productItem-desc'>{desc}</p>
            </a>
        </li>
    </ul>
 )
    })}
   </div>
    </section>

)
}
export default Mixers;