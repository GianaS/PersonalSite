import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import Logo from './logo'
import colors from '../styles/colors'

const Wrapper = styled.div`
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
`

const Tabs = styled.div`
  width: 30%;
  display: flex;
  justify-content: space-between;
  min-width: 400px;
  padding-left: 20px;
`

const Tab = styled(Link)`
  font-size: 20px;
  color: ${colors.black};
  &.active {
    border-bottom: solid 1px ${colors.green};
    padding-bottom:6px;
    color: ${colors.green};
    font-weight: bold;
  }
`

type NavbarProps = {
  setAnimate: () => void
}

const Navbar = ({ setAnimate }: NavbarProps): JSX.Element => {
  const tabs = [
    {
      title: 'Home',
      link: '/home'
    },
    {
      title: 'About',
      link: '/about'
    },
    {
      title: 'Resume',
      link: '/resume'
    },
    {
      title: 'Contact',
      link: '/contact'
    },
    {
      title: 'Not Found',
      link: '/404',
    }
  ]

  return (
    <Wrapper>
      <Logo setAnimate={setAnimate} />
      <Tabs>
        {tabs.map(({ title, link }) => {
          return (
            <Tab
              to={link}
              onClick={setAnimate}
              activeClassName={'active'}
              key={title}
            >
              {title}
            </Tab>
          )
        })}
      </Tabs>
    </Wrapper>
  )
}

export default Navbar
