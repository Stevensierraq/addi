import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import Modal from '../../../components/ui/modal'
import { IPropspect, IReducer } from '../../../store/interfaces'
import Detail from './detail'
import { TableContainer, Th, Tr } from './styledComponents'

import {
  FaEye,
} from 'react-icons/fa'

const defaultPropspect = {
  name: '',
  phone: '',
  email: '',
  dniType: '',
  address: '',
  dniNumber: '',
  dniExpiry: '',
}

export default function PropspectsTable() {
  const [visible, setVisible] = useState<boolean>(false)
  const [detail, setDetail] = useState<IPropspect>(defaultPropspect)
  const propspects = useSelector((state: IReducer) => state.propspects)

  const toggleModal = () => setVisible(!visible)

  const viewDetail = (propspect: IPropspect) => {
    setVisible(true)
    setDetail(propspect)
  }

  return (
    <TableContainer>
      <h3>PROSPECTOS</h3>
      <table>
        <thead>
          <tr>
            <Th size='big'>Nombre</Th>
            <Th sise='small'>Tipo Dni</Th>
            <Th>Numero Dni</Th>
            <Th>Expedición Dni</Th>
            <Th>Detalle</Th>
          </tr>
        </thead>
        <tbody>
          {
            propspects.map((propspect: IPropspect, index: number) => (
              <Tr key={index}>
                <td>{propspect.name}</td>
                <td>{propspect.dniType}</td>
                <td>{propspect.dniNumber}</td>
                <td>{propspect.dniExpiry}</td>
                <td>
                  <FaEye
                    style={{ cursor: 'pointer' }}
                    onClick={() => viewDetail(propspect)}
                  />
                </td>
              </Tr>
            ))
          }
        </tbody>
      </table>
      <Modal
        visible={visible}
        closeModal={() => toggleModal()}
      >
        <Detail
          propspect={detail}
        />
      </Modal>
    </TableContainer>
  )
}
