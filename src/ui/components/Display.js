import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const Container = styled.div`
  margin: 0 0 2px;
  padding: 8px;
  border-radius: 4px;
  background-color: #f0f0f0;
  box-shadow: inset 0 0 4px #888;
`;

const NumberRow = styled.div``;

const Display = () => {
  const {
    stack: [x, y, z, t],
    buffer,
    error,
  } = useSelector((state) => state.cpu);
  return (
    <Container>
      {error ? (
        error.message
      ) : (
        <>
          <NumberRow>𝑡: {t}</NumberRow>
          <NumberRow>𝑧: {z}</NumberRow>
          <NumberRow>𝑦: {y}</NumberRow>
          <NumberRow>𝑥: {buffer || x}</NumberRow>
        </>
      )}
    </Container>
  );
};

export default Display;
