# Butomate

Automate your home using FB chatbots. - Work in progress

Inspired by [this](https://medium.com/@RecastAI/a-nodejs-chatbot-tutorial-part-1-a2abd1b1c715) tutorial

This application uses
- [Microsoft Bot Framework](https://dev.botframework.com)
- [PageKite](https://pagekite.net/) for tunneling

Your config file should be something like this:

```js
const config = {
  appId: 'appId',   // Bot framework appId
  appPassword: 'appPassword',   // Bot framework appPassword
  pageKiteArgs: 'yourhandle.pagekite.me',
  port: 0000    // Port number
};

module.exports = config;
```

After you're all set-up type-in `./run.sh`
