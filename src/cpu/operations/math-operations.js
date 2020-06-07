import C from '../../shared/opcodes';

const degreesToRadians = (degrees) => (degrees * Math.PI) / 180.0;
const radiansToDegrees = (radians) => (radians * 180.0) / Math.PI;

const sin = (x) => Math.sin(degreesToRadians(x));

const asin = (x) => radiansToDegrees(Math.asin(x));

const cos = (x) =>
  Math.abs(x % 180) < Number.EPSILON ? 0 : Math.cos(degreesToRadians(x));

const acos = (x) => radiansToDegrees(Math.acos(x));

const tan = (x) => {
  return Math.abs(x % 90) < Number.EPSILON
    ? NaN
    : Math.tan(degreesToRadians(x));
};

const atan = (x) => radiansToDegrees(Math.atan(x));

const pow = (x, y) => x ** y;

const reciproc = (x) => 1 / x;

export default {
  [C.SIN]: { type: 'monadic', fn: sin },
  [C.ASIN]: { type: 'monadic', fn: asin },
  [C.COS]: { type: 'monadic', fn: cos },
  [C.ACOS]: { type: 'monadic', fn: acos },
  [C.TAN]: { type: 'monadic', fn: tan },
  [C.ATAN]: { type: 'monadic', fn: atan },
  [C.POW]: { type: 'dyadic', fn: pow },
  [C.LOG]: { type: 'monadic', fn: Math.log10 },
  [C.LN]: { type: 'monadic', fn: Math.log },
  [C.EXP]: { type: 'monadic', fn: Math.exp },
  [C.RECIPROCAL]: { type: 'monadic', fn: reciproc },
  [C.SQRT]: { type: 'monadic', fn: Math.sqrt },
};
