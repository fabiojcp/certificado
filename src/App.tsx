import React from "react";

import PDF from "./components/pdf";

import { PDFDownloadLink } from "@react-pdf/renderer";

import * as S from "./styles";
import "./styles.css";
import MyDocument from "./helper/pdf";

function App() {
  const [student, setStudent] = React.useState("Fábio José Casanova Penteado");
  const [course, setCourse] = React.useState(
    "Typescript, Node. Criação de aplicações FullStack"
  );
  const [holder, setHolder] = React.useState("João Vitor Oliveira dos Santos");

  return (
    <S.Container>
      <S.DataContainer>
        <S.Label>Aluno</S.Label>
        <S.Input
          autoComplete="false"
          placeholder="Aluno"
          onChange={(e) => setStudent(e.target.value)}
          value={student}
        />

        <S.Label>Curso</S.Label>
        <S.Input
          autoComplete="false"
          placeholder="Curso"
          onChange={(e) => setCourse(e.target.value)}
          value={course}
        />

        <S.Label>Professor</S.Label>
        <S.Input
          autoComplete="false"
          placeholder="Professor"
          onChange={(e) => setHolder(e.target.value)}
          value={holder}
        />
      </S.DataContainer>
      <PDF student={student} course={course} holder={holder} />

      <S.ExportButton>
        <PDFDownloadLink
          document={
            <MyDocument student={student} course={course} holder={holder} />
          }
          fileName={`Certificado ${course}.pdf`}
        >
          Exportar
        </PDFDownloadLink>
      </S.ExportButton>
    </S.Container>
  );
}

export default App;
