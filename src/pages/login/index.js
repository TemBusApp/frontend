import React from 'react'
import styled from 'styled-components';

import logo from '../../assets/logo.png';
import loginPhoto from '../../assets/login-photo.png';
import iconEmail from '../../assets/icon-email.svg';
import iconPassword from '../../assets/icon-password.svg';
import iconSingup from '../../assets/icon-singup.svg';

import Button from '../../components/UI/Button';

export default function Login() {
  return (
    <Container>
      <LoginPanel>
        <Header>
          <p>Welcome</p>
          <img src={logo} alt="TEMBUS" />
          <p>transportation and travel</p>
        </Header>

        <LoginForm className="login-form">
          <h1>Login</h1>

          <label className="sr-only" htmlFor="email">E-mail</label>
          <input type="email" id="email" placeholder="E-mail" />

          <label className="sr-only" htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="******" />

          <Button>Sing in</Button>

          <a className="forgot-link" href="#forgout">I forgot my password</a>
        </LoginForm>
        <Footer>
          <a href="#create">
            <img
              src={iconSingup}
              alt="SingUp Icon"
              className="icon-singup"
              data-role="none"
              data-aria-hidden="true" />
            Create Account
          </a>
        </Footer>
      </LoginPanel>

      <PhotoPanel />
    </Container>
  );
}

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  flex-direction: column;
  
  width: 100vw;
  height: 100vh;
  background-color: var(--bg-primary);

  @media(min-width: 800px) {
    grid-template-columns: 1fr 1fr;
    position: relative;
  }
`;

export const Header = styled.header`
  display: flex;
  grid-row-gap: 5px;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p, img {
    margin: 0;
  }
`;

export const LoginPanel = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 2fr 3fr 1fr;
  justify-content: center;
  justify-items: center;
  align-content: space-around;
`;

export const LoginForm = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 7px;
  align-content: center;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: calc(100% - 32px);

  h1 {
    display: grid;
    align-self: center;
    text-align: center;
    font-size: 1.8rem;
    margin-bottom: 1rem;
  }

  input {
    display: flex;
    color: #666360;
    font-size: 1em;
    padding-left: 2em;
    padding-top: 1em;
    padding-bottom: 1em;
    border: 1px solid transparent;
    border-radius: 10px;
    background-color: #232129;
  }
  a.forgot-link {
    color: #fff;
    text-align: center;
    font-weight: 700;
    text-decoration: none;
    margin-top: 1em;
  }

  .sr-only {
    border: 0 !important;
    clip: rect(1px, 1px, 1px, 1px) !important; /* 1 */
    -webkit-clip-path: inset(50%) !important;
      clip-path: inset(50%) !important;  /* 2 */
    height: 1px !important;
    margin: -1px !important;
    overflow: hidden !important;
    padding: 0 !important;
    position: absolute !important;
    width: 1px !important;
    white-space: nowrap !important;  
  }
  .sr-only-focusable:focus,
  .sr-only-focusable:active {
    clip: auto !important;
    -webkit-clip-path: none !important;
      clip-path: none !important;
    height: auto !important;
    margin: auto !important;
    overflow: visible !important;
    width: auto !important;
    white-space: normal !important;
  }
`;

export const Footer = styled.footer`
  display: grid;
  align-items: center;
  justify-content: center;
  align-content: space-evenly;
  justify-items: center;

  a {
    color: var(--color-primary);
    text-align: center;
    font-weight: 700;
    text-decoration: none;

    display: flex;
    justify-content: center;
    align-items: center;

    .icon-singup {
      top: -1px;
      position: relative;
      margin-right: .3rem;
    }
  }
`;

export const PhotoPanel = styled.div`
  display: none;

  @media(min-width: 800px) {
    display: flex;
    align-self: flex-end;
    width: 50%;
    height: 100%;
    background-image: url(${loginPhoto});
    background-repeat: no-repeat;
  }
`;


