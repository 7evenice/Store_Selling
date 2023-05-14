import React from 'react'
import dl from '../data/data.json'
import { useParams } from 'react-router-dom'
import '../css/sanpham.css'

export default function Detail() {
    let {id} = useParams();
    console.log(id);
    
  return (
    <div>
        {
            dl.map((value,key) => {
                if(value.id == id) {
                    return (
                        <div>
                            <h4> Tên Sản Phẩm: {value.name}</h4>
                            <p> Giá: {value.price}</p>
                            <img className='hinhsp' src={value.hinh}></img>
                        </div>
                    )
                }
            })
        }
    </div>
  )
}
