import React from 'react'
import styled from 'styled-components'

import SEO from '../components/seo'

const Wrapper = styled.div`
  background-color: black;
  display: flex;
  justify-content: center;
  height: 100vh;
  align-items: center;
`

const Home = (): JSX.Element => {
    return <Wrapper>
      <SEO title="Coming Soon" />
      <img
        src='../images/coming-soon.jpg'
        alt='lemon'
        width='500'
        height='260' 
      />
    </Wrapper>
}

export default Home