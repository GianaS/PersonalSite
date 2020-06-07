import React from 'react'
import styled from 'styled-components'
import { Text } from 'grommet'

import SEO from '../components/seo'
import Layout from '../components/layout'

const Wrapper = styled.div`
    background-color: white;
`

const HomePage = (): JSX.Element => {
    return <Layout>
        <Wrapper>
            <SEO title="Home Page" />
            <Text>MY SICK SITE</Text>
        </Wrapper>
    </Layout>
}

export default HomePage