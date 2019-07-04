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

export const DetailContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 20px;

  p {
    font-size: 1.3em;
    font-weight: bold;
    width: 100%;
    align-text: center;
  }
`

export const DetailItem = styled.div`
  display: flex;
  max-width: 320px;
  justify-content: space-between;
  border-left: 4px solid yellow;
  margin: 10px 20px;

  span {
    margin-left: 5px;
  }

  strong {
    margin-left: 5px;
  }
`

export const DetailButton = styled.div`
  display: flex;
  width: 100%;
  margin: 20px 0;
  justify-content: flex-end;
`

export const Msg = styled.p`
  text-align: center;
  margin: 20px;
  color: green;
`

export const ValidationContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid grey;
  justify-content: flex-start;
  text-align: left;

  li {
    color: gray;
  }
`
