import React from 'react'
import styled from 'styled-components'

import SEO from '../components/seo'
import Layout from '../components/layout'

const Name = styled.p`
  font-size: 108px;
  font-weight: bold;
  margin-bottom: 0px;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`

const About = (): JSX.Element => {
  return (
    <Layout>
      <Wrapper>
        <SEO title='Home Page' />
        <div>
          <Name>About Page</Name>
        </div>
      </Wrapper>
    </Layout>
  )
}

export default About