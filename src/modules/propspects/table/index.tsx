import React, { memo, useCallback, useState } from 'react'
import { useSelector } from 'react-redux'

import Modal from '../../../components/ui/modal'
import { IPropspect, IReducer } from '../../../store/interfaces'
import Detail from './detail'
import { TableContainer, Th, Tr } from './styledComponents'

import { isEmpty } from 'ramda'

import { GET, POST } from '../../../utils/request'

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

function PropspectsTable() {
  const [visible, setVisible] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)
  const [detail, setDetail] = useState<IPropspect>(defaultPropspect)
  const propspects = useSelector((state: IReducer) => state.propspects)

  const toggleModal = () => setVisible(!visible)

  const viewDetail = (propspect: IPropspect) => {
    setVisible(true)
    setDetail(propspect)
  }

  const validateScore = async (validations: any) => {
    const [antecendentes, datacredito] = validations

    const propspectExist: boolean = datacredito.exist
    let antecedentesErrors: string[] = []

    if (antecendentes.causes) { antecedentesErrors = antecendentes.causes }

    if (isEmpty(antecedentesErrors) && propspectExist) {
      const getScore = await GET('http://localhost:3600/addi-api')
    }

    setLoading(false)
  }

  const validatePropspect = useCallback(async (propspect: IPropspect) => {
    setLoading(true)
    Promise.all([
      POST('http://localhost:3600/antecedentes', propspect),
      POST('http://localhost:3600/datacredito', propspect),
    ]).then(validateScore)
  }, [])

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
          loading={loading}
          validatePropspect={validatePropspect}
        />
      </Modal>
    </TableContainer>
  )
}

export default memo(PropspectsTable)
