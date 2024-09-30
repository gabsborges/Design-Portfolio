import { styled } from "styled-components";
import { HtmlIcon } from "./html-icon";
import { CssIcon } from "./css-icon";
import { JavaScriptIcon } from "./javascript-icon";
import { WordPressIcon } from "./wordPress-icon";
import { BootstrapIcon } from "./bootstrap-icon";
import { TypeScriptIcon } from "./typescript-icon";
import { ReactIcon } from "./react-icon";
import { StyledComponentsIcon } from "./styledComponent-icon";
import { GraphQlIcon } from "./graphQl-icon";
import { MySqlIcon } from "./mySql-icon";
import { useState } from "react";

interface CardProps {
  show?: boolean;
}

interface Messages {
  [key: string]: string;
}

const Section = styled.section`
  padding: 100px 0;

  @media screen and (max-width: 870px) {
    padding: 60px 0;
  }

  @media screen and (max-width: 590px) {
      padding: 60px 0 60px 20px;
    }
`;

const H1 = styled.h1`
  font-size: 32px;
  color: var(--primary-color);
  padding-bottom: 30px;
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 50px;

  @media screen and (max-width: 940px) {
    gap: 35px;
  }

  @media screen and (max-width: 890px) {
    height: 400px;
    overflow-y: auto;
  }

  @media screen and (max-width: 890px) {
    justify-content: center;
  }
`;


const Label = styled.p`
  font-size: 18px;
  color: var(--primary-color);

  @media screen and (max-width: 940px) {
    font-size: 16px;
  }
`;

const Card = styled.div<CardProps>`
  width: 150px;
  height: 120px;
  display: flex;
  padding: 12px 15px;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border: 1px solid var(--primary-color);
  border-width: 1px 1px 6px 1px;
  border-radius: 20px 0 0 0;
  cursor: pointer;

  @media screen and (max-width: 825px) {
    width: 124px;
  }

  &:nth-child(8) ${Label} {
    font-size: 14px;

    @media screen and (max-width: 825px) {
      font-size: 12px
  }
  }

  &:nth-child(8) {
    padding: 15px 4px;
  }

  &:hover {
    background-color: var(--secondary-color);
  }

  & > svg {
    width: 50px;
  }
`;

const MessageCard = styled.div<CardProps>`
  padding-top: 50px;
  line-height: 2;
  color: white;
  display: flex;
  flex-direction: column;
  opacity: ${(props) => (props.show ? 1 : 0)};
  pointer-events: ${(props) => (props.show ? 'auto' : 'none')};
  transition: opacity 0.2s;
`;

const MessageTitle = styled.div`
  padding-bottom: 10px;
  color: var(--primary-color);
  font-size: 32px;
`;

const Message = styled.div`
  line-height: 2;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;

  @media screen and (max-width: 870px) {
    font-size: 16px;
  }

  @media screen and (max-width: 825px) {
    font-size: 14px;
  }

  @media screen and (max-width: 560px) {
    font-size: 12px;
  }
`;

const menuItems = [
    { label: "Branding", icon: <HtmlIcon /> },
    { label: "Logotipos", icon: <CssIcon /> },
    { label: "Promocionais", icon: <JavaScriptIcon /> },
    { label: "Digital", icon: <WordPressIcon /> },
    { label: "UIUX", icon: <BootstrapIcon /> },
    { label: "Photoshop", icon: <TypeScriptIcon /> },
    { label: "Illustrator", icon: <ReactIcon /> },
    { label: "InDesign", icon: <StyledComponentsIcon /> },
    { label: "Figma", icon: <GraphQlIcon /> },
];

const messages: Messages = {
  Branding: 'Com uma sólida experiência em branding, desenvolvo identidades visuais que refletem a essência de uma marca, promovendo consistência em todos os pontos de contato. Meu trabalho vai além de criar logotipos; envolve a construção de uma linguagem visual completa que conecta empresas ao seu público de maneira impactante e eficaz. Utilizo princípios de design alinhados com as estratégias de marketing, garantindo que cada elemento visual, desde a escolha das cores até a tipografia, fortaleça a presença da marca no mercado e aumente o reconhecimento.',
  Logotipos: 'Especializado em criar logotipos memoráveis que sintetizam os valores e a personalidade de uma marca. Trabalho com abordagens conceituais, explorando formas e cores que comunicam a essência da empresa de maneira simples e direta. Acredito que um bom logotipo deve ser versátil, capaz de funcionar em diversos formatos e tamanhos, mantendo sempre sua integridade visual. Com mais de 3 anos de experiência, desenvolvi logotipos que se destacam pela clareza e originalidade, ajudando marcas a se posicionarem de forma única.',
  Promocionais: 'Tenho vasta experiência na criação de materiais promocionais, como flyers, banners, catálogos, e-mail marketing e posts para redes sociais. Meu foco é desenvolver peças que não só chamem a atenção visualmente, mas também comuniquem de forma clara e objetiva a mensagem central da marca. Sempre atento às tendências de design, utilizo ferramentas da Adobe Creative Suite para entregar materiais que engajem o público e reforcem as campanhas de marketing, maximizando a conversão e o impacto das ações promocionais.',
  Digital: 'Meu trabalho em design digital abrange a criação de interfaces e layouts que priorizam a experiência do usuário. Tenho experiência em projetar para sites, aplicativos e outras plataformas digitais, focando na usabilidade e estética visual. Com forte domínio em UI/UX, trabalho para garantir que o design não apenas seja bonito, mas também funcione bem e ofereça uma navegação intuitiva. Meus projetos digitais são pensados para dispositivos móveis e desktop, sempre garantindo uma experiência consistente e fluida em múltiplos ambientes.',
  UIUX: 'Tenho forte conhecimento em UI/UX, aplicando princípios de design centrado no usuário para criar interfaces funcionais e intuitivas. Meu processo de design envolve pesquisa, desenvolvimento de wireframes, prototipagem e testes de usabilidade para garantir que cada projeto atenda às necessidades do público-alvo de forma eficiente. Além de focar na estética, me preocupo em entregar uma experiência fluida e sem atritos, levando em consideração as boas práticas de acessibilidade e usabilidade em todas as etapas de desenvolvimento de interfaces digitais.',
  Photoshop: 'Com domínio avançado no Adobe Photoshop, realizo edições de imagem, manipulações fotográficas, criação de layouts complexos e ajustes visuais para materiais digitais e impressos. Utilizo a ferramenta para retocar imagens de alta qualidade, ajustar cores, trabalhar com camadas e efeitos visuais que aprimoram a qualidade das peças. Em projetos recentes, utilizei o Photoshop para criar mockups de campanhas publicitárias e peças de e-commerce. A habilidade de trabalhar com detalhes minuciosos me permite entregar resultados refinados, prontos para uso comercial ou publicitário.',
  Illustrator: 'Especialista no Adobe Illustrator, desenvolvo gráficos vetoriais, ilustrações e logotipos escaláveis, que mantêm a qualidade em qualquer tamanho. Essa ferramenta é a base para meu trabalho em identidades visuais e projetos que exigem precisão gráfica, como criação de ícones, padrões e tipografia personalizada. Recentemente, utilizei o Illustrator para a criação de identidades visuais completas, integrando branding e design digital. A habilidade de criar elementos versáteis e prontos para impressão me permite entregar projetos visuais com alta consistência.',
  InDesign: 'Experiente no Adobe InDesign, crio layouts editoriais profissionais e materiais promocionais com atenção a todos os detalhes técnicos. A ferramenta é ideal para o desenvolvimento de revistas, catálogos, e-books e brochuras, permitindo o controle preciso sobre a tipografia e a organização dos elementos visuais. Em projetos colaborativos, utilizo o InDesign para compilar materiais publicitários e relatórios corporativos, garantindo que o design final esteja pronto para impressão ou publicação digital. Minha experiência também inclui a otimização de arquivos para impressão em gráficas, assegurando cores e formatos precisos.',
  Figma: 'Possuo amplo conhecimento no Figma, uma das principais ferramentas de design colaborativo, que utilizo para criar interfaces de usuário (UI) e protótipos interativos. Minha experiência com o Figma envolve o desenvolvimento de wireframes, mockups e prototipagem de alta fidelidade, permitindo uma visualização clara e prática dos projetos antes de sua implementação. Colaboro de maneira eficaz com equipes multifuncionais, facilitando a troca de feedbacks e atualizações em tempo real. O Figma também me permite garantir que os designs sejam consistentes e otimizados para múltiplas resoluções e dispositivos.',
};

export function Conhecimentos() {
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState('');
  const [title, setTitle] = useState('');

  const handleMouseEnter = (label: string) => {
    setMessage(messages[label] || '');
    setTitle(label || '');
    setShowMessage(true);
  };

  const handleMouseLeave = () => {
    setShowMessage(false);
  };

  return (
    <Section id="conhecimentos">
      <H1>Conhecimentos</H1>
      <Cards>
        {menuItems.map((item) => (
          <Card
            key={item.label}
            onMouseEnter={() => handleMouseEnter(item.label)}
            onMouseLeave={handleMouseLeave}
          >
            <Label>{item.label}</Label>
            {item.icon}
          </Card>
        ))}
      </Cards>
      <MessageCard show={showMessage}>
        <MessageTitle>{title}</MessageTitle>
        <Message>{message}</Message>
      </MessageCard>
    </Section>
  );
}