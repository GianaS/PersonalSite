import React from 'react'
import styled from 'styled-components'

import SEO from '../components/seo'

const Wrapper = styled.div`
  background-color: black;
  width: 100vw;
  height: 100vh;
`

const Home = (): JSX.Element => {
    return <Wrapper>
      <SEO title="Coming Soon" />
      <div
        style={{
          position: 'fixed',
          top:  '50%',
          left: '50%',
          transform: 'translate(-50%,-50%)'
        }}
      >
      <img
        src='../images/coming-soon.jpg'
        alt='lemon'
        width='500'
        height='260' 
      />
      </div>
    </Wrapper>
}

export default Home