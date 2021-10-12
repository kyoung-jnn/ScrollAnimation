import React from 'react';
import styled from 'styled-components';

const S = {
  Wrapper: styled.footer`
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 1180px;
    padding: 120px 0 30px;
  `,
  Info: styled.div`
    flex: 0 0 30%;
    max-width: 30%;
  `,
  Menu: styled.div`
    display: flex;
    flex-direction: column;
    flex: 0 0 20%;
    max-width: 20%;
  `,
  Sub: styled.div`
    flex: 0 0 30%;
    max-width: 30%;
  `,
  Copyright: styled.div`
    display: flex;
    justify-content: center;
    margin-top: 100px;
    width: 100%;
    border-top: 1px soild #2980b9;
  `,
};

const Footer = () => {
  return (
    <S.Wrapper>
      <S.Copyright>Any © 2021</S.Copyright>
    </S.Wrapper>
  );
};

export default Footer;
