import styled from "styled-components";

function Button(props) {
  return <ButtonStyle {...props} >{props.children}</ButtonStyle>;
}

export default Button;

const ButtonStyle = styled.button`
  width: 100%;
  width: 340px;
  padding: 14px 0;
  background: var(--color-primary);
  border-radius: 10px;
  border: none;
  cursor: pointer;
  color: var(--bg-primary);
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.18rem;
  letter-spacing: 0.03em;

  ${({ disabled }) => disabled ? 'opacity: 0.5' : ''}

  &:hover {
    animation: zoom 200ms ease-in;
    transition: 0.2s;
  }
`
