# algo-validation-agent

[![algonaut](https://circleci.com/gh/algonaut/algo-validation-agent.svg?style=shield)]()
[![codecov.io](http://codecov.io/github/algonaut/algo-validation-agent/coverage.svg?branch=master)](http://codecov.io/github/algonaut/algo-validation-agent?branch=master)
![MIT License](https://img.shields.io/badge/License-MIT-bright.svg)

A dead simple validation library for inputs into the Algorand JS SDK

### Why use this library?

While the existing Algorand JS SDK validates address signatures well, it does not fully validate individual fields or payloads before sending them along to the chain. Integrated with your front-end framework and validation library of choice, you'll be able to prevent bad transactions from reaching the chain when collecting input from your users and give them feedback to course correct.

If you're building javascript SPAs, these validations are useful to offload the larger dependency cost to a backend SDK of your choosing without needing to pull the entire JS SDK into your browser-based app. Basically, you want to validate your form inputs so the chain doesn't have to!
