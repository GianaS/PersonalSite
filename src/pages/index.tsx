import React from 'react'
import styled from 'styled-components'

import SEO from '../components/seo'
import Layout from '../components/layout'
import colors from '../styles/colors'

const HomeWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 0 20%;
`

const Name = styled.p`
  font-size: calc(65px + (130 - 65) * ((100vw - 300px) / (2000 - 300)));
  font-weight: bold;
  margin-bottom: 0px;
  line-height: 1em;
  color: ${colors.black};
`

const Subheading = styled.p`
  font-size: calc(20px + (30 - 20) * ((100vw - 300px) / (2000 - 300)));
  color: ${colors.green};
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