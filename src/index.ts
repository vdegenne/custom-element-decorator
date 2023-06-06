interface CustomElementDecoratorOptions {
	name?: string;
	inject?: boolean;
}

export function customElement({
	inject = false,
	name,
}: CustomElementDecoratorOptions) {
	return function (ctor: CustomElementConstructor) {
		class CustomElement extends ctor {
			constructor() {
				super(...arguments);
				if (inject) document.body.prepend(this);
			}
		}

		let name = ctor.name.replace(/([a-zA-Z])(?=[A-Z])/g, '$1-').toLowerCase();
		if (!name.includes('-')) {
			name += '-element';
		}
		let i = -1;
		do {
			i++;
		} while (
			!globalThis.customElements.get(`${name}${i !== 0 ? '-${i}' : ''}`)
		);

		globalThis.customElements.define(
			`${name}${i !== 0 ? '-${i}' : ''}`,
			CustomElement
		);

		return CustomElement as any;
	};
}
