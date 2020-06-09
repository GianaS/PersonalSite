import React from 'react'
import styled from 'styled-components'

import SEO from '../components/seo'
import Layout from '../components/layout'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 130px;
`

const HomePage = (): JSX.Element => {
  return (
    <Layout>
      <Wrapper>
        <SEO title='Home Page' />
        <div>
          <h1>Hey hey, I'm Giana</h1>
          <p>I am a software engineer, mathematician <br/> & Beyoncé's biggest fan</p>
        </div>
      </Wrapper>
    </Layout>
  )
}

export default HomePage