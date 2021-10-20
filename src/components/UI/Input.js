import styled from "styled-components";

function Input(props) {
  return (
    <InputGroup>
      {(props['data-icon'] && props['data-icon'] !== "") ?
        <img src={props['data-icon']} alt="icon" data-role="none" data-aria-hidden="true" />
        :
        ""
      }
      <InputElement {...props} />
    </InputGroup>
  )
}

export default Input;

const InputGroup = styled.span`
  display: grid;
  position: relative;
  align-items: center;
  width: 100%;
  max-width: 340px;

  img {
    position: absolute;
    left: 1rem;
  }
`;

const InputElement = styled.input`
  display: flex;
  color: #ffffff;
  font-size: 1em;
  padding-left: 3em;
  padding-top: 1em;
  padding-bottom: 1em;
  border: 1px solid transparent;
  border-radius: 10px;
  background-color: #232129;  

  &::placeholder {
    color: #666360;
  }

  ${({ disabled }) => disabled ? 'opacity: 0.5' : ''}

`
