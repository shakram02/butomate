# Butomate

Automate your home using FB chatbots. - Work in progress

Inspired by [this](https://medium.com/@RecastAI/a-nodejs-chatbot-tutorial-part-1-a2abd1b1c715) tutorial

This application uses
- [Microsoft Bot Framework](https://dev.botframework.com)
- [PageKite](https://pagekite.net/) for tunneling

Your config file should be something like this:
_A template is included in src/config.template.ts_

```js
const config = {
  appId: 'appId',   // Microsoft Bot framework appId
  appPassword: 'appPassword',   // Microsoft  Bot framework appPassword
  pageKiteArgs: 'yourhandle.pagekite.me',
  port: 0000    // Port number a number more than 1024 and less than 65536
};

module.exports = config;
```
To install the dependencies for the first time, type-in `./scrip/bootstrap.sh`
After you're all set-up type-in `./scrip/run.sh`
