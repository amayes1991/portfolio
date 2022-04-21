import React from 'react';
import styled from 'styled-components';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import Zoom from 'react-reveal/Zoom';
import { ZoomIn } from '@material-ui/icons';




function Main() {
  return (
<Container>


    <Content>
<Zoom>
<h1>I'm Austin Mayes</h1>
</Zoom>
<p>Passionate <span>Web Developer.</span> I eat sleep and breathe React.</p>

<Icons>
    <a><LinkedInIcon /></a>
    <a><InstagramIcon /></a>
    <a><FacebookIcon /></a>
    </Icons>


    </Content>

    </Container>
    )
}

export default Main


const Menu = styled.div`
display:flex;
justify-content: center;
text-decoration: none;

a{

    padding: 5px;

    &:hover{
        color: purple;
        cursor:pointer;
    }
}
`
const Content = styled.div`
font-size: 2em;
text-align:center;
margin-top: 250px;

p{
    font-size:15px;
    color: black;
    font-weight:bold;
}

span{
    text-decoration:underline;
    color:white;
    font-size:30px;
}
`

const Container = styled.div`
position: relative;
display:flex;
flex-direction:column;
min-height: 100vh;
color:white;
background-image: url('https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80');
background-position:top;
background-size: cover;
background-repeat: no-repeat;
`


const Icons = styled.div`
margin-top: 30px;
cursor:pointer;
a{
    margin-right:10px;
    &:hover{
        color:black;
    } 
}
`