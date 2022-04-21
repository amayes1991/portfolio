import React from 'react';
import styled from 'styled-components';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';

function Footer() {
  return (
    <Container>
    <Icons>
    <Wrap>
    <LinkedInIcon />
    </Wrap>
    <Wrap>
    <InstagramIcon />
    </Wrap>
    <Wrap>
    <FacebookIcon />
    </Wrap>
    </Icons>
    <p>Copyright Austin Mayes</p>
    </Container>
  )
}

export default Footer


const Container = styled.div`
display:flex;
flex-direction: column;
justify-content:center;
align-items:center;
color:white;
background-color:black;
`

const Icons =styled.div`
margin: 50px;
display:flex;
`
const Wrap = styled.div`
margin-right:16px;
cursor:pointer;
&:hover{
    transform:scale(2);
}
`