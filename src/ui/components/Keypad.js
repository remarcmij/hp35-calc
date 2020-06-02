import React from 'react';
import styled from 'styled-components';
import Key from './Key';

const GridContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(20, 1fr);
  grid-column-gap: 2px;
  grid-row-gap: 2px;
  height: 100%;
  border-radius: 4px;
  background-color: #c5cae9;
  padding: 4px;
`;

const KeySpan5 = styled(Key)`
  grid-column: auto / span 5;
`;

const KeySpan4 = styled(Key)`
  grid-column: auto / span 4;
`;

const EnterKey = styled(Key)`
  grid-column: auto / span 8;
`;

const Keypad = () => {
  return (
    <GridContainer>
      <KeySpan4 opcode="NOOP" />
      <KeySpan4 opcode="NOOP" />
      <KeySpan4 opcode="NOOP" />
      <KeySpan4 opcode="NOOP" />
      <KeySpan4 opcode="NOOP" />

      <KeySpan4 opcode="NOOP" />
      <KeySpan4 opcode="NOOP" />
      <KeySpan4 opcode="NOOP" />
      <KeySpan4 opcode="NOOP" />
      <KeySpan4 opcode="NOOP" />

      <KeySpan4 opcode="NOOP" />
      <KeySpan4 opcode="NOOP" />
      <KeySpan4 opcode="NOOP" />
      <KeySpan4 opcode="NOOP" />
      <KeySpan4 opcode="NOOP" />

      <EnterKey opcode="ENTER" />
      <KeySpan4 opcode="CHS" />
      <KeySpan4 opcode="EEX" />
      <KeySpan4 opcode="CLX" />

      <KeySpan5 opcode="SUB" />
      <KeySpan5 opcode="D7" />
      <KeySpan5 opcode="D8" />
      <KeySpan5 opcode="D9" />

      <KeySpan5 opcode="ADD" />
      <KeySpan5 opcode="D4" />
      <KeySpan5 opcode="D5" />
      <KeySpan5 opcode="D6" />

      <KeySpan5 opcode="MUL" />
      <KeySpan5 opcode="D1" />
      <KeySpan5 opcode="D2" />
      <KeySpan5 opcode="D3" />

      <KeySpan5 opcode="DIV" />
      <KeySpan5 opcode="D0" />
      <KeySpan5 opcode="DOT" />
      <KeySpan5 opcode="PI" />
    </GridContainer>
  );
};

export default Keypad;
