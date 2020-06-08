import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const HeaderWrapper = styled.div`
  background-color: transparent;
  padding: 10px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const TabsWrapper = styled.div`
  width: 30%;
  display: flex;
  justify-content: space-between;
`

const Tabs = styled(Link)`
  color: black;
  text-decoration: none;
`

const ImageWrapper = styled.img`
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
      <HeaderWrapper>
        <ImageWrapper src='../images/lemon.png' alt='lemon'/>
        <TabsWrapper>
          {tabs.map(({title, link}) => {
            return (
              <Tabs key={title} to={link}>
                {title}
              </Tabs>
            )
          })}
        </TabsWrapper>
      </HeaderWrapper>
    )
}

export default Header
