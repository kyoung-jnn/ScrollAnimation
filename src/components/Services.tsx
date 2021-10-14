import React from 'react';
import styled from 'styled-components';
import useScrollFadeIn from '@src/hooks/useScrollFadeIn';

const S = {
  Wrapper: styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: auto;
    width: 100%;
    margin-top: 800px;
    max-width: 1180px;
  `,
  Label: styled.p`
    font-size: 1.5rem;
    font-weight: 900;
    font-family: 'Gelasio', serif;
    text-align: center;
    margin-bottom: 1rem;
    color: #2980b9;
  `,
  Title: styled.p`
    font-size: 2rem;
    font-weight: 900;
    font-family: 'Gelasio', serif;
    text-align: center;
    margin-bottom: 2rem;
  `,
  ServiceWrapper: styled.ul`
    width: 100%;
    display: flex;
    justify-content: space-between;
  `,
  ServiceItem: styled.li`
    display: flex;
    flex-direction: column;
    width: 350px;
    padding: 1rem;
    background-color: #fcfeff;
    box-shadow: 0px 0px 20px 10px rgba(0, 0, 0, 0.03);
    border-radius: 0.5rem;
    cursor: pointer;
  `,
  ServiceTitle: styled.h2`
    font-size: 1.2rem;
    font-weight: 900;
    margin-bottom: 1rem;
  `,
  ServiceDescription: styled.p`
    font-size: 1rem;
    margin-bottom: 0.5rem;
  `,
};

const ServicesItems = [
  {
    title: 'E30',
    description:
      'Facilisis mauris sit amet massa. Commodo odio aenean sed adipiscing. In hac habitasse platea dictumst quisque sagittis purus.',
    button: 'Get Info',
  },
  {
    title: 'F30',
    description:
      'Adipiscing tristique. Mi eget mauris pharetra et. Non tellus orci ac auctor augue. Pulvinar elementum integer enim neque volutpat ac.',
    button: 'Get Info',
  },
  {
    title: 'G20',
    description:
      'Dui accumsan sit. Ornare arcu dui vivamus arcu felis. Egestas integer eget aliquet nibh praesent.',
    button: 'Get Info',
  },
];

const Services = () => {
  interface Ianimate {
    [key: number]: any;
  }
  const animatedService: Ianimate = {
    0: useScrollFadeIn('up', 1, 0),
    1: useScrollFadeIn('up', 1, 0.2),
    2: useScrollFadeIn('up', 1, 0.4),
  };

  return (
    <S.Wrapper>
      <S.Label>BMW</S.Label>
      <S.Title>
        Cras non risus finibus, tincidunt justo et,
        <br /> dictum diam.
      </S.Title>
      <S.ServiceWrapper>
        {ServicesItems.map((item, index) => (
          <S.ServiceItem key={item.title} {...animatedService[index]}>
            <S.ServiceTitle>{item.title}</S.ServiceTitle>
            <S.ServiceDescription>{item.description}</S.ServiceDescription>
          </S.ServiceItem>
        ))}
      </S.ServiceWrapper>
    </S.Wrapper>
  );
};

export default Services;
