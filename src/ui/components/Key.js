/* eslint-disable react/no-danger */
import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { useSelector } from 'react-redux';

import styled from 'styled-components';
import KeypadContext from './KeypadContext';
import labels from './labels';
import C from '../../shared/opcodes';

const Button = styled.button`
  flex: 1;
  padding: 0;
  margin: 4px;
  cursor: pointer;
  font-size: ${(props) => (props.zoom ? '1.3em' : 'inherit')};
  font-weight: bold;
  color: rgba(0, 0, 0, 83%);
  border: none;
  border-radius: 4px;
  background-color: #fff;
  -webkit-box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.75);
  &:focus {
    outline: 0;
  }
  &:active {
    background-color: #eee;
  }
  &:disabled {
    color: #ccc;
  }
`;

const Key = ({ opcode, ...rest }) => {
  const handleClick = useContext(KeypadContext);
  const { error } = useSelector((state) => state.system);
  const disabled = error && ![C.CLX, C.CLR].includes(opcode);

  return (
    <Button
      type="button"
      onClick={() => handleClick(opcode)}
      disabled={disabled}
      {...rest}
    >
      <span dangerouslySetInnerHTML={{ __html: labels[opcode] || opcode }} />
    </Button>
  );
};

Key.propTypes = {
  opcode: PropTypes.string.isRequired,
};

export default Key;
