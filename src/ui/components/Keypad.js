import React from 'react';
import styled from 'styled-components';
import Key from './Key';

const GridContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(20, 1fr);
  grid-column-gap: 2px;
  grid-row-gap: 2px;
  width: 320px;
  height: 320px;
`;

const Key4 = styled(Key)`
  grid-column: auto / span 5;
`;

const Key5 = styled(Key)`
  grid-column: auto / span 4;
`;

const EnterKey = styled(Key)`
  grid-column: auto / span 8;
`;

const Keypad = () => {
  return (
    <GridContainer>
      <Key5 opcode="NOOP" />
      <Key5 opcode="NOOP" />
      <Key5 opcode="NOOP" />
      <Key5 opcode="NOOP" />
      <Key5 opcode="NOOP" />

      <Key5 opcode="NOOP" />
      <Key5 opcode="NOOP" />
      <Key5 opcode="NOOP" />
      <Key5 opcode="NOOP" />
      <Key5 opcode="NOOP" />

      <Key5 opcode="NOOP" />
      <Key5 opcode="NOOP" />
      <Key5 opcode="NOOP" />
      <Key5 opcode="NOOP" />
      <Key5 opcode="NOOP" />

      <EnterKey opcode="ENTER" />
      <Key5 opcode="CHS" />
      <Key5 opcode="EEX" />
      <Key5 opcode="CLX" />

      <Key4 opcode="SUB" />
      <Key4 opcode="D7" />
      <Key4 opcode="D8" />
      <Key4 opcode="D9" />

      <Key4 opcode="ADD" />
      <Key4 opcode="D4" />
      <Key4 opcode="D5" />
      <Key4 opcode="D6" />

      <Key4 opcode="MUL" />
      <Key4 opcode="D1" />
      <Key4 opcode="D2" />
      <Key4 opcode="D3" />

      <Key4 opcode="DIV" />
      <Key4 opcode="D0" />
      <Key4 opcode="DOT" />
      <Key4 opcode="PI" />
    </GridContainer>
  );
};

export default Keypad;
