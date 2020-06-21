import React, { Dispatch, SetStateAction } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { Image } from 'semantic-ui-react'

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
  color: #02020A;
  &.active {
    border-bottom: solid 1px #06A77D;
    padding-bottom:6px;
    color: #06A77D;
    font-weight: bold;
  }
`

type HeaderProps = {
  setAnimate: () => void
}

const Header = ({ setAnimate }: HeaderProps): JSX.Element => {
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
      <Tab to='/home' onClick={setAnimate}>GS</Tab>
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

export default Header
