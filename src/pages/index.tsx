import React from 'react'
import { PageProps, graphql } from 'gatsby'

import SEO from '../components/seo'
import { ComingSoonImage } from '../components/image'
import '../components/layout.css'

type DataProps = {
  site: {
    buildTime: string
  }
}

const Home: React.FC<PageProps<DataProps>> = ({ data }) => {
    return <>
      <SEO title="Home" />
      <div
        style={{
          position: 'fixed',
          top:  '50%',
          left: '50%',
          transform: 'translate(-50%,-50%)'
        }}
      >
        <p style={{color: 'white'}}>Hey Giana, how's it going?</p>
        <ComingSoonImage />
      </div>
    </>
}

export default Home

export const query = graphql`
  {
    site {
      buildTime(formatString: "YYYY-MM-DD hh:mm a z")
    }
  }
`
