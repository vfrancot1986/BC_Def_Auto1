export const config: WebdriverIO.Config = {

  runner: 'local',

  user: process.env.BROWSERSTACK_USERNAME,
  key: process.env.BROWSERSTACK_ACCESS_KEY,

  services: ['browserstack'],

  framework: 'mocha',

  specs: ['./tests/**/*.ts'],

  capabilities: [{
    platformName: 'Android',
    'appium:deviceName': 'Samsung Galaxy S22',
    'appium:platformVersion': '12.0',
    'appium:automationName': 'UiAutomator2',

    // App no BrowserStack
    'appium:app': 'bs://<app-id>',

    // Debug
    'bstack:options': {
      projectName: 'Meu Projeto Mobile',
      buildName: 'Build 1',
      sessionName: 'Login Test',
      debug: true,
      networkLogs: true
    }
  }],

  reporters: [
    'spec',
    ['allure', { outputDir: 'allure-results' }]
  ],

};