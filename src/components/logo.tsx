import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import colors from '../styles/colors'

const StyledLogo = styled(Link)`
  font-size: 20px;
  color: ${colors.black};
`

type LogoProps = {
  setAnimate: () => void
}

const Logo = ({ setAnimate }: LogoProps): JSX.Element => {
  return <StyledLogo to='/home' onClick={setAnimate}>GS</StyledLogo>
}

export default Logo