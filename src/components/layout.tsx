import React from 'react'
import styled from 'styled-components'
import { Image, Transition } from 'semantic-ui-react'

import Navbar from './navbar'
import MobileNavbar from './mobile-navbar'
import { useMedia } from '../utilities'

const Contents = styled.main`
  height: 100%;
`

const LemonLeaf = styled(Image)`
  position: fixed !important;
  right: 0%;
  top: 10%;
  z-index: -1;
  width: calc(120px + (270 - 120) * ((100vw - 300px) / (2000 - 300)));
`

const HalfLemon = styled(Image)`
  position: fixed !important;
  left: 4%;
  top: 0%;
  z-index: -1;
  width: calc(100px + (205 - 100) * ((100vw - 300px) / (2000 - 300)));
`

const TwoLemons = styled(Image)`
  position: fixed !important;
  left: 0;
  bottom: 2%;
  z-index: -1;
  width: calc(100px + (202 - 100) * ((100vw - 300px) / (2000 - 300)));
`

const WholeLemon = styled(Image)`
  position: fixed !important;
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
        ? <MobileNavbar id='nav-bar' setAnimate={() => setAnimate(!animate)} />
        : <Navbar id='nav-bar' setAnimate={() => setAnimate(!animate)} />
    )

  return (
    <>
      {Navigation}
      <Transition duration='1000' animation='jiggle' visible={animate}>
        <LemonLeaf src='../images/lemon-leaf.png' alt='lemon-leaf' />
      </Transition>
      <Transition duration='1000' animation='jiggle' visible={animate}>
        <HalfLemon src='../images/half-lemon.png' alt='half-lemon' />
      </Transition>
      <Transition duration='1000' animation='jiggle' visible={animate}>
        <WholeLemon src='../images/whole-lemon.png' alt='whole-lemon' />
      </Transition>
      <Transition duration='1000' animation='jiggle' visible={animate}>
        <TwoLemons src='../images/two-lemons.png' alt='two-lemons' />
      </Transition>
      <Contents>
        {children}
      </Contents>
    </>
  )
}

export default Layout
