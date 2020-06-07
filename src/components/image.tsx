import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

// const Image = () => {
//   const data = useStaticQuery(graphql`
//     query {
//       placeholderImage: file(relativePath: { eq: "coming-soon.jpg" }) {
//         childImageSharp {
//           fluid(maxWidth: 300) {
//             ...GatsbyImageSharpFluid
//           }
//         }
//       }
//     }
//   `)

//   return <Img fluid={data.placeholderImage.childImageSharp.fluid} />
// }

const ComingSoonImage = () => {
  const data = useStaticQuery(graphql`
    query comingSoonImage {
      file(relativePath: {eq: "coming-soon.jpg"}) {
        childImageSharp {
          id
          fluid {
            originalImg
            originalName
          }
        }
      }
    }
  `)
  return (
    <img
      src={data.file.childImageSharp.fluid.originalImg}
      alt='coming
      soon'
      width='500'
      height='260' 
    />
  )
}

export {
  ComingSoonImage
}
