import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section rowpadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        Raed's Portfolio
      </SectionTitle>

      <SectionText></SectionText>

      <Button onClick={() => (window.location = "https://google.com")}>
        {" "}
        Learn more
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
