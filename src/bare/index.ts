import {_customElement} from '../decorative.js';

export function customElement(ctor: CustomElementConstructor) {
	return _customElement(ctor);
}
