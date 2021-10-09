import styled from "styled-components"

function Button(props) {
  return <ButtonStyle>{props.children}</ButtonStyle>
}

export default Button;

const ButtonStyle = styled.button`
  width: 100%;
  width: 340px;
  padding: 14px 0;
  background: #FF9000;
  border-radius: 10px;
  border: none;
  cursor: pointer;
`
