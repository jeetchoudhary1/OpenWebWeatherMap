
import { defineSupportCode } from 'cucumber';
import openweathermaphome from '../pageobjectmodel/openweathermap-home.page';
import citySearchPage from '../pageobjectmodel/city-search.page';

const request = require('request');
/**
 * Step Definition
 */
defineSupportCode(function({ Then }) {
    //  open weather map-HomePage Details feature
    Then(/^I should see all the header and footer section labels correctly displayed on the page$/, function() {
        openweathermaphome.validateAllLabelsOnHomePage().should.equal(true);
    });
    //  open weather map-HomePage Details feature
    Then(/^I should see OpenWeatherMap Logo displayed on the page$/, function() {
        openweathermaphome.VerifyPageLogo().should.equal(true);

    });
    //  open weather map-HomePage Details feature
    Then(/^I should see Temperature indicator displayed on the page$/, function() {

        openweathermaphome.VerifyCelciusToggle().should.equal(true);
        openweathermaphome.VerifyFahrenheitToggle().should.equal(true);

    });
    //  open weather map-HomePage Details feature
    Then(/^I should see jumbotron and widget details displayed on the page$/, function() {

        openweathermaphome.VerifyHeaderTex().should.equal(true);
        openweathermaphome.VerifyWidgetCityNameText().should.equal(true);
        openweathermaphome.VerifyForecastCityNameText().should.equal(true);
    });
    // invalid city search  feature
    Then(/^It should display "([^"]*)" instead of city$/, function(message) {

        citySearchPage.isNotFound().should.contain(message);
    });


    Then(/^It should display weather details for "([^"]*)","([^"]*)"$/, function(city,countryCode) {
        openweathermaphome.clickOnCityLinkInList(city,countryCode);
        openweathermaphome.getDefaultCityHeaderText().should.contain(city+','+' '+countryCode);
    });
    // homePage feature for hyperlink
    Then(/^It should display "([^"]*)"$/, function(NavBarItem) {

        switch (NavBarItem) {
            case 'verifySignInAccount':
            openweathermaphome.verifySignInAccount().should.be.true;
                break;

            case 'verifySignUpAccount':
                openweathermaphome.verifySignUpAccount().should.be.true;
                break;

            default:
                break;


        }

    });

    Then(/^I should validate that "([^"]*)","([^"]*)" is displayed on the page via API$/, function(city,countryCode) {
        openweathermaphome.clickOnCityLinkInList(city,countryCode);
        openweathermaphome.getDefaultCityHeaderText().should.contain(city+','+' '+countryCode);

      let mainState = openweathermaphome.getMainData();
      let pressure = openweathermaphome.getPressureData();
      let humidity = openweathermaphome.getHumidityData();
      let url = openweathermaphome.getRESTAPICallURL(city,countryCode);

      request(url, function(error, response, body){
        let obj = JSON.parse(body);
        obj.weather[0].description.should.contain(mainState);
        humidity.should.contain(obj.main.humidity);
        pressure.should.contain(obj.main.pressure);
      });
    });

});
