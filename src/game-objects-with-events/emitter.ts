import {Emitter} from '../event-emitter';
import {ViewEvents} from './events';

export const emitter = new Emitter<ViewEvents>();
