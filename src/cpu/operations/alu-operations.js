import arithmeticOperations from './arithmetic-operations';
import mathOperations from './math-operations';
import stackOperations from './stack-operations';
import memoryOperations from './memory-operations';

export default {
  ...arithmeticOperations,
  ...mathOperations,
  ...stackOperations,
  ...memoryOperations,
};
