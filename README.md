# @customElement

## Usage

```typescript
import {customElement} from 'custom-element-decorator';

@customElement()
class MySuperCoolElement extends HTMLElement {}

// Now you can use <my-super-cool-element> anywhere in your app.
```
**Important note: The name of your class may change if you use a minifier, that means `<my-super-cool-element>` in this example might be renamed to something else in the build.** In most case it's fine and won't cause any trouble but if you want to force a name you should pass it as an argument:

```typescript
@customElement({ name: 'my-super-cool-element' })
class MyElement extends HTMLElement {}
```

### Injection

Sometimes you don't want to bother finding a special DOM location for your app's custom elements.  
If you create the object programmatically into your code you can pass the `inject` argument to automatically inject the object into the DOM.

```typescript
import {customElement} from 'custom-element-decorator';

@customElement({ inject: true })
class MyServiceElement extends HTMLElement {}

// This object is automatically inserted inside the DOM
// upon creation.
export const service = new MyServiceElement();
```

## Installation

```
npm add -D define-custom-element-decorator
```


## Special thanks

to [Glenn](https://github.com/VandeurenGlenn) for the hyphen idea.
to [Duske](https://github.com/Duske) for delegating this npm package name to me.