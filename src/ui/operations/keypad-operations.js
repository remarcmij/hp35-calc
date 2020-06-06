import C from '../../shared/opcodes';
import { toggleArcMode } from '../redux/actions';

export default {
  [C.ARC]: { type: 'action', action: toggleArcMode },
};
