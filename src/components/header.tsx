import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Wrapper = styled.div`
  background-color: transparent;
  padding: 25px 35px;
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
`

const Tab = styled(Link)`
  color: black;
  font-size: 18px;
  &.active {
    border-bottom: solid 1px black;
    padding-bottom: 8px;
  }
`

const Image = styled.img`
  width: 50px;
  margin-bottom: 8px;
`

const Header = (): JSX.Element => {
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
      <Image src='../images/lemon.png' alt='lemon' />
      <Tabs>
        {tabs.map(({ title, link }) => {
          return (
            <Tab to={link} activeClassName={'active'} key={title} >
              {title}
            </Tab>
          )
        })}
      </Tabs>
    </Wrapper>
  )
}

export default Header
