import Page from './page.js';

class DropdownPage extends Page {

    get dropdown () {
        return $('//*[@id="dropdown"]');
    }
    get option1 () {
        return $('//*[@id="dropdown"]/option[2]');
    }
    get option2 () {
        return $('//*[@id="dropdown"]/option[3]');
    }
    open () {
        return super.open('dropdown');
    }
}

export default new DropdownPage();