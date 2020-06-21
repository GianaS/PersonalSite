import React from 'react'
import styled from 'styled-components'
import { Image, Grid } from 'semantic-ui-react'

import SEO from '../components/seo'
import Layout from '../components/layout'

const HomeWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 0 20%;
`

const Name = styled.p`
  font-size: 130px;
  font-weight: bold;
  margin-bottom: 0px;
  line-height: 1em;
  color: #02020A;
`

const Subheading = styled.p`
  font-size: 30px;
  color: #06A77D;
`

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  color: #261447;
`

const Home = (): JSX.Element => {
  return (
    <Layout>
      <HomeWrapper>
        <SEO title='Home Page' />
        <TitleWrapper>
          <Name>Giana</Name>
          <Name>Solviletti</Name>
          <Subheading>Software Engineer</Subheading>
        </TitleWrapper>
      </HomeWrapper>
    </Layout>
  )
}

export default Home