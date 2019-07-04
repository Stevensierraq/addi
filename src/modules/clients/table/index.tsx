import React, { memo } from 'react'
import { useSelector } from 'react-redux'

import { IPropspect, IReducer } from '../../../store/interfaces'
import { TableContainer, Th, Tr } from './styledComponents'

function PropspectsTable() {

  const clients = useSelector((state: IReducer) => state.clients)

  return (
    <TableContainer>
      <h3>CLIENTES</h3>
      <table>
        <thead>
          <tr>
            <Th size='big'>Nombre</Th>
            <Th sise='small'>Tipo Dni</Th>
            <Th>Numero Dni</Th>
            <Th>Expedición Dni</Th>
            <Th>Telefono</Th>
            <Th>Email</Th>
            <Th size='big'>Dirección</Th>
          </tr>
        </thead>
        <tbody>
          {
            clients.map((propspect: IPropspect, index: number) => (
              <Tr key={index}>
                <td>{propspect.name}</td>
                <td>{propspect.dniType}</td>
                <td>{propspect.dniNumber}</td>
                <td>{propspect.dniExpiry}</td>
                <td>{propspect.phone}</td>
                <td>{propspect.email}</td>
                <td>{propspect.address}</td>
              </Tr>
            ))
          }
        </tbody>
      </table>
    </TableContainer>
  )
}

export default memo(PropspectsTable)
