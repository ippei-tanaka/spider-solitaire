import {Emitter} from '../event-emitter';
import {ModelEvents} from './events';

export const emitter = new Emitter<ModelEvents>();
