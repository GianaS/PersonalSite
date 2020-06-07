import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import { Grommet } from 'grommet'
import styled from 'styled-components'

import Header from './header'
import './layout.css'

const theme = {
  global: {
    font: {
      family: 'Arial'
    }
  }
}

const Contents = styled.div`
  width: 100vw;
  height: 100vh;
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Grommet theme={theme}>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Contents>
        <main>{children}</main>
      </Contents>
    </Grommet>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
