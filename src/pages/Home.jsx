import React from 'react'
import Announcement from '../components/announcement/Announcement'
import Category from '../components/categorys/Category'
import Footer from '../components/footer/Footer'
import Navbar from '../components/navebar/Navbar'
import NewSetller from '../components/NewSteller/NewSetller'
import Products from '../components/products/Products'
import Slider from '../components/slider/Slider'

function Home() {
    return (
        <div>
           
            <Navbar/>
            <Announcement/>
            <Slider/>
            <Category/>
            <Products/>
            <NewSetller/>
            <Footer/>
        </div>
    )
}

export default Home
