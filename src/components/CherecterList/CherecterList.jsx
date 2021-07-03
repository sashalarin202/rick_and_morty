import React from 'react';
import CherecterItem from '../CherecterItem/CherecterItem'
import './CherecterList.css'


export default function CherecterList ({ items }) {


  return (
    <div className="area">
      <div className="CherecterList">
        {items.map((item) => (
          
            <CherecterItem key={item.id} item={item} />
          ))
        }
      

    </div>
  </div>
  );
}

