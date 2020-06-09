import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Wrapper = styled.div`
  background-color: transparent;
  padding: 10px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Tabs = styled.div`
  width: 30%;
  display: flex;
  justify-content: space-between;
`

const Tab = styled(Link)`
  color: black;
  text-decoration: none;
`

const Image = styled.img`
  width: 50px;
  margin-bottom: 0;
`

const Header = (): JSX.Element => {
  const tabs = [
    {
      title: 'Home',
      link: '/'
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
            <Tab key={title}>
              {title}
            </Tab>
          )
        })}
      </Tabs>
    </Wrapper>
  )
}

export default Header
