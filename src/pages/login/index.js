import React from 'react'
import styled from 'styled-components';

import logo from '../../assets/logo.png';
import loginPhoto from '../../assets/login-photo.png';

export default function Login() {
  return (
    <Container>
      <LoginPanel>
        <img src={logo} alt="TEMBUS" />
      </LoginPanel>

      <PhotoPanel />
    </Container>
  )
}

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  
  width: 100vw;
  height: 100vh;
  background-color: var(--bg-primary);
`;

export const LoginPanel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 50%;
  height: 100%;
`;

export const PhotoPanel = styled.div`
  display: flex;
  align-self: flex-end;
  width: 50%;
  height: 100%;
  background-image: url(${loginPhoto});
  background-repeat: no-repeat;
`;


