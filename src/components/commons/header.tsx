import React from 'react'
import styled from 'styled-components'

import logo from '../../assets/images/addi_logo.svg'

const MainHeader = styled.header`
  height: 60px;
  display: flex;
  padding: 0 15px;
  align-items: center;
  background-color: black;
  justify-content: space-between;
`

const Img = styled.img`
  height: 40px;
`

export default function Header() {
  return (
    <MainHeader>
      <Img src={logo} alt='logo-addi'/>
      <span>text</span>
    </MainHeader>
  )
}
