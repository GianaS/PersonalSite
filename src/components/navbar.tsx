import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import Logo from './logo'
import colors from '../styles/colors'
import { navbarItems } from '../utilities'

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
  min-width: 470px;
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
  return (
    <Wrapper>
      <Logo setAnimate={setAnimate} />
      <Tabs>
        {
          navbarItems.map(({ title, link }) => {
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
          })
        }
      </Tabs>
    </Wrapper>
  )
}

export default Navbar