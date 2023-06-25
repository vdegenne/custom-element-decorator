import { _customElement } from "./decorative.js";

interface CustomElementDecoratorOptions {
	name?: string;
	/**
	 * Should inject/prepend the element when programmatically
	 * created?
	 */
	inject?: boolean;
	/**
	 * If true, it prints the name of the custom element in top right corner. 
	 */
	debug?: boolean;
}

export function customElement({
	name,
	inject = false,
	debug = false
}: CustomElementDecoratorOptions = {}) {
	return function (ctor: CustomElementConstructor) {
		return _customElement(ctor, name, inject, debug)
	};
}
