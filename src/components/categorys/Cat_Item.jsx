import React from 'react'
import { Link } from 'react-router-dom'
import './Cat_Item.css'

function Cat_Item({item}) {
    return (
        
        <div className='item_container'>
            <Link to={`/products/${item.cat}`}>
            <img className='item_img' src={item.img}/>
            <div className='item_info'>
                <h1 className='title'>{item.title}</h1>
                <button className='item_button'>SHOP NOW</button>  
            </div>
            </Link>
        </div>
      
    )
}

export default Cat_Item
