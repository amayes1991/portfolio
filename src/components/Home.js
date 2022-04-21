import React from 'react';
import Main from './Main';
import styled from 'styled-components';
import About from './About';
import Projects from './Projects';
import Footer from './Footer';


function Home() {
  return (
     <Conatiner> 
    <Main />

    <About />
    <Projects />
    <Footer />
    </Conatiner>

  )
}

export default Home

const Conatiner = styled.div`
`