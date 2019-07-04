import React from 'react'

import InputField from '../../../../components/form/InputField'
import { Button } from '../../../../components/ui/button'
import {
  BasicInfo,
  ButtonContainer,
  DocInfo,
  DocTitle,
  FormContainer,
  FormTitle,
} from './styledComponents'

export default function UiForm({ handleSubmit, isSubmitting }: any) {
  return (
    <form onSubmit={handleSubmit}>
      <FormContainer>
        <FormTitle>FORMULARIO DE PROSPECTOS</FormTitle>
        <BasicInfo>
          <div>
            <InputField
              name='name'
              type='text'
              icon='user'
              placeholder='Nombre'
            />
            <InputField
              name='email'
              type='text'
              icon='email'
              placeholder='Email'
            />
          </div>
          <div>
            <InputField
              name='phone'
              type='text'
              icon='phone'
              placeholder='Telefono'
            />
            <InputField
              name='address'
              type='text'
              icon='address'
              placeholder='dirección'
            />
          </div>
        </BasicInfo>
        <DocInfo>
          <DocTitle>
            IDENTIFICACION
        </DocTitle>
          <div>
            <InputField
              icon='dni'
              type='text'
              name='dniType'
              inputType='select'
              placeholder='Tipo'
            />
            <InputField
              type='text'
              icon='number'
              name='dniNumber'
              placeholder='Numero'
            />
          </div>
          <div>
            <span>Fecha de expedición</span>
            <InputField
              type='text'
              icon='date'
              name='dniExpiry'
              placeholder='Expiración'
            />
          </div>
        </DocInfo>
        <ButtonContainer>
          <Button type='submit' loading={isSubmitting}>Añadir</Button>
        </ButtonContainer>
      </FormContainer>
    </form>
  )
}
