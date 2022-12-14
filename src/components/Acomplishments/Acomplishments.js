import React from "react";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AcomplishmentsStyles";

const data = [
  { number: 2, text: "University Degrees" },
  { number: 6, text: "Web application projects" },
  { number: 2, text: "C1 language certificates (French/English)" },
];

const Acomplishments = () => (
  <Section>
    <SectionTitle> Personal Acomplishments</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box Key={index}>
          <BoxNum>{card.number}+</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
