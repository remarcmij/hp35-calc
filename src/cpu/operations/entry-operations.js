export const MAX_SIGNIFICANT_DIGITS = 14;

const splitNumber = (buffer) => {
  const matches = buffer.match(/^(-?[.0-9]+)(?:e([+-][0-9]+))?$/);
  if (!matches) {
    return [buffer, ''];
  }
  const [, mantissa, exponent = ''] = matches;
  return [mantissa, exponent];
};

const joinNumber = (mantissa, exponent) =>
  mantissa + (exponent ? `e${exponent}` : '');

const digit = (char) => (buffer) => {
  let [mantissa, exponent] = splitNumber(buffer || '0');

  if (exponent) {
    if (exponent === '+0') {
      exponent = `+${char}`;
    } else if (exponent === '-0') {
      exponent = `-${char}`;
    } else if (/^[+-]\d{1,2}$/.test(exponent)) {
      exponent += char;
    }
  } else {
    if (mantissa === '0') {
      mantissa = char;
    } else if (mantissa === '-0') {
      mantissa = `-${char}`;
    } else {
      mantissa += char;
    }
    const maxMantissaLength =
      MAX_SIGNIFICANT_DIGITS +
      (mantissa.startsWith('-') ? 1 : 0) +
      (mantissa.includes('.') ? 1 : 0);
    mantissa = mantissa.slice(0, maxMantissaLength);
  }

  return joinNumber(mantissa, exponent);
};

// TODO: remove i@

const dot = (buffer) => {
  const matches = (buffer || '0').match(/^(.*[i@])?(.*)?$/);

  // Do nothing  (return early if the buffer already contains a decimal or an exponent
  if (matches && /[e.]/.test(matches[2])) {
    return buffer;
  }

  return `${buffer}.`;
};

const enterExponent = (buffer) => {
  const [mantissa, exponent] = splitNumber(buffer);
  return joinNumber(mantissa || '1', exponent || '+0');
};

export const changeSign = (buffer) => {
  if (buffer === '') {
    return buffer;
  }
  let [mantissa, exponent] = splitNumber(buffer);
  if (exponent) {
    const sign = exponent.startsWith('-') ? '+' : '-';
    exponent = sign + exponent.slice(1);
  } else {
    mantissa = mantissa.startsWith('-')
      ? mantissa.slice(1)
      : '-'.concat(mantissa);
  }
  return joinNumber(mantissa, exponent);
};

export default {
  CHS_ENTRY: {
    fn: changeSign,
    type: 'entry',
    label: '+/-',
  },
  D0: {
    fn: digit('0'),
    type: 'entry',
    label: '0',
  },
  D1: {
    fn: digit('1'),
    type: 'entry',
    label: '1',
  },
  D2: {
    fn: digit('2'),
    type: 'entry',
    label: '2',
  },
  D3: {
    fn: digit('3'),
    type: 'entry',
    label: '3',
  },
  D4: {
    fn: digit('4'),
    type: 'entry',
    label: '4',
  },
  D5: {
    fn: digit('5'),
    type: 'entry',
    label: '5',
  },
  D6: {
    fn: digit('6'),
    type: 'entry',
    label: '6',
  },
  D7: {
    fn: digit('7'),
    type: 'entry',
    label: '7',
  },
  D8: {
    fn: digit('8'),
    type: 'entry',
    label: '8',
  },
  D9: {
    fn: digit('9'),
    type: 'entry',
    label: '9',
  },
  DOT: {
    fn: dot,
    type: 'entry',
    label: '•',
  },
  EEX: {
    fn: enterExponent,
    type: 'entry',
  },
};
