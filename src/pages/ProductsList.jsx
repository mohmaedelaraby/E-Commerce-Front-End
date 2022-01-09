import React, { useState } from 'react'
import Navbar from '../components/navebar/Navbar'
import Announcement from '../components/announcement/Announcement'
import './Stayles.css'
import NewSetller from '../components/NewSteller/NewSetller'
import Products from '../components/products/Products'
import Footer from '../components/footer/Footer'
import { useLocation } from 'react-router-dom'
function ProductsList() {
    const location =useLocation();
    const cat =location.pathname.split("/")[2];
    const [filter,setFilter]=useState({})
    const [sort,setSort]=useState("newest")
    const handleFilter =(e)=>{
        const value = e.target.value
        setFilter({
            ...filter,
            [e.target.name]:value
        })
    }
    return (
      
        <div className='ProductList_con'>
            <Navbar/>
            <Announcement/>
            <h1 className='F_title'> {cat}</h1>
            <div className='Filter_Contianer'>
                <div className='filter'> 
                <p className='f_text'>Filter Products :</p>
                <select name='color' className='select' onChange={handleFilter}>
                    <option disabled > Color </option>
                    <option>White</option>
                    <option>Balck</option>
                    <option>Gray</option>
                    <option>Red</option>
                    <option>Blue</option>
                    <option>Pink</option>
                    <option>Yellow</option>
                    <option>Green</option>
                </select>


                <select name='size' className='select' onChange={handleFilter}>
                     <option disabled > Size </option>
                    <option>XS</option>
                    <option>S</option>
                    <option>M</option>
                    <option>L</option>
                    <option>XL</option>
                    <option>XXL</option>
                </select>
            </div>
                <div  className='filter'>
                     <p className='f_text'>Sort Products :</p>
                     <select  className='select' onChange={(e)=>setSort(e.target.value)}>
                     <option value="newest"> Newest </option>
                    <option value="asc"> Price (Low -> High)</option>
                    <option value="desc">Price (High -> Low)</option>
                    </select>
                     
                </div>
            </div>
            <Products cat={cat} filters={filter} sort={sort}/>
            <NewSetller/>
            <Footer/>
        </div>
    )
}

export default ProductsList
