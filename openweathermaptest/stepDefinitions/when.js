
import { defineSupportCode } from 'cucumber';
import openweathermaphome from '../pageobjectmodel/openweathermap-home.page';
import citySearchPage from '../pageobjectmodel/city-search.page';

defineSupportCode(function({ When }) {

  When(/^The page is loaded successfully$/, function() {
    openweathermaphome.waitForHomePageToLoad();
  });

  When(/^I enter "([^"]*)" into the city search box$/, function(arg1) {
    openweathermaphome.setCity(arg1);
    openweathermaphome.citySearchTextBox.getValue().should.equal(arg1);
  });

  When(/^I click on the search button$/, function() {
    openweathermaphome.citySearchButton.waitForVisible(5000);
    openweathermaphome.citySearchButton.click();
  });
  //belongs to home feature for sign IN
  When(/^I click on "([^"]*)"$/, function(navBarItem) {
    switch (navBarItem) {
      case 'signIn':
        openweathermaphome.signIn.waitForVisible(8000);
        openweathermaphome.signIn.click();
        break;

      case 'signUp':
        openweathermaphome.signUp.waitForVisible(8000);
        openweathermaphome.signUp.click();
        break;

      default:
        break;


    }
  });
  //belongs to home feature for sign Up
  When(/^I click on sign Up$/, function() {
    openweathermaphome.signUp.waitForVisible(8000);
    openweathermaphome.signUp.click();
  });

});
