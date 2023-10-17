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

  gap: 6px;
`;

export const Label = styled.label`
  color: #fbfffc;
  margin-bottom: -4px;
  text-align: left;
`;

export const Input = styled.input``;

export const ExportButton = styled.div``;
