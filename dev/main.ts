import {LitElement, css, html} from 'lit-element';
import {customElement} from '../src/index.js';

@customElement({
	inject: true,
	debug: true,
})
class MyElement extends LitElement {
	static styles = [
		css`
			:host {
				width: 500px;
				height: 500px;
				background-color: grey;
				color: white;
				display: flex;
				justify-content: center;
				align-items: center;
			}
		`,
	];

	render() {
		return html`test`;
	}
}

setTimeout(() => {
	const e = new MyElement();
}, 500);
