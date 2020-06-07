import C from '../../shared/opcodes';

export const MAX_SIGNIFICANT_DIGITS = 14;

const splitNumber = (buffer) => {
  const matches = buffer.match(/^(-?[.0-9]+)(?:e([+-][0-9]+))?$/);
  if (!matches) {
    return [buffer, ''];
  }
  const [, significand, exponent = ''] = matches;
  return [significand, exponent];
};

const joinNumber = (significand, exponent) =>
  significand + (exponent ? `e${exponent}` : '');

const digit = (char) => (buffer) => {
  let [significand, exponent] = splitNumber(buffer || '0');

  if (exponent) {
    if (exponent === '+0') {
      exponent = `+${char}`;
    } else if (exponent === '-0') {
      exponent = `-${char}`;
    } else if (/^[+-]\d{1,2}$/.test(exponent)) {
      exponent += char;
    }
  } else {
    if (significand === '0') {
      significand = char;
    } else if (significand === '-0') {
      significand = `-${char}`;
    } else {
      significand += char;
    }
    const maxMantissaLength =
      MAX_SIGNIFICANT_DIGITS +
      (significand.startsWith('-') ? 1 : 0) +
      (significand.includes('.') ? 1 : 0);
    significand = significand.slice(0, maxMantissaLength);
  }

  return joinNumber(significand, exponent);
};

// TODO: remove i@

const decimal = (buffer) => {
  const matches = (buffer || '0').match(/^(.*[i@])?(.*)?$/);

  // Do nothing  (return early if the buffer already contains a decimal or an exponent
  if (matches && /[e.]/.test(matches[2])) {
    return buffer;
  }

  return `${buffer}.`;
};

const enterExponent = (buffer) => {
  const [significand, exponent] = splitNumber(buffer);
  return joinNumber(significand || '1', exponent || '+0');
};

export const changeSign = (buffer) => {
  if (buffer === '') {
    return buffer;
  }
  let [significand, exponent] = splitNumber(buffer);
  if (exponent) {
    const sign = exponent.startsWith('-') ? '+' : '-';
    exponent = sign + exponent.slice(1);
  } else {
    significand = significand.startsWith('-')
      ? significand.slice(1)
      : '-'.concat(significand);
  }
  return joinNumber(significand, exponent);
};

export default {
  CHS_BUFFER: { type: 'entry', fn: changeSign },
  [C.D0]: { type: 'entry', fn: digit('0') },
  [C.D1]: { type: 'entry', fn: digit('1') },
  [C.D2]: { type: 'entry', fn: digit('2') },
  [C.D3]: { type: 'entry', fn: digit('3') },
  [C.D4]: { type: 'entry', fn: digit('4') },
  [C.D5]: { type: 'entry', fn: digit('5') },
  [C.D6]: { type: 'entry', fn: digit('6') },
  [C.D7]: { type: 'entry', fn: digit('7') },
  [C.D8]: { type: 'entry', fn: digit('8') },
  [C.D9]: { type: 'entry', fn: digit('9') },
  [C.DECIMAL]: { type: 'entry', fn: decimal },
  [C.EEX]: { type: 'entry', fn: enterExponent },
};
