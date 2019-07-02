import styled from 'styled-components'

export const BasicInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const DocInfo = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 15px;
  max-width: 550px;
  position: relative;
  margin-top: 30px;
  border: 1px solid lightGrey;

  span {
    color: grey;
  }
`

export const DocTitle = styled.div`
  color: grey;
  width: 125px;
  background-color: white;
  position: absolute;
  top: -10px;
`

export const FormContainer = styled.div`
  border: 1px solid lightGrey;
  border-radius: 10px;
  padding: 15px;
  max-width: 600px;
  margin-top: 40px;
`

export const FormTitle = styled.p`
  font-size: 1.2em;
  margin-bottom: 25px;
`

export const ButtonContainer = styled.div`
  display: flex;
  margin: 20px;
  margin-top: 30px;
  justify-content: flex-end;
`
