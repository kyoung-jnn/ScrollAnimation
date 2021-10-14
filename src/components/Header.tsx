import React from 'react';
import styled from 'styled-components';

const S = {
  Wrapper: styled.section`
    display: flex;
    justify-content: center;
    position: sticky;
    position: -webkit-sticky;
    width: 100%;
    top: 0;
    z-index: 100;
    background-color: white;
  `,
  Header: styled.header`
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 1180px;
    height: 80px;
  `,
  Logo: styled.span`
    flex: 0 0 25%;
    font-size: 1.5rem;
    font-weight: bold;
  `,
  ButtonWrapper: styled.div`
    display: flex;
    justify-content: flex-end;
    flex: 0 0 25%;
    max-width: 25%;
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
    cursor: pointer;
  `,
  Navi: styled.div`
    display: flex;
    justify-content: center;
    flex: 0 0 50%;
    max-width: 50%;
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

const NaviItems = ['Home', 'About', 'Models', 'Services', 'Contact'];

const Header = () => {
  return (
    <S.Wrapper>
      <S.Header>
        <S.Logo>BMW</S.Logo>
        <S.Navi>
          {NaviItems.map((item) => (
            <S.NaviItem key={item}>{item}</S.NaviItem>
          ))}
        </S.Navi>
        <S.ButtonWrapper>
          <S.Button>Buy Now</S.Button>
        </S.ButtonWrapper>
      </S.Header>
    </S.Wrapper>
  );
};

export default Header;
