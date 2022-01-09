import React  from 'react'
import './Navbar.css'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Badge } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom';
import {useSelector} from 'react-redux'




function Navbar() {
    const quantity = useSelector(state=>state.cart.quantity);
    console.log("quintty =>>" , quantity)
    return (
        <div className='nav-continer'>
            <div className='wrapper'>
                <div className='left'>
                    <span className='languages'>EN</span> 
                    <div className='search-container'>
                        <input placeholder='Search for item'/>
                        <SearchOutlinedIcon className='search_icon'/>
                    </div>
                 </div>
                <div className='center'> <Link className='logo' to="/"> <h1>ECO</h1> </Link></div>
                <div className='right'>
                    <Link to="/login" className='menu-item'>LOGIN</Link>
                    <Link to="/register" className='menu-item'>REGISTER</Link>
                    <Link to="/cart">
                    <Badge className='menu-item' badgeContent={quantity} color='primary'>
                        <ShoppingCartOutlinedIcon/>
                    </Badge>
                    </Link>
                 </div>
            </div>
        </div>
    )
}

export default Navbar
