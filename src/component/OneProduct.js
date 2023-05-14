import React from 'react'
import { Link } from 'react-router-dom'
import '../css/sanpham.css'
export default function OneProduct(props) {
  return (
    <div>
        <Link to ={"/product/" + props.id}>Tên sản phẩm: {props.ten}</Link>
    </div>
  )
}
