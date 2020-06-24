import React from 'react'
import styled from 'styled-components'
import { Image, Transition } from 'semantic-ui-react'

import Navbar from './navbar'
import MobileNavbar from './mobile-navbar'
import { useMedia } from '../utilities'

const LayoutWrapper = styled.div`
  height: 100vh;
`

const Contents = styled.main`
  width: 100wh;
  height: 100vh;
`

const LemonLeaf = styled(Image)`
  position: absolute !important;
  right: 0%;
  top: 10%;
  z-index: -1;
  width: calc(120px + (270 - 120) * ((100vw - 300px) / (2000 - 300)));
`

const HalfLemon = styled(Image)`
  position: absolute !important;
  left: 10%;
  top: 0%;
  z-index: -1;
  width: calc(100px + (205 - 100) * ((100vw - 300px) / (2000 - 300)));
`

const TwoLemons = styled(Image)`
  position: absolute !important;
  left: 3%;
  bottom: 7%;
  z-index: -1;
  width: calc(100px + (202 - 100) * ((100vw - 300px) / (2000 - 300)));
`

const WholeLemon = styled(Image)`
  position: absolute !important;
  bottom: 0%;
  right: 5%;
  z-index: -1;
  width: calc(110px + (202 - 110) * ((100vw - 300px) / (2000 - 300)));
`

type LayoutProps = {
  children: React.ReactChild
}

const Layout = ({ children }: LayoutProps): JSX.Element => {
  const [animate, setAnimate] = React.useState(true)
  const navbarBreakpoint = typeof window !== 'undefined' ? useMedia('(max-width: 800px)') : undefined

  React.useEffect(() => {
    if (animate) setAnimate(!animate)
  }, [animate])

  const Navigation = navbarBreakpoint === undefined ? null :
    (
      navbarBreakpoint
        ? <MobileNavbar setAnimate={() => setAnimate(!animate)} />
        : <Navbar setAnimate={() => setAnimate(!animate)} />
    )

  return (
    <LayoutWrapper>
      {Navigation}
      {/* <Transition animation='jiggle' visible={animate}>
        <LemonLeaf src='../images/lemon-leaf.png' alt='lemon-leaf' />
      </Transition>
      <Transition animation='jiggle' visible={animate}>
        <HalfLemon src='../images/half-lemon.png' alt='half-lemon' />
      </Transition>
      <Transition animation='jiggle' visible={animate}>
        <WholeLemon src='../images/whole-lemon.png' alt='whole-lemon' />
      </Transition>
      <Transition animation='jiggle' visible={animate}>
        <TwoLemons src='../images/two-lemons.png' alt='two-lemons' />
      </Transition> */}
      <Contents>
        {children}
      </Contents>
    </LayoutWrapper>
  )
}

export default Layout
