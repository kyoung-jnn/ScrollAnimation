import React from 'react';
import styled from 'styled-components';
import { E301 } from '@src/assets';

const S = {
  MainBackGround: styled.div`
    display: flex;
    justify-content: center;
    position: absolute;
    top: 0;
    width: 100%;
    height: 780px;
    background: no-repeat center/cover url(${E301});
  `,
  Wrapper: styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100%;
    max-width: 1180px;
  `,
  Title: styled.h1`
    color: #fff;
    font-size: 4rem;
    font-weight: 700;
    font-family: 'Gelasio', serif;
    margin-bottom: 0.5rem;
  `,
  Description: styled.p`
    color: #fff;
    font-size: 1.5rem;
    font-weight: 500;
    font-family: '"Gelasio", serif';
  `,
};

const Main = () => {
  return (
    <S.MainBackGround>
      <S.Wrapper>
        <S.Title>
          Duis eget lectus id
          <br /> turpis vehicula faucibus.
        </S.Title>
        <S.Description>Sed eget lorem ac metus lacinia lacinia.</S.Description>
      </S.Wrapper>
    </S.MainBackGround>
  );
};

export default Main;
