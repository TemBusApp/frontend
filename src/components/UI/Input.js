import styled from "styled-components";

function Input(props) {
  return (
    <InputElement {...props} />
  )
}

export default Input;

const InputElement = styled.input`
  display: flex;
  color: #666360;
  font-size: 1em;
  padding-left: 2em;
  padding-top: 1em;
  padding-bottom: 1em;
  border: 1px solid transparent;
  border-radius: 10px;
  background-color: #232129;

  ${({ disabled }) => disabled ? 'opacity: 0.5' : ''}

`
