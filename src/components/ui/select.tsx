import React from 'react'

import { IInput } from '../../interfaces/inputs'
import { getIcon } from '../../utils/getIconInput'

import {
  IconContainer,
  InputContainer,
  SelectComponent,
} from './styledComponents'

export default function Select(props: IInput) {
  return (
    <InputContainer {...props}>
      <IconContainer>
        {getIcon[props.icon]}
      </IconContainer>
      <SelectComponent {...props} >
        <option value='CC'>CC</option>
        <option value='NIT'>NIT</option>
      </SelectComponent>
    </InputContainer>
  )
}
