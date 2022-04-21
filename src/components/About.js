import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

function About() {
  return (
    <Container>
    <img src='/man-2.png'/>
    <Fade bottom>
    <Aboutme>

<h2>About Me</h2>
<p>I've always been fascinated with coding and creating. This drive has lead me to continue to grow and learn. So now I design web applications. I enjoy solving problems and figuring out the solutions. I am a self starter and always focused on becoming a better Developer.</p>
    </Aboutme>
    <Skills>
<h2>Skills</h2>
<Column>

<Column1>
<p>-HTML</p>
<p>-CSS</p>
<p>-JAVASCRIPT</p>
<p>-JQUERY</p>
<p>-MONGODB</p>
<p>-EXPRESS.JS</p>
<p>-NODE.JS</p>
</Column1>
<Column2>
<p>-GIT</p>
<p>-GITHUB</p>
<p>-REACT</p>
<p>-REDUX</p>
</Column2>
</Column>
    </Skills>
    </Fade>
    </Container>
  )
}

export default About
const Container = styled.div`

background-color:#EFEFEF;
display:flex;
flex-direction:column;
align-items:center;
color:black;
position:relative;
img{
    height:150px;
    position:absolute;
    margin-right: 800px;
    margin-top:100px;
}
h2{
  text-align:center;
}

`

const Aboutme = styled.div`
position:relative;
p{
    width:400px;
    line-height:2;
}
`

const Skills = styled.div`
`
const Column = styled.div`
display:flex;
`
const Column1 = styled.div`
margin-right:250px;
`

const Column2 = styled.div`
`