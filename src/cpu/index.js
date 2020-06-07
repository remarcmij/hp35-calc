import CPU from './CPU';
import aluOperationHandler from './operation-handlers/alu-operation-handler';
import entryOperationHandler from './operation-handlers/entry-operation-handler';
import errorHandler from './operation-handlers/error-handler';
import aluOperations from './operations/alu-operations';
import entryOperations from './operations/entry-operations';
import stateOperations from './operations/state-operations';

const cpu = new CPU();
cpu.addOperations(aluOperations);
cpu.addOperations(entryOperations);
cpu.addOperations(stateOperations);

cpu.addOperationHandler(errorHandler);
cpu.addOperationHandler(aluOperationHandler);
cpu.addOperationHandler(entryOperationHandler);

export default cpu;
