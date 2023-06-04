export function customElement(ctor: CustomElementConstructor) {
	const ce = class extends ctor {
		constructor() {
			super(...arguments);
		}
	};
	globalThis.customElements.define(
		ctor.name.replace(/([a-zA-Z])(?=[A-Z])/g, '$1-').toLowerCase(),
		ce
	);

	return ce as any;
}
