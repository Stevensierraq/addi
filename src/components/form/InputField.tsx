import React from 'react'

import { Field } from 'formik'
import styled from 'styled-components'

import { and } from 'ramda'

import Input from '../ui/input'
import Select from '../ui/select'

const ErrorMsg = styled.p`
  color: red;
  margin: 0;
  text-align: left;
`

const FieldContainer = styled.div`
  width: ${
  ({ icon }: any) => icon === 'date' ? '155px' : '275px'
  };
  margin: 10px;
`

export default function InputField(props: any) {
  return (
    <Field {...props}>
      {({ field, form }: any) => {
        const error = and(form.touched[field.name], form.errors[field.name])
        return (
          <FieldContainer {...props}>
            {
              props.inputType === 'select'
                ? <Select {...props} {...field} errorClass={error} />
                : <Input {...props} {...field} errorClass={error} />
            }
            {error &&
              <ErrorMsg>{form.errors[field.name]}</ErrorMsg>
            }
          </FieldContainer>
        )
      }}
    </Field>
  )
}
