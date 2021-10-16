import React from 'react';
import styled from 'styled-components';

const S = {
  Wrapper: styled.footer`
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 1180px;
    margin: auto;
    padding: 2rem 0 2rem;
  `,
  Copyright: styled.div`
    display: flex;
    justify-content: center;
    margin-top: 2rem;
    width: 100%;
    border-top: 1px soild #2980b9;
  `,
};

const Footer = () => {
  return (
    <S.Wrapper>
      <S.Copyright>Footer © 2021</S.Copyright>
    </S.Wrapper>
  );
};

export default Footer;
