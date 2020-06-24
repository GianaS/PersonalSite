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
  width: 100%;
  height: 100%;
`

const LemonLeaf = styled(Image)`
  position: absolute !important;
  right: 0;
  top: 76px;
  z-index: -1;
`

const HalfLemon = styled(Image)`
  position: absolute !important;
  left: 219px;
  top: -8px;
  z-index: -1;
`

const TwoLemons = styled(Image)`
  position: absolute !important;
  left: 45px;
  bottom: -10px;
  z-index: -1;
`

const WholeLemon = styled(Image)`
  position: absolute !important;
  bottom: -20px;
  right: 85px;
  z-index: -1;
`

type LayoutProps = {
  children: React.ReactChild
}

const Layout = ({ children }: LayoutProps): JSX.Element => {
  const [animate, setAnimate] = React.useState(true)
  const navbarBreakpoint = useMedia('(max-width: 800px)')

  React.useEffect(() => {
    if (animate) setAnimate(!animate)
  }, [animate])

  return (
    <LayoutWrapper>
      {
        navbarBreakpoint
          ? <MobileNavbar setAnimate={() => setAnimate(!animate)} />
          : <Navbar setAnimate={() => setAnimate(!animate)} />
      }
      <Contents>
        <Transition animation='jiggle' visible={animate}>
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
        </Transition>
        {children}
      </Contents>
    </LayoutWrapper>
  )
}

export default Layout
