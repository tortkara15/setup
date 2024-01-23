import React from 'react'
import { useGlobalContext } from "../context";
import lists from '../lists';
import { useState } from 'react';




const SteelnessLists = ()=> {
    const {closeSubmenu, setShowInput, showInput} = useGlobalContext();
    const [sheets, setSheets] = useState(lists);
    
   
    
  function handleChange(e) {
    if(e.target.checked) {
       let name;
       name = e.target.name;
       let newSheets = sheets.filter((sheet)=> sheet.steel.includes(e.target.name));
       setSheets(newSheets);}
     if (e.target.checked===false) {
        setSheets(sheets)
     }
    };
return(
    <section className="section steelnessLists" onMouseOver={closeSubmenu}>
   <h3 className='' >Листы из нержавеющей стали</h3>
      <div className="filter">
    <ul className='inputs'>
       <li><button type='btn' className='btn' onClick={()=>setShowInput(true)}>{showInput? 
       <form>
        <button onClick={()=>setShowInput(false)}>Сталь</button>
        <div>
      <input type="checkbox" id='steel' name="AISI 304" onChange={handleChange}  />
      <label htmlFor='steel'>AISI 304</label>

      <input type="checkbox"  id='steel' name="AISI 201" onChange={handleChange}  />
      <label htmlFor='steel'>AISI 201</label>

      <input type="checkbox" id='steel' name="12X18H10T" onChange={handleChange}  />
      <label htmlFor='steel'>12X18H10T</label>
    </div>
      </form>:'Сталь'}</button></li>
       <li><button type='btn' className='btn'>Толщина</button></li>
       <li><button type='btn' className='btn'>Длина</button></li>
       <li><button type='btn' className='btn'>Ширина</button></li>
       <li><button type='btn' className='btn'>Поверхность</button></li>
    </ul>
   </div>
   <div className="products-container">
        {sheets.map((product) => {
       const {steel,image,cover, id, толщина, length, width} = product;
 return (
    <ul>
        <li key={id}>
            <a href="/" className='productItem-container'>
                <div className="img-container">
                <img src={image} alt='Нержавеющий лист' />
                </div>
                <span>Нержавеющий лист {`${толщина}мм х ${width}мм х ${length}мм сталь ${steel}, ${cover}`}</span>
                
                
            </a>
        </li>
    </ul>
 )
    })}
   </div>
    </section>
)
}
export default SteelnessLists;