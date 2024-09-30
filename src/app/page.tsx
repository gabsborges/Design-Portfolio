"use client"

import { Conhecimentos } from "@/components/conhecimentos";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { MainSection } from "@/components/mainSection";
import { Projetos } from "@/components/projetos";
import { SobreMim } from "@/components/sobreMim";
import { Socials } from "@/components/socials";
import { styled } from "styled-components";

const Section = styled.div`
  display: flex;
  
`

const Wrapper = styled.div`
  width: 80%;
  margin: 0 auto;
`

export default function Home() {
  return (
    <Section>
      <Socials/>
      <Wrapper>
        <Header/>
        <MainSection/>
        <SobreMim/>
        <Conhecimentos/>
        <Projetos/>
        <Footer/>
      </Wrapper>
    </Section>
  )
}
