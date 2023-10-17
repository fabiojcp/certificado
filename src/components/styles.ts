import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* overflow: scroll; */
  align-items: center;
  width: 100%;
  min-height: 100%;

  background-color: #272b2f;

  gap: 40px;
`;

export const DataContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  /* height: 100%; */

  gap: 20px;
`;

export const PDFFrame = styled.div`
  background-color: #fbfffc;
  width: 40%;
  aspect-ratio: 1.414 / 1;
`;

export const PDFContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: calc(100% - 40px);
  height: calc(100% - 60px);

  margin: 20px;
  border-radius: 5px;

  border: 1px solid #f2b705;

  color: #252525;

  padding: 10px 0;

  gap: 10px;
`;

export const Title = styled.p`
  font-size: 30px;
  font-weight: 500;
`;

export const Title2 = styled.p`
  font-size: 40px;
  font-weight: 800;
  margin-top: -10px;
`;

export const Text = styled.p`
  font-size: 10px;
  font-weight: 400;
  max-width: 80%;
  text-align: center;
`;

export const Texts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
`;

export const SignatureContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 60%;
  gap: 6px;
  margin-bottom: 40px;
`;

export const Signature = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 6px;
  p {
    font-size: 10px;
    font-weight: 500;
  }

  p:first-child {
    border-bottom: 1px solid #252525;
    min-width: 40%;
  }
`;

export const Input = styled.input``;
