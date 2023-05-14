import React from 'react'
import dl from '../data/data.json'
import OneProduct from './OneProduct';

export default function Product() {
    // console.log(dl);
    
  return (
    <div>Sản Phẩm
    {
        dl.map((value,key) => {
            return <OneProduct 
                        ten={value.name} 
                        id={value.id}
                        />
        })
    }
    </div>
  )
}
