enum-code-message
---
[Enum](https://github.com/gavinning/enum)

### Install
```sh
npm i @4a/enum-code-message
```

### Usage
更多详情查阅 [Enum](https://github.com/gavinning/enum)
```js
const CodeMessage = require('@4a/enum-code-message')
```

### Items
```js
Enum({
    OK: Message(0, 'ok'),
    empty: Message(),

    permissionDenied: Message(400000, 'Permission denied'),
    errorToken: Message(400001, 'Error token'),
    expiredToken: Message(400002, 'Expired token'),

    lossParameter: Message(400100, 'Loss parameter'),
    errorParameter: Message(400200, 'Error parameter'),

    serviceUpdating: Message(500100, 'Service updating'),
})
```

### Extend
```js
CodeMessage.$extend({
    lossEmail: { code: 400101, 'Loss email' },
    lossTelephone: { code: 400102, 'Loss telephone' },
})
```
