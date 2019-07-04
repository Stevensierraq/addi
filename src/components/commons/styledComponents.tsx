import styled from 'styled-components'

export const MainHeader = styled.header`
  height: 60px;
  display: flex;
  padding: 0 15px;
  align-items: center;
  background-color: black;
  justify-content: space-between;
`

export const Img = styled.img`
  height: 40px;
`

export const TabContainer = styled.div`
  display: flex;
`

export const Tab = styled.div`
  color: white;
  cursor: pointer;
  width: auto;
  margin: 0 15px;
  padding-bottom: 5px;
  border-bottom: 2px solid ${(props: any) => props.selected ? 'yellow' : 'black'};
`
