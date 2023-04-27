import Page from './page.js';

class DynamicloadPage extends Page {

    get start () {
        return $('button');
    }
    get example1 () {
        return $('//*[@id="content"]/div/a[1]');
    }
    get Hello () {
        return $('#finish')
    }
    get example2 () {
        return $('//*[@id="content"]/div/a[2]');
    }
    open() {
        return super.open('dynamic_loading');
    }
}
export default new DynamicloadPage();