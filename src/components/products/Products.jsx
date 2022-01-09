import React, { useEffect, useState } from 'react'
import { popularProducts } from '../../Data'
import Product_item from './Product_item'
import axios from 'axios'
import './Proucts.css'

function Products({cat,filters,sort}) {
    const [prodcuts ,setproducts]=useState([]);
    const [filterdProducts,setFilterdProducts] =useState([]);
    
    useEffect(()=>{
        const getProdcuts = async()=>{
            try {
                const res = await axios.get(cat? `https://eco-mern-api.herokuapp.com/api/products?category=${cat}` :
                 "https://eco-mern-api.herokuapp.com/api/products");
                setproducts(res.data)
                
            } catch (error) {
                console.log(error)
            }
        }
        getProdcuts()
    },[cat])


    useEffect(()=>{
        cat && setFilterdProducts(
            prodcuts.filter(
                item=> Object.entries(filters).every(
                ([key,value])=>item[key].includes(value)
                ) 
            )
        )

    },[prodcuts,cat,filters])


    useEffect(() => {
        if (sort === "newest") {
          setFilterdProducts((prev) =>
            [...prev].sort((a, b) => a.createdAt - b.createdAt)
          );
        } else if (sort === "asc") {
            setFilterdProducts((prev) =>
            [...prev].sort((a, b) => a.price - b.price)
          );
        } else {
            setFilterdProducts((prev) =>
            [...prev].sort((a, b) => b.price - a.price)
          );
        }
      }, [sort]);
    
    return (
        <div className='Products_cont'>
            { cat ?( filterdProducts.map(item=>(
                    <Product_item item={item} key={item.id}/>
                ))):(
                    prodcuts.slice(0 ,8).map(item=>(
                        <Product_item item={item} key={item.id}/>)
                ))
               

            }
            
        </div>
    )
}

export default Products
