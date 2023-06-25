import {LitElement, ReactiveElement} from 'lit-element';

export function _customElement(
	ctor: CustomElementConstructor | typeof LitElement,
	name?: string,
	inject = false,
	debug = false
) {
	let CustomElement: any = ctor;

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

	if (inject || debug) {
		CustomElement = class extends ctor {
			constructor() {
				super(...arguments);
				// TODO: should wait that the body is available here.
				if (inject) {
					document.body.prepend(this as unknown as Node);
				}
				if (debug) {
					(this as {} as HTMLElement).style.setProperty('position', 'relative');
					const d = document.createElement('div');
					d.style.cssText =
						'position:absolute;top:0;right:0;z-index:9999;background-color:black;color:white;font-family:monospace;font-size:0.8em;';
					d.textContent = name!;
					if ((this as {} as Element).shadowRoot) {
						(this as {} as Element).shadowRoot!.prepend(d);
					} else {
						(this as {} as Element).prepend(d);
					}
				}
			}
		};
	}

	if (!!(ctor as typeof LitElement)['_$litElement$']) {
		// @ts-ignore
		(ctor as {} as ReactiveElement).finalize();
		(ctor as typeof LitElement).styles = (
			ctor as typeof LitElement
		).elementStyles;
	}

	globalThis.customElements.define(
		`${name}${i !== 0 ? '-${i}' : ''}`,
		CustomElement as CustomElementConstructor
	);

	return CustomElement as any;
}
