import styled from 'styled-components'

function Main(props) {
  return (
    <ChangeButton bg={"#eee"} hoverBg={"black"}>Change</ChangeButton>
  )
}

const ChangeButton = styled.button`
  margin-top: 10px;
  padding: 10px 12px;
  border: none;
  cursor: pointer;
  font-size: 20px;
  background: ${props => props.bg};
  border-radius: 10px;
  &:hover {
    background: ${props => props.hoverBg};
    color: white;
  }
`

export default Main;