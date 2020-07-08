import React from 'react'
import styled from 'styled-components'

const Title: React.FC = styled.h1`
  font-size: 50px;
`

export const AppTitle: React.FC = ({children}) => (<Title>{children}</Title>)
