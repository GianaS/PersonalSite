import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { Menu, Button, Icon, Header, Dropdown } from 'semantic-ui-react'

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

const ButtonMenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 208px;
  align-items: flex-end;
`

const MenuWrapper = styled.div`
  display: ${props => props.isVisible ? '' : 'none'};
`

const MenuButton = styled(Button)`
  background-color: transparent !important;
  color: ${colors.black} !important;
  font-size: 20px !important;
  padding: 0 !important;
  margin: 0 !important;
  width: 20px;
`

type MobileNavbarProps = {
  setAnimate: () => void
}

const MobileNavbar = ({ setAnimate }: MobileNavbarProps): JSX.Element => {
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

  const [showMenu, setShowMenu] = React.useState(false)

  return (
    <Wrapper>
      <Logo setAnimate={setAnimate} />
      <ButtonMenuWrapper>
        <MenuButton icon onClick={() => setShowMenu(!showMenu)}>
          <Icon name='bars' />
        </MenuButton>
        <MenuWrapper isVisible={showMenu}>
          <Menu vertical>
            <Menu.Item>Hi</Menu.Item>
          </Menu>
        </MenuWrapper>
      </ButtonMenuWrapper>
    </Wrapper>
  )
}

export default MobileNavbar
