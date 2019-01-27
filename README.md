# OpenweatherMap webdriverIO-with-cucumberBDD
  Project for OpenWeatherMap automation using WebDriverIO Cucumber BDD
  
  Description: =
  
  An Implementation of https://openweathermap.org/ page test automation using WebDriverIO Cucumber BDD Page Object pattern with NodeJS      NPM Grunt end to end
  
  ==================================
  
  Feature
  
  ==================================
  
  F001_VerifyOpenWeatherMapHomePageDetails.feature
  
  F002_InvalidCityWeatherSearch.feature
  
  F003_ValidCityWeatherSearch.feature
  
  F004_NavBarNavigationandVerifyWeatherFrmAPI.feature
  
  =========================================
  
  Project Structure: - OpenWebWeatherMap
  
  =========================================
  openweathermaptest
  
  config
  
  features
  
  pageobjectmodel
  
  reports
  
  stepDefinitions
  
  util
  
  Gruntfile.js
  
  index.js
  
  package.json
  =========================================
  
  Pre-requisite
  For Selenium standalone to install and execute successfully, please execute the following command:
  
  setx NODE_TLS_REJECT_UNAUTHORIZED 0
  This is required from selenium-standalone package. The execution of launching the selenium-standalone server is already handled using the scripts in package.json
  
  Installation
  Please execute the following code snippet before executing the tests
  
  npm install
  This command should take care of all the dependencies.
  
  npm run test
  To run any selective tests, we can mark the tests via specific tags and run them using the command:
  
  yarn run wdio -- --cucumberOpts.tagExpression=@sanity
  Test Reporting
  Multiple reporters configured in the framework and you can use any of the following:
  
  Junit
  Please install the junit-viewer line using the command first using the command:
  
  npm install -g junit-viewer
  To generate and see the test reports, please execute the following command:
  
  npm run junit-report
  
  Allure
  Please install the allure-commandline tool using the command first using the command:
  
  npm install -g allure-commandline
  To generate and see the test reports, please execute the following command:
  
  npm run allure-report
  
  Cleanup
  There can be some stray references to the chromedriver that can accumalate over time and are visible in the task manager. Please execute the following command via an administrator command prompt. Do match the name of the stary proccess before executing.
  for 32bit- TASKKILL /IM 2.43-ia32-chromedriver /F
  for 64bit- TASKKILL /IM 2.43-x64-chromedriver /F
