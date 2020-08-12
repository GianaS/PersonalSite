import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import { Icon } from 'semantic-ui-react'

import Layout from '../components/layout'
import colors from '../styles/colors'

type WrapperProps = {
  navbarHeight: string
}

const Wrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;

  ${({ navbarHeight }: WrapperProps) => (
    `
      top: calc(${navbarHeight} + 12px);
      padding: 0 30% 0 30%;
      @media (max-width: 800px) {
        padding: ${navbarHeight} 12% 0 12%;
        top: 12px;
      }
    `
  )}

  a {
    color: ${colors.green};
    text-decoration: underline;
    font-size: calc(14px + (18 - 14) * ((100vw - 300px) / (2000 - 300)));

    :hover {
      color: ${colors.pink};
    }
  }
`

const StyledMarkdown = styled.div`
  display: inline-block;
  width: 100%;
  
  h1 {
    color: ${colors.green};
    font-size: calc(17px + (38 - 17) * ((100vw - 300px) / (2000 - 300)));
  }

  h2 {
    font-size: calc(16px + (24 - 16) * ((100vw - 300px) / (2000 - 300)));
    color: ${colors.green};
  }


  p {
    margin-bottom: 20px;
    color: ${colors.black};
    font-size: calc(14px + (18 - 14) * ((100vw - 300px) / (2000 - 300)));
  }
`

const StyledContact = styled.div`
  display: flex;
  padding-bottom: 8px;

  i {
    color: ${colors.black};
    font-size: 2em !important;
    margin-right: 10px;
  }
`

type AboutProps = {
  data: {
    markdownRemark: {
      html: HTMLElement,
      frontmatter: {
        email: string
        linkedIn: string
      }
    }
  }
}

const About = ({ data }: AboutProps): JSX.Element => {
  const {
    markdownRemark: {
      html,
      frontmatter: { email, linkedIn }
    }
  } = data

  const navbar = typeof document !== 'undefined' && document.getElementById('nav-bar')
  const navbarHeight = typeof window !== 'undefined' && navbar
    ? window.getComputedStyle(navbar, null).getPropertyValue("background-color")
    : '86px'

  return (
    <Layout>
      <Wrapper navbarHeight={navbarHeight} >
        <StyledMarkdown
          dangerouslySetInnerHTML={{ __html: html }}
        >
        </StyledMarkdown>
        <div>
          <StyledContact>
            <Icon name='mail outline' />
            <a href={`mailto:${email}`}>{email}</a>
          </StyledContact>
          <StyledContact>
            <Icon name='linkedin' />
            <a href={linkedIn} target='_blank' rel='noreferrer'>Giana&apos;s LinkedIn Profile</a>
          </StyledContact>
        </div>
      </Wrapper>
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
        email
        linkedIn
      }
    }
  }
`

export default About

export {
  pageQuery
}