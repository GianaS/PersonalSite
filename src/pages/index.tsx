import React from 'react'
import { PageProps, graphql } from 'gatsby'
import { Text } from 'grommet'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { ComingSoonImage } from '../components/image'
import '../components/layout.css'

type DataProps = {
  site: {
    buildTime: string
  }
}

const Home: React.FC<PageProps<DataProps>> = ({ data }) => {
    return <Layout>
      <SEO title="Home" />
      <div
        style={{
          position: 'fixed',
          top:  '50%',
          left: '50%',
          transform: 'translate(-50%,-50%)'
        }}
      >
        <ComingSoonImage />
        <br></br>
        <Text style={{color: 'white'}}>Hey Giana, how's it going?</Text>
      </div>
    </Layout>
}

export default Home

export const query = graphql`
  {
    site {
      buildTime(formatString: "YYYY-MM-DD hh:mm a z")
    }
  }
`
