import React from 'react';
import styled from 'styled-components';

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
    padding: 5rem 0 5rem;
  `,
  CountItem: styled.li`
    width: 100%;
    text-align: center;
    padding: 0 2rem;
  `,
  Title: styled.p`
    font-size: 2rem;
    font-weight: 800;
    color: #fff;
  `,
  Number: styled.p`
    font-size: 1.5rem;
    font-weight: 500;
    color: #fff;
  `,
};

const CountItems = [
  {
    title: 'Vechicle',
    number: 240,
    description: 'Ipsum faucibus vitae aliquet nec ullamcorper sit amet risus.',
  },
  {
    title: 'Moto',
    number: 12,
    description:
      'Nisi scelerisque eu ultrices vitae auctor eu augue ut lectus.',
  },
  {
    title: 'Percent',
    number: '80%',
    description:
      'Porttitor rhoncus dolor purus non enim praesent elementum facilisis.',
  },
];

const Count = () => {
  return (
    <S.Background>
      <S.Wrapper>
        <S.Count>
          {CountItems.map((item, index) => (
            <S.CountItem key={item.title}>
              <S.Title>{item.title}</S.Title>
              <S.Number>{item.number}</S.Number>
            </S.CountItem>
          ))}
        </S.Count>
      </S.Wrapper>
    </S.Background>
  );
};

export default Count;
