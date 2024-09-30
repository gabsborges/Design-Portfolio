import { keyframes, styled } from "styled-components"
import WhatsAppFloat from "./whatsAppFloat";
import LinkedInFloat from "./linkedInFloat";
import GitHubFloat from "./gitHubFloat";
import MailFloat from "./mailFloat";

const levitateAnimation = keyframes`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
  }
  `;

const Section = styled.div`
    position: fixed;
    left: 50px;
    bottom: 0px;

    @media screen and (max-width: 1100px) {
      left: 30px;
  }

    @media screen and (max-width: 740px) {
      left: 20px;
  }
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 24px;
`;

const Link = styled.a`
  cursor: pointer;

  &:hover > svg {
    animation: ${levitateAnimation} 2s ease-in-out infinite;

    path {
      fill: var(--primary-color);
    }
  }
`;

const Span = styled.span`
    content: '';
    width: 4px;
    height: 16vh;
    background-color: #D9D9D9;
`;

export function Socials() {
    return (
        <Section>
            <Wrapper>
                <Link href="https://whatsa.me/5511948667700" target="_blank">
                    <WhatsAppFloat/>
                </Link>
                <Link href="mailto:gabriel.borges_96&#64;hotmail.com"  target="_blank">
                    <MailFloat/>
                </Link>
                <Span/>
            </Wrapper>
        </Section>
    )
}