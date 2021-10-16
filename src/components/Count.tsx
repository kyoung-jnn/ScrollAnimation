import React from 'react';
import styled from 'styled-components';
import useScrollCount from '@src/hooks/useScrollCount';

const S = {
  Background: styled.section`
    width: 100%;
    background-color: #2980b9;
  `,
  Wrapper: styled.div`
    width: 100%;
    max-width: 1180px;
    margin: auto;
  `,
  Count: styled.ul`
    display: flex;
    padding: 8rem 0 8rem;
  `,
  CountItem: styled.li`
    width: 100%;
    text-align: center;
    padding: 0 2rem;
  `,
  Title: styled.p`
    font-size: 1.5rem;
    font-weight: 500;
    font-family: 'Gelasio', serif;
    margin-top: 1rem;
    color: #fff;
  `,
  Number: styled.span`
    font-size: 3rem;
    font-weight: 800;
    font-family: 'Gelasio', serif;
    color: #fff;
  `,
  Unit: styled.span`
    font-size: 1.3rem;
    font-weight: 500;
    color: #fff;
  `,
};

const CountItems = [
  {
    title: 'Vechicle',
    description: 'Ipsum faucibus vitae aliquet nec ullamcorper sit amet risus.',
    unit: '+',
  },
  {
    title: 'Moto',
    description:
      'Nisi scelerisque eu ultrices vitae auctor eu augue ut lectus.',
    unit: '',
  },
  {
    title: 'Percent',
    description:
      'Porttitor rhoncus dolor purus non enim praesent elementum facilisis.',
    unit: '%',
  },
];

const Count = () => {
  interface Ianimate {
    [key: number]: unknown;
  }

  const animatedCount: Ianimate = {
    0: useScrollCount(0, 10),
    1: useScrollCount(0, 130),
    2: useScrollCount(0, 80),
  };

  return (
    <S.Background>
      <S.Wrapper>
        <S.Count>
          {CountItems.map((item, index) => (
            <S.CountItem key={item.title}>
              <S.Number {...animatedCount[index]}>0</S.Number>
              <S.Unit>{item.unit}</S.Unit>
              <S.Title>{item.title}</S.Title>
            </S.CountItem>
          ))}
        </S.Count>
      </S.Wrapper>
    </S.Background>
  );
};

export default Count;
