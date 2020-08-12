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
  position: relative;

  ${({ navbarHeight }: ResumeWrapperProps) => (
    `
      top: calc(${navbarHeight} + 12px);
      padding: 0 20% 0 20%;
      @media (max-width: 800px) {
        padding: ${navbarHeight} 12% 0 12%;
        top: 12px;
      }
    `
  )}
`

const StyledMarkdown = styled.div`
  display: inline-block;
  width: 100%;
  
  h1 {
    color: ${colors.green};
    font-size: calc(17px + (38 - 17) * ((100vw - 300px) / (2000 - 300)));
  }

  h2 {
    color: blue;
  }

  ul {
    color: purple;
    color: ${colors.black};
    font-size: calc(14px + (18 - 14) * ((100vw - 300px) / (2000 - 300)));
    padding-left: 22px;

    li {
      line-height: 25px;
    }
  }

  p {
    color: ${colors.black};
    font-size: calc(14px + (18 - 14) * ((100vw - 300px) / (2000 - 300)));
    margin-bottom: 0;
  }

  a {
    color: ${colors.green};
    text-decoration: underline;

    :hover {
      color: ${colors.pink};
    }
  }

  @media (max-width: 800px) {
    blockquote {
      margin: 5px;
    }
  } 
`

type ResumeProps = {
  data: {
    markdownRemark: {
      html: HTMLElement
    }
  }
}

const Resume = ({ data }: ResumeProps): JSX.Element => {
  const { markdownRemark: { html } } = data

  const navbar = typeof document !== 'undefined' && document.getElementById('nav-bar')
  const navbarHeight = typeof window !== 'undefined' && navbar
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

const pageQuery = (): void => graphql`
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