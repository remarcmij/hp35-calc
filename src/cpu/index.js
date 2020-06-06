import ALU from './ALU';
import CPU from './CPU';
import EntryController from './EntryController';
import aluOperations from './operations/alu-operations';
import entryOperations from './operations/entry-operations';
import stateOperations from './operations/state-operations';

export const initialState = {
  stack: [0, 0, 0, 0],
  error: null,
  buffer: '',
  stackLift: true,
};

const cpu = new CPU();
cpu.addOperations(aluOperations);
cpu.addOperations(entryOperations);
cpu.addOperations(stateOperations);

cpu.addController(new ALU());
cpu.addController(new EntryController());

export default cpu;
