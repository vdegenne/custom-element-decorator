export function customElement({inject} = {inject: false}) {
	return function (ctor: CustomElementConstructor) {
		const ce = class extends ctor {
			constructor() {
				super(...arguments);
				if (inject) document.body.prepend(this);
			}
		};
		globalThis.customElements.define(
			ctor.name.replace(/([a-zA-Z])(?=[A-Z])/g, '$1-').toLowerCase(),
			ce
		);

		return ce as any;
	};
}
