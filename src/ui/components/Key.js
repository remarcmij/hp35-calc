import PropTypes from 'prop-types';
import React, { useCallback, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { update } from '../../cpu/redux/actions';
import CPUContext from '../CPUContext';

const Button = styled.button`
  flex: 1;
  padding: 0;
  margin: 4px;
  cursor: pointer;
  border: none;
  border-radius: 4px;
  background-color: #ffffff;
  -webkit-box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.75);
  &:focus {
    outline: 0;
  }
  &:active {
    background-color: #eeeeee;
  }
`;

const Key = ({ opcode, ...rest }) => {
  const cpu = useContext(CPUContext);
  const dispatch = useDispatch();
  const cpuState = useSelector((state) => state.cpu);

  const handleClick = useCallback(() => {
    const newState = cpu.execute(cpuState, opcode);
    dispatch(update(newState));
  }, [cpu, cpuState, opcode, dispatch]);

  const operation = cpu.getOperation(opcode);

  return (
    <Button type="button" onClick={handleClick} {...rest}>
      {operation.label || opcode}
    </Button>
  );
};

Key.propTypes = {
  opcode: PropTypes.string.isRequired,
};

export default Key;
