import styled from 'styled-components'

const size: any = {
    small: '70px',
    big: '250px',
}

export const Th = styled.th`
  width: ${(props: any) => size[props.size] || '150px'};
  background-color: yellow;
  height: 30px;
`

export const Tr = styled.tr`
  padding: auto;
  height: 30px;
  background-color: #f1f1f1;
`

export const TableContainer = styled.div`
  margin: 20px 40px;
`
