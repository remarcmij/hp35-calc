import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import styled from 'styled-components';
import KeypadContext from './KeypadContext';
import labels from './labels';

const Button = styled.button`
  flex: 1;
  padding: 0;
  margin: 4px;
  cursor: pointer;
  font-size: ${(props) => (props.bigger ? '1.3em' : 'inherit')};
  color: rgba(0, 0, 0, 83%);
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
  const handleClick = useContext(KeypadContext);

  return (
    <Button type="button" onClick={() => handleClick(opcode)} {...rest}>
      {labels[opcode] || opcode}
    </Button>
  );
};

Key.propTypes = {
  opcode: PropTypes.string.isRequired,
};

export default Key;
