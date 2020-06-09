import ALUController from './controllers/ALUController';
import EntryController from './controllers/EntryController';
import MasterController from './controllers/MasterController';
import aluOperations from './operations/alu-operations';
import entryOperations from './operations/entry-operations';

const masterController = new MasterController();

masterController.addController(new ALUController(aluOperations));
masterController.addController(new EntryController(entryOperations));

export default masterController;
