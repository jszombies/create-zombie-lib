# Button component

## Usage

```js
import Button from './components/Button'
```
 
<!-- STORY -->

## Usage example in jsx

```js
render() {
  return (
    <Button 
      label='Click me'
      disabled={false}
      onClick{this.onClick}
    />
  )
}
```

## API

| property | type | default | note |
| -------- | ---- | ------- | ---- |
| `label` | string | required | text shown in button |
| `onClick` | function | null | on click event handler |
| `href` | string | null | transition url |
