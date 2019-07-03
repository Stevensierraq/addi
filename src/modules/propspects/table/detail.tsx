import React, { memo } from 'react'

import { Button } from '../../../components/ui/button'
import { IPropspect } from '../../../store/interfaces'
import { DetailButton, DetailContainer, DetailItem } from './styledComponents'

function Detail(props: { propspect: IPropspect, validatePropspect: any, loading: boolean }) {
  const {
    name,
    dniExpiry,
    dniNumber,
    dniType,
    phone,
    address,
    email,
  } = props.propspect

  const handleClick = (e: any) => {
    e.preventDefault()
    e.stopPropagation()
    props.validatePropspect(props.propspect)
  }

  return (
    <DetailContainer>
      <p>{name}</p>
      <DetailItem>
        <strong>Telefono:</strong>
        <span>{phone}</span>
      </DetailItem>
      <DetailItem>
        <strong>Email:</strong>
        <span>{email}</span>
      </DetailItem>
      <DetailItem>
        <strong>Tipo Dni:</strong>
        <span>{dniType}</span>
      </DetailItem>
      <DetailItem>
        <strong># Dni:</strong>
        <span>{dniNumber}</span>
      </DetailItem>
      <DetailItem>
        <strong>Expedición:</strong>
        <span>{dniExpiry}</span>
      </DetailItem>
      <DetailItem>
        <strong>Dirección</strong>
        <span>{address}</span>
      </DetailItem>
      <DetailButton>
        <Button primary loading={props.loading} onClick={handleClick}>
          VALIDAR
       </Button>
      </DetailButton>
    </DetailContainer>
  )
}

export default memo(Detail)
