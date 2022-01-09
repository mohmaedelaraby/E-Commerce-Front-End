import React, { useState } from 'react'
import './Slider.css'
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { Slider_items } from '../../Data';
import styled from 'styled-components';
import { mobile } from '../../responsive';



const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden; 
  ${mobile({ display: "none" })};
 
  `


const Slider_Wrapper = styled.div`

height: 100%;
display: flex;
transition: all 1.5s ease;
transform: translateX(${(props) => props.slideindex * -100}vw);

`



function Slider() {
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {
      if (direction === "left") {
        setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
      } else {
        setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
      }
    };

 

    return (
        <Container onClick={()=>handleClick("left")}>
            <span className='ArrowL'> <ArrowLeftIcon/> </span>
            <Slider_Wrapper slideindex={slideIndex}>
                {
                    Slider_items.map((item)=>(
                    <div  className={`slide ${item.bg}`} key={item.id}>
                         <div className='img_contianer'>
                            <img className='cloth_img' src={item.img} alt='img1'/>
                        </div>
                        <div className='info_contianer'>
                            <h1>{item.title}</h1>
                            <p>{item.desc} </p>
                            <button>SHOP NOW </button>
                        </div>
                    </div>
                     ))
                }
            </Slider_Wrapper>
            <span className='ArrowR' onClick={()=>handleClick("right")}> 
            <ArrowRightIcon/> 
            </span>        
        </Container>
    )
}

export default Slider
