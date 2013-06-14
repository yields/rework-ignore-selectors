
## rework-ignore-selector

Ignore the given `[selectors]`.

## Example

```js
rework('.btn { color: red } div { width: 100px; }')
.use(ignore('.btn'))
.toString();

// => div { width: 100px; }
```

## Tests

```js
$ npm install && make test
```

## License

(MIT)
