import React from 'react'
import { MoonLoader } from 'react-spinners'

import { ButtonContainer, CustomButton } from './styledComponents'

export function Button(props: any) {
  return (
    <ButtonContainer {...props}>
      {
        props.loading &&
        <MoonLoader size={18} />
      }
      <CustomButton {...props} />
    </ButtonContainer>
  )
}
