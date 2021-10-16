import React from 'react';
import styled from 'styled-components';
import useScrollFadeIn from '@src/hooks/useScrollFadeIn';
import { E302 } from '@src/assets';

const S = {
  Wrapper: styled.section`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    max-width: 1180px;
    margin: auto;
    padding: 5rem 0 5rem;
  `,
  DetailWrapper: styled.div`
    display: flex;
    flex-direction: column;
    flex: 0 0 50%;
    align-items: flex-start;
    justify-content: flex-start;
  `,
  Title: styled.p`
    font-size: 3rem;
    font-weight: 900;
    font-family: 'Gelasio', serif;
    margin-bottom: 4rem;
    color: #2980b9;
  `,
  Description: styled.p`
    font-size: 2rem;
    font-weight: 500;
    font-family: 'Gelasio', serif;
  `,
  Image: styled.div`
    width: 400px;
    height: 600px;
    background: no-repeat center/cover url(${E302});
    box-shadow: 0px 0px 20px 20px #ececec;
  `,
};

const Detail = () => {
  return (
    <S.Wrapper>
      <S.DetailWrapper>
        <S.Title>Detail</S.Title>
        <S.Description>
          Vestibulum condimentum ullamcorper eros, quis convallis sapien
          dignissim eget.
          <br /> <br />
          Nullam finibus, metus vel accumsan commodo, lectus mauris ornare
          metus, quis gravida ex dolor id enim. Vestibulum vel risus viverra.
        </S.Description>
      </S.DetailWrapper>
      <S.Image {...useScrollFadeIn('left', 2, 0)} />
    </S.Wrapper>
  );
};

export default Detail;
