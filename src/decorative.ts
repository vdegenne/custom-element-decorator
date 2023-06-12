import type {LitElement} from 'lit-element';

export function _customElement(
	ctor: CustomElementConstructor | typeof LitElement,
	inject: boolean = false,
	name?: string
) {
	class CustomElement extends ctor {
		// static styles = ctor.elementStyles;
		constructor() {
			super(...arguments);
			if (inject) {
				// TODO: should prepend only when the body element is available?
				document.body.prepend(this as unknown as Node);
			}
		}
	}

	if (!!(ctor as typeof LitElement)['_$litElement$']) {
		(ctor as typeof LitElement).styles = (
			ctor as typeof LitElement
		).elementStyles;
	}

	if (!name) {
		name = ctor.name.replace(/([a-zA-Z])(?=[A-Z])/g, '$1-').toLowerCase();
	}
	if (!name.includes('-')) {
		name += '-element';
	}
	let i = -1;
	do {
		i++;
	} while (globalThis.customElements.get(`${name}${i !== 0 ? '-${i}' : ''}`));

	globalThis.customElements.define(
		`${name}${i !== 0 ? '-${i}' : ''}`,
		CustomElement as CustomElementConstructor
	);

	return CustomElement as any;
}
