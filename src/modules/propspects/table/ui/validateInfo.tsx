import React from 'react'

import { ValidationContainer } from '../styledComponents'

interface IValidateInfo {
  score: number
  exist: boolean
  antecedentes: string[]
}

export default function ValidateInfo(props: IValidateInfo) {
  return (
    <ValidationContainer>
      <p>
        {
          props.exist
            ? 'Tus datos existen en la base de datos de la republica'
            : 'Tus datos no existen en la base de datos de la republica'
        }
      </p>
      <div>
        {
          props.antecedentes.length
            ? <div>
              <p>Actualmente posees antecedentes judiciales</p>
              <ul>
                {
                  props.antecedentes.map((item: string) =>
                    <li key={item}>{item}</li>,
                  )
                }
              </ul>
            </div>
            : 'No tienes antecedentes judiciales :)'
        }
      </div>
      <p>{`Tu puntaje estimado es de: ${props.score}`}</p>
    </ValidationContainer>
  )
}
