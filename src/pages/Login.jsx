
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import login from '../redux/apiCalls'

const Contanier= styled.div`
     width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Wrabber= styled.div`
padding: 20px;
width: 30%;
background-color: white;
    
`
const Title= styled.h1`
    font-weight: 300;
    font-size: 24px;
`
const Form= styled.form`
display: flex;
flex-direction: column;
    
`
const Inputs= styled.input`
    flex: 1;
    min-width: 40%;
    margin:10px 0px;
    padding: 10px;
`

const BUtton= styled.button`
padding: 20px;
border: none;
width: 40%;
color: white;
background-color: teal;
cursor: pointer;
    
`
const Error = styled.span`
  color: red;
`;
const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

function Login() {
    const [username , setUsername] = useState();
    const [password , setpassword] = useState();
    const dispatch =useDispatch()
    const { isFetching, error } = useSelector((state) => state.user);

    const handleLogin =(e)=>{
        e.preventDefault();
        login(dispatch,{username,password})
    }

    return (
        <Contanier>
            <Wrabber>
                <Title>LOGIN</Title>
                <Form>
                    <Error>You Could Login with " test " as both username & password</Error>
                    <Inputs placeholder='user name' onChange={(e)=>setUsername(e.target.value)}></Inputs>
                    <Inputs placeholder='password' type="password" onChange={(e)=>setpassword(e.target.value)}></Inputs>
                   
                    <BUtton onClick={handleLogin} disabled={isFetching}>SIGN IN</BUtton>
                    {error && <Error>Something went wrong...</Error>}

                    <Link>FORGET YOUR PASSWORD</Link>
                    <Link>CREATE A NEW ACCOUNT</Link>
                </Form>
            </Wrabber>
        </Contanier>
    )
}

export default Login
