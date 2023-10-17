import * as S from "./styles";

interface PDFProps {
  student: string;
  course: string;
  holder: string;
}
export default function PDF({ student, course, holder }: PDFProps) {
  return (
    <S.PDFFrame>
      <S.PDFContainer>
        <S.Texts>
          <S.Title>CERTIFICADO DE</S.Title>
          <S.Title2>CONCLUSÃO</S.Title2>
        </S.Texts>

        <S.Texts style={{ marginTop: "-60px" }}>
          <S.Text>Certificamos que, para os devidos fins, que</S.Text>
          <S.Title>{student}</S.Title>
          <S.Text>
            concluiu o curso "{course}" ministrado por "{holder}".
          </S.Text>
        </S.Texts>

        <S.SignatureContainer>
          <S.Signature style={{ marginBottom: "40px" }}>
            <p>{holder}</p>
            <p>Instrutor</p>
          </S.Signature>

          <S.Signature style={{ marginBottom: "40px" }}>
            <p style={{ color: "transparent" }}>{holder}</p>
            <p>Aluno</p>
          </S.Signature>
        </S.SignatureContainer>
      </S.PDFContainer>
    </S.PDFFrame>
  );
}
