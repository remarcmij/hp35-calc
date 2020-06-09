import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import C from '../../shared/opcodes';
import { execute } from '../../store/logic/actions';
import { toggleArcMode } from '../../store/ui/actions';
import Key from './Key';
import KeypadContext from './KeypadContext';

const GridContainer = styled.section`
  flex: 1;
  display: grid;
  grid-template-columns: repeat(20, 1fr);
  grid-column-gap: 2px;
  grid-row-gap: 2px;
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

const arcMappings = {
  [C.SIN]: C.ASIN,
  [C.COS]: C.ACOS,
  [C.TAN]: C.ATAN,
};

const Keypad = () => {
  const dispatch = useDispatch();
  const { arcMode } = useSelector((state) => state.ui);

  const handleClick = (opcode) => {
    if (opcode === C.ARC) {
      dispatch(toggleArcMode());
      return;
    }

    const targetOpcode = arcMode ? arcMappings[opcode] || opcode : opcode;
    dispatch(execute(targetOpcode));

    if (arcMode) {
      dispatch(toggleArcMode());
    }
  };

  return (
    <KeypadContext.Provider value={handleClick}>
      <GridContainer>
        <KeySpan4 opcode={C.POW} zoom />
        <KeySpan4 opcode={C.LOG} />
        <KeySpan4 opcode={C.LN} />
        <KeySpan4 opcode={C.EXP} zoom />
        <KeySpan4 opcode={C.CLR} />

        <KeySpan4 opcode={C.SQRT} />
        <KeySpan4 opcode={C.ARC} />
        <KeySpan4 opcode={C.SIN} />
        <KeySpan4 opcode={C.COS} />
        <KeySpan4 opcode={C.TAN} />

        <KeySpan4 opcode={C.RECIPROCAL} zoom />
        <KeySpan4 opcode={C.SWAP} zoom />
        <KeySpan4 opcode={C.ROLL_DOWN} />
        <KeySpan4 opcode={C.STO} />
        <KeySpan4 opcode={C.RCL} />

        <EnterKey opcode={C.ENTER} />
        <KeySpan4 opcode={C.CHS} />
        <KeySpan4 opcode={C.EEX} />
        <KeySpan4 opcode={C.CLX} />

        <KeySpan5 opcode={C.SUB} zoom />
        <KeySpan5 opcode={C.D7} />
        <KeySpan5 opcode={C.D8} />
        <KeySpan5 opcode={C.D9} />

        <KeySpan5 opcode={C.ADD} zoom />
        <KeySpan5 opcode={C.D4} />
        <KeySpan5 opcode={C.D5} />
        <KeySpan5 opcode={C.D6} />

        <KeySpan5 opcode={C.MUL} zoom />
        <KeySpan5 opcode={C.D1} />
        <KeySpan5 opcode={C.D2} />
        <KeySpan5 opcode={C.D3} />

        <KeySpan5 opcode={C.DIV} zoom />
        <KeySpan5 opcode={C.D0} />
        <KeySpan5 opcode={C.DECIMAL} />
        <KeySpan5 opcode={C.PI} zoom />
      </GridContainer>
    </KeypadContext.Provider>
  );
};

export default Keypad;
