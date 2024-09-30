import { styled } from "styled-components"

const Section = styled.div`
    padding: 30px 0;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const P = styled.p`
    font-size: 14px;
`;

const currentYeart = new Date().getFullYear()


export function Footer() {
    return (
        <Section>
            <P>Ⓒ {currentYeart} | Gabriel Borges</P>
        </Section>
    )
}