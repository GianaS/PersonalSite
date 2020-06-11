import React from 'react'
import styled from 'styled-components'

import SEO from '../components/seo'
import Layout from '../components/layout'

const Name = styled.p`
  font-size: 108px;
  font-weight: bold;
  margin-bottom: 0px;
`

const Subheading = styled.p`
  font-size: 30px;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`

const Home = (): JSX.Element => {
  return (
    <Layout>
      <Wrapper>
        <SEO title='Home Page' />
        <div>
          <Name>Giana Solviletti</Name>
          <Subheading>Software Engineer</Subheading>
        </div>
      </Wrapper>
    </Layout>
  )
}

export default Home