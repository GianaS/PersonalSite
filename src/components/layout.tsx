import React from 'react'
import styled from 'styled-components'

import Header from './header'


const Contents = styled.main`
  width: 100%;
  height: 100%;
`

const LayoutWrapper = styled.div`
  height: 100vh;
`

type LayoutProps = {
  children: React.ReactChild
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <LayoutWrapper>
      <Header />
      <Contents>
        {children}
      </Contents>
    </LayoutWrapper>
  )
}

export default Layout
