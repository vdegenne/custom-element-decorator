import { _customElement } from "./decorative.js";

interface CustomElementDecoratorOptions {
	/**
	 * Should inject/prepend the element when programmatically
	 * created?
	 */
	inject?: boolean;
	name?: string;
}

export function customElement({
	name,
	inject = false,
}: CustomElementDecoratorOptions = {}) {
	return function (ctor: CustomElementConstructor) {
		return _customElement(ctor, inject, name)
	};
}
