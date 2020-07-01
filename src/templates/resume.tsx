import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout'

const ResumeWrapper = styled.div`
  display: inline-block;
  height: 100%;
  padding: 0 20%;
`

const Resume = ({
  data, // this prop will be injected by the GraphQL query below.
}) => {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter } = markdownRemark

  const resumeData = frontmatter.sectionHeaders.reduce((acc, a, i) => {
    return {
      ...acc,
      [a]: frontmatter.sectionData[i]
    }
  }, {})

  console.log('this is resume data', resumeData)


  return (
    <Layout>
      <ResumeWrapper>
        {Object.keys(resumeData).map(section => {
          return <div key={section}>{section}: {resumeData[section]}</div>
        })}
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
        sectionHeaders
        sectionData
      }
    }
  }
`

export default Resume

export {
  pageQuery
}