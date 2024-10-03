import React from 'react';
import styled from 'styled-components';
import Bounce from 'react-reveal/Bounce';
import LinkIcon from '@material-ui/icons/Link';
import GitHubIcon from '@material-ui/icons/GitHub';

function Projects() {
  return (
    <Container>
        <h2>My Projects</h2>
    <Project>
    <Bounce>
    <Wrap >
    <h3>Brainwave</h3>
    <p>It's the front page of an AI chatting website</p>
    <a href='https://brainwave-alpha-nine.vercel.app/'><LinkIcon /></a>
</Wrap>
    <Wrap>
    <h3>Disney Clone</h3>
    <p>You can login in with google. You can sign out by pressing on avatar top right corner and navigate to home. I used Reactjs and firebase</p>
    <a href='https://github.com/amayes1991/disney-clone'><GitHubIcon /></a>
    <a href='https://disney-clone-25e75.web.app/'><LinkIcon /></a>
</Wrap>
    <Wrap>
    <h3>Tesla Clone</h3>
    <p>It's a clone of the Tesla front page. I used Reactjs and Redux</p>
    <a href='https://github.com/amayes1991/tesla-clone' ><GitHubIcon /></a>
    <a href='https://tesla-clone-main-449k41vzz-amayes1991s-projects.vercel.app/'><LinkIcon /></a>
</Wrap>
    <Wrap>
    <h3>Newsletter App</h3>
    <p>It's a Newletters App that uses bootstrap on the front end. Back end uses node.js with express.js, and the Mailchimp API to store First name, Last name, and email from form. It puts them into Mailchimp account to be used for email campaign.</p>
    <a href=''><GitHubIcon /></a>
    <a href='https://blooming-chamber-70039.herokuapp.com/'><LinkIcon /></a>
</Wrap>
</Bounce>
</Project>
    </Container>
  )
}

export default Projects

const Container = styled.div`
h2{
    display:block;
    text-align:center;
    font-size:2em;
    color:white;
    margin-top:0px;
    padding:20px;
}
a{
    margin-right: 10px;
}
p{
    line-height:1.5;
}
background-image:url('https://images.unsplash.com/photo-1467685790346-20bfe73a81f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80');
`

const Project = styled.div`
display:flex;
flex-wrap: wrap;
justify-content:center;
`

const Wrap = styled.div`
margin:30px 20px 80px;
height: 300px;;
width: 300px;
border: 4px solid black;
border-radius:10px;
box-shadow: 10px 5px 10px #9254C8;
position:relative;
background-image: url('https://images.unsplash.com/photo-1524230572899-a752b3835840?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fGdyZXl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60');
padding: 10px;
a{
    margin-bottom:100%;
 
}

&:hover{
    box-shadow: 10px 20px 20px #9254C8;
}
`
