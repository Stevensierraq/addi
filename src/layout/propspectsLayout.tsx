import React from 'react'
import { useDispatch } from 'react-redux'

import PropspectForm from '../modules/propspects/form'
import PropspectTable from '../modules/propspects/table'

import { LayoutContainer } from './styledComponents'

export default function PropspectsLayout() {
  const dispatch = useDispatch()

  return (
    <LayoutContainer>
      <PropspectTable />
      <PropspectForm dispatch={dispatch} />
    </LayoutContainer>
  )
}
