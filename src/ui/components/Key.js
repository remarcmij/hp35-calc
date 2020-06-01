import PropTypes from 'prop-types';
import React, { useCallback, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { update } from '../../cpu/redux/actions';
import CPUContext from '../CPUContext';

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
    <button type="button" onClick={handleClick} {...rest}>
      {operation.label || opcode}
    </button>
  );
};

Key.propTypes = {
  opcode: PropTypes.string.isRequired,
};

export default Key;
