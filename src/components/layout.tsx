import React from 'react'
import { Grommet } from 'grommet'
import styled from 'styled-components'

import Header from './header'

const theme = {
  global: {
    font: {
      family: 'Arial'
    }
  }
}

const Contents = styled.div`
  width: 100vw;
  height: 100vh;
`

type LayoutProps = {
  children: React.ReactChild
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Grommet theme={theme}>
      <Header />
      <Contents>
        <main>{children}</main>
      </Contents>
    </Grommet>
  )
}

export default Layout
