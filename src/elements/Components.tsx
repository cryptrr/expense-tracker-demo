import styled from "styled-components"


export const Column = styled.div`
    flex-direction: column;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`

export const Row = styled.div`
    flex-direction: row;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`

export const HeaderH1 = styled.div`
    flex-direction: row;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    font-size: 2em;
    font-weight: bold;
    color: white
`

export const HeaderH2 = styled.div`
    flex-direction: row;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    font-size: 1.2em;
    font-weight: bold;
    color: white
`

export const SpacerRow = styled.div`
    flex-direction: row;
    display: flex;
    width: 1em
`

interface SpacerColumnProps {
    height?: string;
}
export const SpacerColumn = styled.div<SpacerColumnProps>`
    flex-direction: row;
    display: flex;
    height: ${props => props.height ? props.height : '1em'};
`

export const RoundedDiv = styled.div`
    flex-direction: row;
    display: flex;
    height: 1em
`

export const Button = styled.div`
    flex-direction: row;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    font-weight: bold;
    font-size: 1.15em;
    border-radius: 10px;

    &:hover {
        color: #7ECA9C;
        transition: 0.5s;
        cursor: pointer;
    }
`

export const ButtonOutlined = styled.div`
    flex-direction: row;
    display: flex;
    justify-content: center;
    align-items: center;
    
    padding: 10px;
    font-weight: bold;
    font-size: 1.15em;
    border-radius: 10px;
`

export const StyledInput = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 10px;
  
`;