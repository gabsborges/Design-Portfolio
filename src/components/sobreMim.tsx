import styled, { keyframes } from "styled-components";
import { SobreMimIcon } from "./sobreMim-icon";

const levitateAnimation = keyframes`
  0% {
    transform: translateY(5px);
  }
  50% {
    transform: translateY(-5px);
  }
  100% {
    transform: translateY(5px);
  }
  `;

const Section = styled.div`
  padding: 30px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 780px) {
      position: relative;
      padding: 80px 0 30px 0;
    }

    @media screen and (max-width: 590px) {
      padding: 80px 0 30px 20px;
    }

  & > svg {
    animation: ${levitateAnimation} 2s ease-in-out infinite;

    @media screen and (max-width: 1250px) {
      width: 150px;
    }
    
    @media screen and (max-width: 780px) {
      position: absolute;
      right: 0;
      top: -45px;
      width: 100px;
    }

  }
`;

const TextDiv = styled.div`
  width: 65%;

  @media screen and (max-width: 780px) {
    width: 100%;
    }
`;

const Title = styled.h1`
  color: var(--primary-color);
  font-size: 32px;
  padding-bottom: 30px;
`;

const Text = styled.p`
  color: var(--secondary-color);
  padding-bottom: 30px;

  @media screen and (max-width: 1050px) {
    font-size: 14px;
  }
`;

const Button = styled.button`
  border: 1px solid var(--primary-color);
  background-color: transparent;
  padding: 12px 18px;
  border-radius: 20px;
  font-size: 18px;
  transition: all ease-in-out 0.3s;
  cursor: pointer;
  
  @media screen and (max-width: 1050px) {
    font-size: 16px;
  }

  &:hover {
    border: 1px solid transparent;
    background-color: var(--primary-color);
  }
`;

export function SobreMim() {
  return (
    <Section id="sobreMim">
      <TextDiv>
        <Title>Sobre mim</Title>
        <Text>
          Olá! Meu nome é Gabriel e sou apaixonado por criar soluções visuais inovadoras e de alta qualidade. Com mais de 3 anos de experiência em design gráfico, sou especializado em branding, design de logotipos, materiais promocionais e design digital.
        </Text>
        <Text>
          Tenho habilidade avançada com a Adobe Creative Suite (Photoshop, Illustrator, InDesign) e um forte conhecimento em UI/UX. Ao longo da minha carreira, trabalhei de forma colaborativa com equipes multifuncionais, desenvolvendo projetos que alinham estética e funcionalidade às necessidades dos clientes.
        </Text>
        <Text>
          Sou uma pessoa bem organizada, detalhista e focada em resolver problemas criativos de forma eficiente. Meu objetivo é entregar resultados que aumentem o engajamento e a satisfação do público, sempre buscando maneiras inovadoras de comunicar visualmente as ideias dos clientes.
        </Text>
        <Button as="a" href="https://whatsa.me/5511948667700" target="_blank">Converse comigo</Button>
      </TextDiv>
      <SobreMimIcon />
    </Section>
  );
}
