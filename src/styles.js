import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: 100vh;
  background-color: #cacaca;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.section`
  background-color: #fafafa;
  width: 95%;
  max-width: 500px;
  min-height: 350px;
`;

export const Row = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
