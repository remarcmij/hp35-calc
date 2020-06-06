import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { update } from '../../cpu/redux/actions';
import C from '../../shared/opcodes';
import { toggleArcMode } from '../redux/actions';
import Key from './Key';
import KeypadContext from './KeypadContext';

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

const arcMappings = {
  [C.SIN]: C.ASIN,
  [C.COS]: C.ACOS,
  [C.TAN]: C.ATAN,
};

const Keypad = ({ cpu }) => {
  const dispatch = useDispatch();
  const cpuState = useSelector((state) => state.cpu);
  const { arcMode } = useSelector((state) => state.ui);

  const handleClick = (opcode) => {
    const operation = cpu.getOperation(opcode);
    if (operation.type === 'action') {
      dispatch(operation.action());
      return;
    }

    const targetOpcode = arcMode ? arcMappings[opcode] || opcode : opcode;
    const newState = cpu.execute(cpuState, targetOpcode);
    dispatch(update(newState));
    if (arcMode) {
      dispatch(toggleArcMode());
    }
  };

  return (
    <KeypadContext.Provider value={handleClick}>
      <GridContainer>
        <KeySpan4 opcode={C.NOOP} />
        <KeySpan4 opcode={C.NOOP} />
        <KeySpan4 opcode={C.NOOP} />
        <KeySpan4 opcode={C.NOOP} />
        <KeySpan4 opcode={C.NOOP} />

        <KeySpan4 opcode={C.NOOP} />
        <KeySpan4 opcode={C.ARC} />
        <KeySpan4 opcode={C.SIN} />
        <KeySpan4 opcode={C.NOOP} />
        <KeySpan4 opcode={C.NOOP} />

        <KeySpan4 opcode={C.NOOP} />
        <KeySpan4 opcode={C.NOOP} />
        <KeySpan4 opcode={C.NOOP} />
        <KeySpan4 opcode={C.NOOP} />
        <KeySpan4 opcode={C.NOOP} />

        <EnterKey opcode={C.ENTER} />
        <KeySpan4 opcode={C.CHS} />
        <KeySpan4 opcode={C.EEX} />
        <KeySpan4 opcode={C.CLX} />

        <KeySpan5 opcode={C.SUB} bigger />
        <KeySpan5 opcode={C.D7} />
        <KeySpan5 opcode={C.D8} />
        <KeySpan5 opcode={C.D9} />

        <KeySpan5 opcode={C.ADD} bigger />
        <KeySpan5 opcode={C.D4} />
        <KeySpan5 opcode={C.D5} />
        <KeySpan5 opcode={C.D6} />

        <KeySpan5 opcode={C.MUL} bigger />
        <KeySpan5 opcode={C.D1} />
        <KeySpan5 opcode={C.D2} />
        <KeySpan5 opcode={C.D3} />

        <KeySpan5 opcode={C.DIV} bigger />
        <KeySpan5 opcode={C.D0} />
        <KeySpan5 opcode={C.DECIMAL} />
        <KeySpan5 opcode={C.PI} />
      </GridContainer>
    </KeypadContext.Provider>
  );
};

Keypad.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  cpu: PropTypes.object.isRequired,
};

export default Keypad;
