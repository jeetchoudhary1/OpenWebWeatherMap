
import { defineSupportCode } from 'cucumber';
import openweathermaphome from '../pageobjectmodel/openweathermap-home.page';

defineSupportCode(function({ Given }) {

  // *** belongs to open-weather-map feature //I navigate to the Open Weather Maps home page
  Given(/^I navigate to the Open Weather Maps home page$/, function() {
    openweathermaphome.open();     // navigating to login page
    browser.getTitle().should.contain("OpenWeatherMap");
  });

});
