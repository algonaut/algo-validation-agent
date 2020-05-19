# algo-validation-agent

[![algonaut](https://circleci.com/gh/algonaut/algo-validation-agent.svg?style=shield)]()
[![codecov.io](http://codecov.io/github/algonaut/algo-validation-agent/coverage.svg?branch=master)](http://codecov.io/github/algonaut/algo-validation-agent?branch=master)
![MIT License](https://img.shields.io/badge/License-MIT-bright.svg)

A dead simple validation library for inputs into the Algorand JS SDK

### Why use this library?

While the existing Algorand JS SDK validates address signatures well, it does not fully validate individual fields or payloads before sending them along to the chain. Integrated with your front-end framework and validation library of choice, you'll be able to prevent bad transactions from reaching the chain when collecting input from your users and give them feedback to course correct.

If you're building javascript SPAs, these validations are useful to offload the larger dependency cost to a backend SDK of your choosing without needing to pull the entire JS SDK into your browser-based app. Basically, you want to validate your form inputs so the chain doesn't have to!

#### Features

- Field validators for common transaction actions
- Payload object validators for asset transactions
- Minimal dependencies
- CommonJS, ESmodule, and browser import options

#### Documentation

[API Documentation](https://algonaut.github.io/algo-validation-agent/api/)

### Usage

```bash
npm install @algonaut/algo-validation-agent
```

Import the library in your client-side or node application to validate inputs:

```javascript
import { core } from '@algonaut/algo-validation-agent/dist/algo-validation-agent.cjs';

core.isAlgorandAddress('FOO'); // -> false
core.isAlgorandAddress(
  'CINCNAPB2RLDUCS3EVDLURZZD742TMWRQEZ4CBEWF2QMOYXMH6RWRZEIEA'
); // -> true
```

Alternatively, you can use the browser-ready bundle provided in the package:

```
<!-- Minimized -->
<script src="dist/algo-validation-agent.iife.min.js"></script>

<!-- Standard -->
<script src="dist/algo-validation-agent.iife.js"></script>
```

### Contributing

```bash
# install dependencies
npm install

# live preview documentation
npm run docs:dev

# run tests and watch file changes
npm run test:watch

# build all files and docs
npm run build:all
```

### License

[MIT](https://opensource.org/licenses/MIT)
