import React from 'react'
import { categories } from '../../Data'
import './Category.css'
import Cat_Item from './Cat_Item'

function Category() {
    return (
        <div className='catgory_continer'>
            {
                categories.map((item)=>(
                    <Cat_Item item={item} key={item.id}/>
                )
                )

            }
        </div>
    )
}

export default Category
