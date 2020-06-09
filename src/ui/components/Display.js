import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const Container = styled.section`
  margin: 0 0 2px;
  padding: 8px;
  border-radius: 4px;
  background-color: #f0f0f0;
  box-shadow: inset 0 0 4px #888;
`;

const NumberRow = styled.div``;

const ErrorRow = styled.div`
  color: red;
  font-variant: small-caps;
  animation: blinker 1s linear infinite;
  @keyframes blinker {
    50% {
      opacity: 0;
    }
  }
`;

const format = (x) => {
  const absX = Math.abs(x);
  return (absX > 1e10 || absX < 1e-2) && x !== 0
    ? x.toExponential()
    : x.toString();
};

const Display = () => {
  const {
    stack: [x, y, z, t],
    buffer,
    error,
  } = useSelector((state) => state.logic);
  return (
    <Container>
      <NumberRow>𝑡: {format(t)}</NumberRow>
      <NumberRow>𝑧: {format(z)}</NumberRow>
      <NumberRow>𝑦: {format(y)}</NumberRow>
      {error ? (
        <ErrorRow>𝑥: error</ErrorRow>
      ) : (
        <NumberRow>𝑥: {buffer || format(x)}</NumberRow>
      )}
    </Container>
  );
};

export default Display;
