import { FaEllipsisV } from "react-icons/fa";

import React from 'react';
const sublinks = [
  {
    page: 'Продукция',
    links: [
      { label: 'Листы из нержавеющей стали', icon: <FaEllipsisV />, url: '/SteelnessLists' },
      { label: 'Трубы и комплектующие из нержавеющей стали', icon: <FaEllipsisV />, url: '/Pipes' },
      { label: 'Оборудование', icon: <FaEllipsisV />, url: '/Machines' },
      
    ],
  },
  {
    page: 'О компании',
    links: [ {label:'О компании', url:'/About'}
      
    ],
  },
  {
    page: 'контакты',
    links: [{label:'Контакты',  url:'/Contacts'}
     
    ],
  },
];

export default sublinks
