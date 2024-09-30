import styled from "styled-components";

const MainArea = styled.div`
  display: flex;
  padding: 100px 0;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 870px) {
    flex-direction: column-reverse;
    gap: 50px;
    padding: 60px 0;
  }

  @media screen and (max-width: 590px) {
      padding: 60px 0 60px 20px;
    }
`;

const MainTextArea = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.3;
`;

const MainFirstText = styled.p`
  font-size: 42px;

  @media screen and (max-width: 1050px) {
    font-size: 32px;
  }

  @media screen and (max-width: 460px) {
    font-size:26px;
  }
`;

const MainSecondText = styled.h1`
  font-size: 52px;
  color: var(--primary-color);

  @media screen and (max-width: 1050px) {
    font-size: 42px;
  }

  @media screen and (max-width: 460px) {
    font-size: 32px;
  }
`;

const MainThirdText = styled.h2`
  font-size: 28px;
  color: var(--secondary-color);
  margin-bottom: 24px;

  @media screen and (max-width: 1050px) {
    font-size: 18px;
  }

  @media screen and (max-width: 460px) {
    font-size: 16px;
  }
`;

const ButtonArea = styled.div`
  display: flex;
  gap: 28px;

  @media screen and (max-width: 490px) {
    gap: 14px;
  }

  @media screen and (max-width: 460px) {
    gap: 12px;
    flex-direction: column;
  }
`;

const MainButton = styled.button<{ primary?: boolean }>`
  border: 1px solid ${(props) =>
    props.primary ? "transparent" : "var(--primary-color)"};
  background-color: ${(props) =>
    props.primary ? "var(--primary-color)" : "transparent"};
  padding: 9px 18px 6px 18px;
  border-radius: 20px;
  font-size: 18px;
  transition: all ease-in-out 0.3s;
  cursor: pointer;

  @media screen and (max-width: 1050px) {
    font-size: 16px;
  }

  @media screen and (max-width: 460px) {
    font-size: 14px;
    text-align: center;
  }

  &:hover {
    border: 1px solid
      ${(props) => (props.primary ? "var(--primary-color)" : "transparent")};
    background-color: ${(props) =>
    props.primary ? "transparent" : "var(--primary-color)"};
  }
`;

const Image = styled.img`
  @media screen and (max-width: 1240px) {
    width: 400px;
  }

  @media screen and (max-width: 960px) {
    width: 320px;
  }

  @media screen and (max-width: 870px) {
    width: 440px;
  }

  @media screen and (max-width: 625px) {
    width: 400px;
  }

  @media screen and (max-width: 525px) {
    width: 320px;
  }
`;

export function MainSection() {
  return (
    <MainArea>
      <MainTextArea>
        <MainFirstText>Olá, eu sou o</MainFirstText>
        <MainSecondText>Gabriel Borges</MainSecondText>
        <MainThirdText>Designer Gráfico</MainThirdText>
        <ButtonArea>
          <MainButton primary download="GabrielBorges-PTBR.pdf" as="a" href="/GabrielBorges-PTBR.pdf">Download CV</MainButton>
          <MainButton as="a" href="https://whatsa.me/5511948667700" target="_blank">Entrar em contato</MainButton>
        </ButtonArea>
      </MainTextArea>
      <Image src="./mainImage.png" width={550} alt="Imagem principal" />
    </MainArea>
  );
}
