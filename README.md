# vue-pay-password

## Description

Demo
https://codesandbox.io/s/53r20qn9yk

## Install

```shell
$ npm i vue-pay-password --save
// or
$ yarn add vue-pay-password
```

## Usage
```html
<template>
  <div id="app">
    <payPassword />
  </div>
</template>

<script>
import payPassword from "vue-pay-password";
import "vue-pay-password/dist/vue-pay-password.css";

export default {
  name: "App",
  components: {
    payPassword
  }
};
</script>
```

## Prop

| Name         | Type      | Description              |
|--------------|-----------|--------------------------|
| name         | string    | input name               |
| tabindex     | number    | input tabindex           |
| length       | number    | input value length       |
| value        | string    | default input value      |
| disable      | boolean   | disable input            |

## API

| Name         | Description              |
|--------------|--------------------------|
| focus        | focus input              |
| clear        | clear input              |

## Event

| Name         | Description              |
|--------------|--------------------------|
| focus        | focus event              |
| blur         | blur event               |

## Browser Support

![Chrome](https://raw.github.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png) | ![Firefox](https://raw.github.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png) | ![Edge](https://raw.github.com/alrra/browser-logos/master/src/edge/edge_48x48.png) | ![IE](https://raw.github.com/alrra/browser-logos/master/src/archive/internet-explorer_9-11/internet-explorer_9-11_48x48.png) | ![Safari](https://raw.github.com/alrra/browser-logos/master/src/safari/safari_48x48.png) | ![Opera](https://raw.github.com/alrra/browser-logos/master/src/opera/opera_48x48.png)
--- | --- | --- | --- | --- | --- |
Latest ✔ | Latest ✔ | Latest ✔ | 9+ ✔ | 9.1+ ✔ | Latest ✔ |

## Devlopment

```sh
$ npm i
$ npm run dev
$ npm test
```

## Author

Copyright (c) 2018-present, limichange

## Licensing

Licensed under the [MIT](https://opensource.org/licenses/MIT)
