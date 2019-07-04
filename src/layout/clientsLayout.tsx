import React from 'react'

import ClientsTable from '../modules/clients/table'

import { LayoutContainer } from './styledComponents'

export default function ClientsLayout() {

  return (
    <LayoutContainer>
      <ClientsTable />
    </LayoutContainer>
  )
}
