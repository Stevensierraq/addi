import React from 'react'

import {
  ModalClose,
  ModalContainer,
  ModalContent,
} from './styledComponents'

export default function Modal(props: any) {
  return (
    <ModalContainer visible={props.visible}>
      <ModalContent>
        <ModalClose onClick={props.closeModal}>
          &times;
        </ModalClose>
        {props.children}
      </ModalContent>
    </ModalContainer>
  )
}
