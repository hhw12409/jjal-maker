import styled from "styled-components";

const Button = styled.button<React.CSSProperties>`
  margin-top: 10px;
  padding: 10px 12px;
  border: none;
  cursor: pointer;
  font-size: 20px;
  ${({ backgroundColor }) => `background-color:${backgroundColor}`};
  border-radius: 10px;
  &:hover {
    background-color: black;
    color: white;
  }
`;

export default Button;
