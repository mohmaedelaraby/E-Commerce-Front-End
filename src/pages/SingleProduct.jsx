import React, { useEffect, useState  } from 'react'
import './Stayles.css'
import Footer from '../components/footer/Footer'
import Navbar from '../components/navebar/Navbar'
import NewSetller from '../components/NewSteller/NewSetller'
import Announcement from '../components/announcement/Announcement'
import styled from 'styled-components'
import { Add, Remove } from '@mui/icons-material'
import { useLocation } from 'react-router-dom'
import { publicRequest } from '../RequeistMethod'
import { addProduct } from '../redux/cartRedux'
import { useDispatch } from 'react-redux'


const ColorFilterSelect = styled.div`
    border-radius: 50%;
    width: 20px;
    height: 20px;
    background-color: ${probs=>probs.color};
    margin-left: 10px;
    cursor: pointer;
`

const AddContiner = styled.div`
width: 60%;
display: flex;
justify-content: space-between;
align-items: center;
    
`


const AmountContiner = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
    
`

const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin:0px 5px;

`

const Button = styled.button`
    padding: 15px;
    border: 2px solid teal;
    background-color: white;
    cursor: pointer;
    &:hover{
        background-color: #f8f4f4;
    }
    
`



function SingleProduct() {
    const location =useLocation();
    const id =location.pathname.split("/")[2];
    const [product,setProduct] = useState({});
    const [quantity, setQuantity] = useState(1);
    const [color, setColor] = useState("");
    const [size, setSize] = useState("");
    const disptach =useDispatch()
    useEffect(()=>{
        const getProduct = async()=>{
            try {
                const res = await publicRequest.get(`products/find/${id}`);
                setProduct(res.data)
                
            } catch (error) {
                console.log(error)
            }
        }
        getProduct()

    },[id])


    const handleQuantity = (type) => {
        if (type === "dec") {
          quantity > 1 && setQuantity(quantity - 1);
        } else {
          setQuantity(quantity + 1);
        }
      };
    
      const handleClick = () => {
          console.log("color :" ,color)
          console.log("size :" ,size)
          console.log("quinitity :" ,quantity)

          disptach(
              addProduct({...product,quantity,size,color})
          )
       
      };
    return (
        <div className='SingleProduct_container'>
            <Navbar/>
            <Announcement/>
            <div className='SP_wrapper'>
                <div className='SP_img_con'>
                    <img className='SP_img'
                    src={product.img}/>
                </div>
                <div className='SP_info_continaer'>
                    <h1 className='SP_title'> {product.titel}</h1>
                    <p className='SP_desc'> {product.desc}</p>
                    <span className='SP_Price'> {product.price}$</span>

                <div className='SP_Filter_Contianer'>


                <div className='SP_filter'> 
                <p className='SP_f_text'>COLOR : </p>
                {product.color?.map((c) => (
                <ColorFilterSelect color={c} key={c} onClick={()=>{setColor(c)}}/>))}
                
                </div>

                <div className='SP_filter'> 
                <p className='SP_f_text'>Size :</p>
                <select className='SP_select' onChange={(e)=>setSize(e.target.value)}>
                    <option disabled selected> Size </option>
                    {product.size?.map((s) => (
                  <option key={s} >{s}</option>
                ))}
                </select>
                </div>

            </div>

            <AddContiner>
                <AmountContiner>
                    <Remove onClick={() => handleQuantity("dec")} />   
                    <Amount>{quantity}</Amount>
                    <Add onClick={() => handleQuantity("inc")}/> 
                </AmountContiner>
                <Button onClick={handleClick}>ADD TO CART</Button>
            </AddContiner>
        
        </div>
            </div>
            <NewSetller/>
            <Footer/>
            
         
        </div>
    )
}

export default SingleProduct
