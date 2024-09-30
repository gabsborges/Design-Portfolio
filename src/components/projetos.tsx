import { styled } from "styled-components";

const Section = styled.section`
  padding: 100px 0 50px 0;

  @media screen and (max-width: 870px) {
    padding: 40px 0 30px 0;
  }

  @media screen and (max-width: 590px) {
    padding: 40px 0 30px 20px;
  }
`;

const H1 = styled.h1`
  font-size: 32px;
  color: var(--primary-color);
  padding-bottom: 30px;

  @media screen and (max-width: 600px) {
    font-size: 24px; /* Tamanho da fonte reduzido em telas pequenas */
  }
`;

const ProjectCards = styled.div`
  padding: 0 20px;
  height: 700px; 
  width: 100%; /* Ajusta a largura para ocupar 100% */
  max-width: 900px; /* Define um limite máximo de largura */
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 4px;
  }
`;

const GalleryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 colunas em telas grandes */
  gap: 16px;
  padding: 20px;

  @media screen and (max-width: 870px) {
    grid-template-columns: repeat(2, 1fr); /* 2 colunas em telas médias */
  }

  @media screen and (max-width: 600px) {
    padding: 10px;
    grid-template-columns: 1fr; /* 1 coluna em telas pequenas */
  }
`;

const ImageWrapper = styled.div`
  overflow: hidden;
  height: auto;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.5s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

const Image = styled.img`
  width: 100%; /* Ajustado para ocupar a largura do wrapper */
  height: auto;
  border-radius: 8px;
`;

export function Projetos() {
  const images = [
    { src: "./Prancheta 1.png", alt: 'Imagem de Portfolio' },
    { src: "./Prancheta 1-01.png", alt: 'Na brasa' },
    { src: "./Prancheta 1-02.png", alt: 'Festival Praia Grande' },
    { src: "./Prancheta 1-03.png", alt: 'Baile da Dricka' },
    { src: "./Prancheta 1-04.png", alt: 'Bom Gosto' },
    { src: "./Prancheta 1-05.png", alt: 'Jotas Burger Logo' },
    { src: "./Prancheta 1-06.png", alt: 'Jotas Banner' },
    { src: "./Prancheta 1-07.png", alt: 'Jotas Post' },
    { src: "./Prancheta 1-08.png", alt: 'Jotas Papelaria' },
    { src: "./Prancheta 1-09.png", alt: 'Healthy Bite Logo' },
    { src: "./Prancheta 1-10.png", alt: 'Healthy Bite Promo' },
    { src: "./Prancheta 1-11.png", alt: 'Santa Cruz Coffee' },
    { src: "./Prancheta 1-12.png", alt: 'PlugAê Tester' },
    // Adicione mais imagens conforme necessário
  ];

  return (
    <Section id="projetos">
      <H1>Últimos Projetos</H1>
      <ProjectCards>
        <GalleryContainer>
          {images.map((image, index) => (
            <ImageWrapper key={index} onClick={() => window.open(image.src, '_blank')}>
              <Image src={image.src} alt={image.alt} />
            </ImageWrapper>
          ))}
        </GalleryContainer>
      </ProjectCards>
    </Section>
  );
}
