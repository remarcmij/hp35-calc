import React from 'react';
import Key from './Key';

const Keypad = () => {
  return (
    <section>
      <div>
        <Key opcode="ENTER" />
        <Key opcode="CHS" />
        <Key opcode="EEX" />
        <Key opcode="CLX" />
      </div>
      <div>
        <Key opcode="SUB" />
        <Key opcode="D7" />
        <Key opcode="D8" />
        <Key opcode="D9" />
      </div>
      <div>
        <Key opcode="ADD" />
        <Key opcode="D4" />
        <Key opcode="D5" />
        <Key opcode="D6" />
      </div>
      <div>
        <Key opcode="MUL" />
        <Key opcode="D1" />
        <Key opcode="D2" />
        <Key opcode="D3" />
      </div>
      <div>
        <Key opcode="DIV" />
        <Key opcode="D0" />
        <Key opcode="DOT" />
        <Key opcode="PI" />
      </div>
    </section>
  );
};

export default Keypad;
