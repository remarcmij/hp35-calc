import ALUController from './controllers/ALUController';
import MasterController from './MasterController';
import EntryController from './controllers/EntryController';
import aluOperations from './operations/alu-operations';
import entryOperations from './operations/entry-operations';

const system = new MasterController();

system.addController(new ALUController(aluOperations));
system.addController(new EntryController(entryOperations));

export default system;
