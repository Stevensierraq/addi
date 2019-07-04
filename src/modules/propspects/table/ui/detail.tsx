import React, { memo } from 'react'

import { IPropspect } from '../../../../store/interfaces'
import { DetailContainer, DetailItem } from '../styledComponents'

function Detail(props: { propspect: IPropspect, loading: boolean }) {
  const {
    name,
    dniExpiry,
    dniNumber,
    dniType,
    phone,
    address,
    email,
  } = props.propspect

  return (
    <DetailContainer>
      <p>{name}</p>
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
        <strong>Telefono:</strong>
        <span>{phone}</span>
      </DetailItem>
      <DetailItem>
        <strong>Email:</strong>
        <span>{email}</span>
      </DetailItem>
      <DetailItem>
        <strong>Dirección</strong>
        <span>{address}</span>
      </DetailItem>
    </DetailContainer>
  )
}

export default memo(Detail)
