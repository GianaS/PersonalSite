import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout'
import colors from '../styles/colors'

type ResumeWrapperProps = {
  navbarHeight: string
}

const ResumeWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  ${({navbarHeight}: ResumeWrapperProps) => (
    `padding: ${navbarHeight} 20% 0 20%;`
  )}
`

const StyledMarkdown = styled.div`
  display: inline-block;
  width: 100%;
  
  h1 {
    color: ${colors.green};
    font-size: 38px;
  }

  h2 {
    color: blue;
  }

  ul {
    color: purple;
    color: ${colors.black};
    font-size: 18px;
    padding-left: 22px;

    li {
      line-height: 25px;
    }
  }

  p {
    color: ${colors.black};
    font-size: 18px;
    margin-bottom: 0;
  }

  a {
    color: ${colors.black};
    :hover {
      color: ${colors.pink};
    }
  }

`

const Resume = ({ data }) => {
  const { markdownRemark: { html } } = data

  const navbar = document.getElementById('nav-bar')
  const navbarHeight = window && navbar
    ? window.getComputedStyle(navbar, null).getPropertyValue("background-color")
    : '86px'

  return (
    <Layout>
      <ResumeWrapper navbarHeight={navbarHeight} >
        <StyledMarkdown
          dangerouslySetInnerHTML={{ __html: html }}
        >
        </StyledMarkdown>
      </ResumeWrapper>
    </Layout>
  )
}

const pageQuery = () => graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`

export default Resume

export {
  pageQuery
}