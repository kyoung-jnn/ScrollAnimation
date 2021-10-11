import React from 'react';
import styled from 'styled-components';

const S = {
  Wrapper: styled.div`
    width: 100%;
    position: sticky;
    top: 0;
    z-index: 100;
    background-color: white;
    display: flex;
    justify-content: center;
  `,
  Header: styled.header`
    width: 100%;
    max-width: 1180px;
    height: 80px;
    display: flex;
    flex-direction: row;
    align-items: center;
  `,
  Logo: styled.span`
    flex: 0 0 25%;
    font-size: 1.5rem;
    font-weight: bold;
  `,
  ButtonWrapper: styled.div`
    flex: 0 0 25%;
    max-width: 25%;
    display: flex;
    justify-content: flex-end;
  `,
  Button: styled.button`
    width: 100px;
    height: 50px;
    border-radius: 10px;
    font-size: 1rem;
    border: 0;
    outline: none;
    color: white;
    background-color: #2980b9;
  `,
  Navi: styled.div`
    flex: 0 0 50%;
    max-width: 50%;
    display: flex;
    justify-content: center;
  `,
  NaviItem: styled.a`
    color: black;
    margin: 0 1rem;
    cursor: pointer;
    &:hover {
      opacity: 0.5;
    }
  `,
};

const NaviItems = ['Home', 'About', 'Detail', 'Contact'];

const Header = () => {
  return (
    <S.Wrapper>
      <S.Header>
        <S.Logo>Scroll</S.Logo>
        <S.Navi>
          {NaviItems.map((item) => (
            <S.NaviItem key={item}>{item}</S.NaviItem>
          ))}
        </S.Navi>
        <S.ButtonWrapper>
          <S.Button>Login</S.Button>
        </S.ButtonWrapper>
      </S.Header>
    </S.Wrapper>
  );
};

export default Header;
