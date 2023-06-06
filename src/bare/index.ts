export function customElement(ctor: CustomElementConstructor) {
	let name = ctor.name.replace(/([a-zA-Z])(?=[A-Z])/g, '$1-').toLowerCase();
	if (!name.includes('-')) {
		name += '-element';
	}
	let i = -1;
	do {
		i++;
	} while (!globalThis.customElements.get(`${name}${i !== 0 ? '-${i}' : ''}`));

	globalThis.customElements.define(`${name}${i !== 0 ? '-${i}' : ''}`, ctor);

	return ctor as any;
}
