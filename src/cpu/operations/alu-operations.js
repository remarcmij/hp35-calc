import arithmeticOperations from './arithmetic-operations';
import mathOperations from './math-operations';
import stackOperations from './stack-operations';

export default {
  ...arithmeticOperations,
  ...mathOperations,
  ...stackOperations,
};
