import styled from 'styled-components'

import { IButton } from '../../interfaces/button'
import { IInput } from '../../interfaces/inputs'

export const InputComponent = styled.input.attrs(({ type, size }: any) => ({
  type: type || 'text',
  size: size || '1em',
}))`
  border: none;
  width: 100%;
  height: 20px;
  padding: 10px;
  font-size: 1em;
  border-radius: 5px;

  &:focus {
    outline: none;
  }
`

export const SelectComponent = styled.select.attrs(({ type, size }: any) => ({
  type: type || 'text',
  size: size || '1em',
}))`
  border: none;
  width: 100%;
  height: 40px;
  background-color: white;
  padding-left: 10px;
  font-size: 1em;
  border-radius: 5px;

  &:focus {
    outline: none;
  }
`

export const InputContainer = styled.div`
  width: ${
  ({ icon }: IInput) => icon === 'date' ? '155px' : '275px'
  };
  height: 41px;
  color: grey;
  display: flex;
  margin-bottom: 5px;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  background-color: #f1f1f1;
  transition: border .5s ease-in;
  border: 1px solid ${
  ({ errorClass }: IInput) => errorClass ? 'red' : 'lightGrey'
  };

  &:focus-within {
    border: 1px solid black;
  }
  &:hover {
    border: 1px solid black;
  }
`

export const IconContainer = styled.div`
  width: 50px;
  `

export const CustomButton = styled.button.attrs(({ loading }: any) => ({
  disabled: loading,
}))`
  border: none;
  font-size: 1em;
  cursor: pointer;
  padding: 0.5em 1.2em;
  color: ${({ primary }: IButton) => primary ? 'white' : 'black'};
  background: ${({ primary }: IButton) => primary ? 'black' : 'white'};

    &:focus {
      outline: none;
    }
`

export const ButtonContainer = styled.div`
  padding: 5px;
  height: 30px;
  display: flex;
  cursor: pointer;
  border-radius: 10px;
  align-items: center;
  border: 2px solid black;
  justify-content: center;
  color: ${({ primary }: IButton) => primary ? 'white' : 'black'};
  width: ${({ loading }: IButton) => loading ? '125px' : '105px'};
  background: ${({ primary }: IButton) => primary ? 'black' : 'white'};
`

export const ModalContainer = styled.div`
  display: ${({ visible }: any) => visible ? 'block' : 'none'}
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0,0.4);
`
export const ModalContent = styled.div`
  width: 800px;
  position: absolute;
  z-index: 100;
  left: 0;
  top: 0;
  height: auto;
  padding: 20px;
  margin: 200px;
  border: 1px solid #888;
  background-color: white;
`

export const ModalClose = styled.div`
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
  ursor: pointer;

  &:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }
`
