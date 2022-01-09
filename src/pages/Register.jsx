import React from 'react'
import styled from 'styled-components'


const Contanier= styled.div`
     width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Wrabber= styled.div`
padding: 20px;
width: 50%;
background-color: white;
    
`
const Title= styled.h1`
    font-weight: 300;
    font-size: 24px;
`
const Form= styled.form`
display: flex;
flex-wrap: wrap;
    
`
const Inputs= styled.input`
    flex: 1;
    min-width: 40%;
    margin:20px 10px 0px 0px;
    padding: 10px;
`

const Aggrement= styled.span`
margin:20px 0px ;
font-size: 12px;
    
`

const BUtton= styled.button`
padding: 20px;
border: none;
width: 40%;
color: white;
background-color: teal;
cursor: pointer;
    
`

function Register() {
    return (
        <Contanier>
            <Wrabber>
                <Title>CREATE AN ACCOUNT</Title>
                <Form>
                    <Inputs placeholder='first name'></Inputs>
                    <Inputs placeholder='last name'></Inputs>
                    <Inputs placeholder='email'></Inputs>
                    <Inputs placeholder='user name'></Inputs>
                    <Inputs placeholder='password'></Inputs>
                    <Inputs placeholder='confirm password'></Inputs>
                    <Aggrement>By creating an account , I consest to the prossecing 
                        of my personl data in accordence with the <b>PRIVCY POLCIY</b>
                    </Aggrement>
                    <BUtton>CREATE</BUtton>
                </Form>
            </Wrabber>
        </Contanier>
    )
}

export default Register
