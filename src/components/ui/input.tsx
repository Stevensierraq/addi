import React from 'react'
import styled from 'styled-components'

import { IInput } from '../../interfaces/inputs'
import { getIcon } from '../../utils/getIconInput'

const Inpute = styled.input.attrs(({ type, size }: any) => ({
  type: type || 'text',
  size: size || '1em',
}))`
  border: none;
  width: 225px;
  height: 20px;
  padding: 10px;
  font-size: 1em;
  border-radius: 5px;

  &:focus {
    outline: none;
  }
`

const InputContainer = styled.div`
  width: 275px;
  height: 40px;
  color: grey;
  display: flex;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  background-color: #f1f1f1;
  border: 1px solid lightGrey;
  transition: border .5s ease-in;

  &:focus-within {
    border: 1px solid black;
  }
  &:hover {
    border: 1px solid black;
  }
`

const IconContainer = styled.div`
  width: 50px;
  `

export default function Input(props: IInput) {
  return (
    <InputContainer>
      <IconContainer>
        {getIcon[props.icon]}
      </IconContainer>
      <Inpute {...props} />
    </InputContainer>
  )
}
