import React from 'react';
import styled from 'styled-components';

const S = {
  Wrapper: styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 1180px;
    margin-top: 700px;
  `,
  Label: styled.p`
    font-size: 1.5rem;
    font-weight: 800;
    font-family: 'Gelasio', serif;
    text-align: center;
    margin-bottom: 1rem;
    color: #2980b9;
  `,
  Title: styled.h2`
    font-size: 2rem;
    font-weight: 700;
    font-family: 'Gelasio', serif;
    text-align: center;
    margin-bottom: 2rem;
  `,
  ServiceWrapper: styled.ul`
    width: 100%;
    display: flex;
    justify-content: space-between;
  `,
  Service: styled.li`
    display: flex;
    flex-direction: column;
    width: 350px;
    padding: 1rem;
    background-color: #ecf0f1;
    box-shadow: 10px 10px 16px 8px rgba(0, 0, 0, 0.03);
    border-radius: 0.5rem;
    cursor: pointer;
  `,
  ServiceTitle: styled.h2`
    font-size: 1.2rem;
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
  return (
    <S.Wrapper>
      <S.Label>BMW</S.Label>
      <S.Title>
        Cras non risus finibus, tincidunt justo et,
        <br /> dictum diam.
      </S.Title>
      <S.ServiceWrapper>
        {ServicesItems.map((item) => (
          <S.Service key={item.title}>
            <S.ServiceTitle>{item.title}</S.ServiceTitle>
            <S.ServiceDescription>{item.description}</S.ServiceDescription>
          </S.Service>
        ))}
      </S.ServiceWrapper>
    </S.Wrapper>
  );
};

export default Services;
