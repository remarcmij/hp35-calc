class BaseController {
  setCPU(cpu) {
    this.cpu = cpu;
  }

  getOperation(opcode) {
    return this.cpu.getOperation(opcode);
  }
}

export default BaseController;
