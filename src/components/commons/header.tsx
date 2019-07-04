import React from 'react'

import logo from '../../assets/images/addi_logo.svg'

import { Img, MainHeader, Tab, TabContainer } from './styledComponents'

export default function Header(props: any) {
  return (
    <MainHeader>
      <Img src={logo} alt='logo-addi' />
      <TabContainer>
        <Tab
          selected={props.selected === 'propspects'}
          onClick={() => props.setTab('propspects')}
        >
          PROSPECTOS
        </Tab>
        <Tab
          selected={props.selected === 'clients'}
          onClick={() => props.setTab('clients')}
        >
          CLIENTES
        </Tab>
      </TabContainer>
    </MainHeader>
  )
}
