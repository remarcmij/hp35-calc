import ALUController from './controllers/ALUController';
import CPU from './CPU';
import EntryController from './controllers/EntryController';
import aluOperations from './operations/alu-operations';
import entryOperations from './operations/entry-operations';

const cpu = new CPU();

cpu.addController(new ALUController(aluOperations));
cpu.addController(new EntryController(entryOperations));

export default cpu;
