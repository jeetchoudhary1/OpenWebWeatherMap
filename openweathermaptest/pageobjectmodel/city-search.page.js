import Page from './page';
class CitySearchPage extends Page {
    /**
     * Define elements
     */

    get searchInput() {
        return browser.element('(//*[@id="q"])[2]');
    }
    get searchButton() {
        return browser.element('//*[@id="searchform"]/button');
    }
    get resultsList() {
        return browser.element('//*[@id="forecast_list_ul"]/div');
    }
    get cityName() {
        return browser.element('//*[@id="forecast_list_ul"]/table/tbody/tr/td[2]/b[1]/a');
    }
    get temp() {
        return browser.element('//*[@id="forecast_list_ul"]/table/tbody/tr/td[2]/p[1]/span');
    }



    /**
     * define or overwrite page methods
     */

    open() {
        super.open('https://openweathermap.org/')
        browser.pause(1000);
    }

    enterText(item) {
        this.searchInput.clearElement();
        this.searchInput.setValue(item);
    }

    search() {
        this.searchButton.click();
    }
    isNotFound() {

        return this.resultsList.getText();

    }
    isCityName() {
        return this.cityName.getText();
    }
    cityTemp() {
        this.temp.waitForVisible(1000);
        return this.temp.isVisible();
    }
}

export default new CitySearchPage();