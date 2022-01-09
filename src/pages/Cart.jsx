import { Add, Remove } from '@mui/icons-material';
import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import Announcement from '../components/announcement/Announcement'
import Footer from '../components/footer/Footer'
import Navbar from '../components/navebar/Navbar'
import {useSelector} from 'react-redux'
import { Link } from 'react-router-dom';
import StripeCheckout from 'react-stripe-checkout';
import { userRequest } from '../RequeistMethod';
import { useHistory } from 'react-router-dom';

const KEY ="pk_test_51KEHNkAFEwvcyB9ZsqVBce57oayD5OaRPbHEXFYRwDpUeA88pqU3srUXnJcQElDnwfgVmlNXZaAWb1jyOLV7GYEB00ZjPEm8FK"


const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`

`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;

const Links = styled(Link)`
  text-decoration: none;
  color: black;

`
const Error = styled.span`
  color: red;
  margin-left: 25px;
`;
function Cart() {
  const cart = useSelector(state => state.cart);
  const [stripeToekn ,SetStripeToken]=useState(null);

  const onToken=(token)=>{
    SetStripeToken(token);
  }

  console.log("striep token",stripeToekn)



  const history =useHistory()
  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await userRequest.post("/checkout/payment", {
          tokenId: stripeToekn.id,
          amount: 500,
        });
        history.push("/", {
          stripeData: res.data,
          products: cart, });
      } catch {}
    };
    stripeToekn && makeRequest();
  }, [stripeToekn, cart.total, history]);
    return (
        <div>
            <Container>
            <Navbar/>
            <Announcement/>
            
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton ><Links to="/" > CONTINUE SHOPPING </Links></TopButton>
          <TopTexts>
            <TopText>Shopping Bag {cart.quantity}</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            { cart.products.map(item=>( <Product>
              <ProductDetail>
                <Image src={item.img} />
                <Details>
                  <ProductName>
                    <b>Product:</b> {item.titel} 
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> {item._id}
                  </ProductId>
                  <ProductColor color={item.color} />
                  <ProductSize>
                    <b>Size:</b> {item.size}
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>{item.quantity}</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>${item.price *item.quantity}</ProductPrice>
              </PriceDetail>
            </Product>))
            
            }
            <Hr />
             </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 10</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ 30</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ {cart.total - 20}</SummaryItemPrice>
            </SummaryItem>

            <StripeCheckout 
            name='ECO SHOP'
            billingAddress
            shippingAddress
            description={`Your total is ${cart.total}`}
            amount={cart.total *100}
            stripeKey={KEY} 
            token={onToken}>
            <Button>CHECKOUT NOW</Button>
            
            </StripeCheckout>

            <Error><strong>WARINING</strong> ...DONT ENTER REAL DATA ...</Error>
            <br/>
            <Error>user 4242 4242 4242 4242 as VISA , </Error>
            
            <Error>08/24 as date , </Error>
            
            <Error>123 as cva</Error>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
            
        </div>
    )
}

export default Cart
