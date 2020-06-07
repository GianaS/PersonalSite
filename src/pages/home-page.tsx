import React from 'react'
import styled from 'styled-components'
import { Text } from 'grommet'

import SEO from '../components/seo'
import Layout from '../components/layout'

const Wrapper = styled.div`
    background-color: white;
`

const HomePage: React.FC = () => {
    return <Layout>
        <Wrapper>
            <SEO title="Home Page" />
            <Text>Giana</Text>
        </Wrapper>
    </Layout>
}

export default HomePage