import React, { memo, useState } from 'react'
import { FaEye } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'

import Modal from '../../../components/ui/modal'
import { IPropspect, IReducer } from '../../../store/interfaces'
import { defaultPropspect } from './defaults'
import Detail from './ui/detail'
import ValidateInfo from './ui/validateInfo'

import {
  DetailButton,
  Msg,
  TableContainer,
  Th,
  Tr,
} from './styledComponents'

import { Button } from '../../../components/ui/button'

import { GET, POST } from '../../../utils/request'

import { addClient } from '../../../store/actions'

function PropspectsTable() {
  const [score, setScore] = useState<number>(0)
  const [msg, setMsg] = useState<string>('')
  const [visible, setVisible] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)
  const [validation, setValidation] = useState<boolean>(false)
  const [detail, setDetail] = useState<IPropspect>(defaultPropspect)
  const [propspectExist, setPropspectExist] = useState<boolean>(false)
  const [antecedentesErrors, setAntecedentesErrors] = useState<string[]>([])

  const propspects = useSelector((state: IReducer) => state.propspects)
  const dispatch = useDispatch()

  const toggleModal = () => {
    setVisible(!visible)
    setValidation(false)
    setScore(0)
    setMsg('')
  }

  const viewDetail = (propspect: IPropspect) => {
    setVisible(true)
    setDetail(propspect)
  }

  const validateScore = async (validations: any) => {
    const [antecendentes, datacredito] = validations

    setPropspectExist(datacredito.exist)

    if (antecendentes.causes) { setAntecedentesErrors(antecendentes.causes) }

    if (!antecendentes.reportd && datacredito.exist) {
      const getScore = await GET('http://localhost:3600/addi-api')
      setScore(getScore.score)
    }

    setValidation(true)
    setLoading(false)
  }

  const validatePropspect = () => {
    setLoading(true)

    Promise.all([
      POST('http://localhost:3600/antecedentes', detail),
      POST('http://localhost:3600/datacredito', detail),
    ]).then(validateScore)
  }

  const handleClick = (e: any) => {
    e.preventDefault()
    e.stopPropagation()

    if (score > 60) {
      setLoading(true)
      dispatch(addClient(detail))
      setMsg(`${detail.name} ahora es un cliente!!!`)

      setTimeout(() => {
        setLoading(true)
        toggleModal()
      }, 4000)
    } else {
      validatePropspect()
    }
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
        <div>
          <Detail
            propspect={detail}
            loading={loading}
          />
          {validation &&
            <ValidateInfo
              score={score}
              exist={propspectExist}
              antecedentes={antecedentesErrors}
            />
          }
          <Msg>
            {msg}
          </Msg>
          <DetailButton>
            <Button
              primary
              loading={loading}
              disabled={loading}
              onClick={handleClick}
            >
              {score > 60
                ? 'APROBAR'
                : 'VALIDAR'
              }
            </Button>
          </DetailButton>
        </div>
      </Modal>
    </TableContainer>
  )
}

export default memo(PropspectsTable)
