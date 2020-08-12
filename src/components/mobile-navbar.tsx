import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { Menu, Button, Icon, Sidebar } from 'semantic-ui-react'

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
  z-index: 10;
`

const StyledButton = styled(Button)`
  background-color: transparent !important;
  color: ${colors.black} !important;
  font-size: 20px !important;
  padding: 0 !important;
  margin: 0 !important;
  width: 20px;
`

const MenuItemWrapper = styled(Link)`
  font-size: 18px;
  padding: 0 20px;
  display: flex;
  justify-content: center;
  width: inherit;
`

const ItemText = styled.p`
  padding-left: 12px;
`

type MobileNavbarProps = {
  setAnimate: () => void
  id?: string
}

const MobileNavbar = ({ setAnimate }: MobileNavbarProps): JSX.Element => {
  const [showSidebar, setShowSidebar] = React.useState(false)

  return (
    <Wrapper>
      <Logo setAnimate={setAnimate} />
      <StyledButton icon onClick={() => setShowSidebar(!showSidebar)}>
        <Icon name='bars' />
      </StyledButton>
      {
        showSidebar
          ?
          <Sidebar
            as={Menu}
            inverted
            onHide={() => setShowSidebar(false)}
            vertical
            visible={showSidebar}
            width='wide'
            direction='right'
          >
            {navbarItems.map(({ title, link, icon }) => {
              return (
                <Menu.Item key={title}>
                  <MenuItemWrapper to={link} onClick={() => setShowSidebar(false)}>
                    <Icon name={icon} />
                    <ItemText>{title}</ItemText>
                  </MenuItemWrapper>
                </Menu.Item>
              )
            })}
          </Sidebar>
          : null
      }
    </Wrapper>
  )
}

export default MobileNavbar
