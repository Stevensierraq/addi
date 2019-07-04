import React, { memo } from 'react'
import NumberFormat from 'react-number-format'

import { IInput } from '../../interfaces/inputs'
import { getIcon } from '../../utils/getIconInput'

import {
  IconContainer,
  InputComponent,
  InputContainer,
} from './styledComponents'

const getInput = (props: IInput) => {
  switch (props.icon) {
    case 'date':
      return (
        <NumberFormat
          id='date-form'
          format='##/##/####'
          placeholder='DD/MM/YYYY'
          customInput={InputComponent}
          value={props.value ? props.value : ''}
          onValueChange={
            ({ formattedValue }: any) => props.onChange({
              target: {
                value: formattedValue,
                name: props.name || 'date',
              },
            })
          }
        />
      )
    case 'phone':
      return (
        <NumberFormat
          id='date-form'
          placeholder='Celular'
          format='+57 (###) ###-####'
          customInput={InputComponent}
          value={props.value ? props.value : ''}
          onValueChange={
            ({ formattedValue }: any) => props.onChange({
              target: {
                value: formattedValue,
                name: props.name || 'date',
              },
            })
          }
        />
      )
    case 'number':
      return (
        <NumberFormat
          id='date-form'
          placeholder='Numero'
          customInput={InputComponent}
          value={props.value ? props.value : ''}
          onValueChange={
            ({ floatValue }: any) => props.onChange({
              target: {
                value: floatValue,
                name: props.name || 'date',
              },
            })
          }
        />
      )
    default:
      return (<InputComponent {...props} />)
  }
}

function Input(props: IInput) {
  return (
    <InputContainer {...props}>
      <IconContainer>
        {getIcon[props.icon]}
      </IconContainer>
      {getInput(props)}
    </InputContainer>
  )
}

export default memo(Input)
