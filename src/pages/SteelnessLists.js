import React from 'react'
import { useGlobalContext } from "../context";
import lists from '../lists';
import checkboxData from './checkboxData';
import { useState } from 'react';




  const SteelnessLists = ()=> {
    const {closeSubmenu, setShowInput, showInput} = useGlobalContext();
    const [sheets, setSheets] = useState(lists);
    const [category, setCategory] = useState(checkboxData)
    const [checkedState, setCheckedState] = useState(new Array(category.length).fill(false));
    const [selectedValues, setSelectedValues] = useState([]);
    const handleOnChange= (position)=> {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    )
    setCheckedState(updatedCheckedState);}
   
    const handleChange = (event) => {
    const value  = event.target.name;
    //console.log(event.target.name);
    
    setSelectedValues(prevValues => {
      
      if (prevValues.includes(value)) {
        // If the checkbox was previously selected, remove it from the array
        return prevValues.filter(prevValue => prevValue !== value);
      } else {
        // If the checkbox was not previously selected, add it to the array
        return [...prevValues, value];
      }
    })
    };
    let result = sheets.filter(( {steel: arr}) => arr.some(steel => selectedValues.includes(steel)));
    console.log(result);

   
return(
    <section className="section steelnessLists" onMouseOver={closeSubmenu}>
   <h3 className='' >Листы из нержавеющей стали</h3>
      <div className="filter">
    <ul className='inputs'>
       <li><button type='btn' className='btn' onClick={()=>setShowInput(true)}>{showInput? 
       <form>
        <button onClick={()=>setShowInput(false)}>Сталь</button>
        <div>
          <ul>
            {category.map((category,index) => {
              return(
                <li><input type="checkbox" id={`custom-checkbox-${index}`} name={category} 
                onChange={() => handleOnChange(index)} checked={checkedState[index]} onClick={handleChange}  />
                <label htmlFor={`custom-checkbox-${index}`}>{category}</label></li>
              )
            })}
            </ul>
             </div>
      </form>:'Сталь'}</button></li>
          </ul>
      {/* 
   
       <li><button type='btn' className='btn'>Толщина</button></li>
       <li><button type='btn' className='btn'>Длина</button></li>
       <li><button type='btn' className='btn'>Ширина</button></li>
       <li><button type='btn' className='btn'>Поверхность</button></li>
    </ul> */}
   </div>
   <div className="products-container">
         {result.length>0?result.map((product)=>{
         const {steel,image,cover, id, толщина, length, width} = product;
            return (
          <ul>
        <li key={id}>
            <a href="/" className='productItem-container'>
                <div className="img-container">
                <img src={image} alt='Нержавеющий лист' />
                </div>
                <span>Нержавеющий лист {`${толщина}мм х ${width}мм х ${length}мм сталь ${steel[0]}, ${cover}`}</span>
            </a>
        </li>
         </ul>
           )
          }) :

        sheets.map((product) => {
       const {steel,image,cover, id, толщина, length, width} = product;
 return (
    <ul>
        <li key={id}>
            <a href="/" className='productItem-container'>
                <div className="img-container">
                <img src={image} alt='Нержавеющий лист' />
                </div>
                <span>Нержавеющий лист {`${толщина}мм х ${width}мм х ${length}мм сталь ${steel[0]}, ${cover}`}</span>
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