import React from 'react'
import styled from 'styled-components'

import SEO from '../components/seo'
import { ComingSoonImage } from '../components/image'

const Wrapper = styled.div`
  background-color: black;
  width: 100vw;
  height: 100vh;
`

const Home: React.FC = () => {
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
        <ComingSoonImage />
      </div>
    </Wrapper>
}

export default Home