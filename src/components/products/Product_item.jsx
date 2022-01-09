import React from 'react'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import './Product_item.css'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  border-radius: 50%;
  cursor: pointer;

  
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  margin:5px;
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  border-radius: 30px;
 
  position: relative;
  &:hover ${Info}{
    opacity: 1;
    border-radius: 50%;
    transform: scale(1.1);
  }
  
`;

const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;

const Image = styled.img`
  height: 75%;
  z-index: 2;
  margin-left: 23px;
  margin-top: 10px;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;


function Product_item({item}) {
    return (
        <Container>
            <Circle>
            <Image src={item.img}></Image>
            <Info>
                <Icon><ShoppingCartOutlinedIcon /></Icon>
                <Icon><Link to={`/product/${item._id}`} ><SearchOutlinedIcon /></Link></Icon>
                <Icon><FavoriteBorderOutlinedIcon/></Icon>
            </Info>
        </Circle> 
        </Container>
    )
}

export default Product_item
