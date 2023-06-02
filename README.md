## Usage

```typescript
import {customElement} from 'define-custom-element-decorator';

@customElement()
class MySuperCoolElement extends LitElement {

}

// Now you can use <my-super-cool-element> anywhere in your app.
```

You can also decide to inject your element when you create an instance.

```typescript
import {customElement} from 'define-custom-element-decorator';

@customElement({ inject: true })
class MyServiceElement extends LitElement {

}

// Creating an object will make your element be automatically
// prepended inside the body of your document.
export const service = new MyServiceElement();
```

## Installation

```
npm add -D define-custom-element-decorator
```


## Special thanks

to Glenn for the hyphen idea :-P