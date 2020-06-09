import React from 'react'
import styled from 'styled-components'

import Header from './header'


const Contents = styled.main`
  width: 100vw;
  height: 100vh;
`

type LayoutProps = {
  children: React.ReactChild
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <Contents>
        {children}
      </Contents>
    </>
  )
}

export default Layout
