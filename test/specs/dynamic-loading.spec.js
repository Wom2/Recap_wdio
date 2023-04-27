import DynamicloadPage from '../pageobjects/dynamic-loading.page.js'

describe('My Dynamic Loading Page', () => {
    it('should execute example 1 correctly', async () => {
        await DynamicloadPage.open();

        await (browser).pause(1000);
        await (DynamicloadPage).example1.click();
        await expect(DynamicloadPage.start).toBeExisting();
        await (DynamicloadPage).start.click();
        await (browser).pause(5000);
        await expect(DynamicloadPage.Hello).toHaveTextContaining(
            'Hello World'
        );
        
        await (browser).pause(1000)
    });
    it('should execute example 2 correctly', async () => {
        await DynamicloadPage.open();

        await (browser).pause(1000);
        await (DynamicloadPage).example2.click();
        await expect(DynamicloadPage.start).toBeExisting()
        await(DynamicloadPage).start.click();
        await (browser).pause(5000);
        await expect(DynamicloadPage.Hello).toHaveTextContaining(
            'Hello World'
        )
        
        await (browser).pause(1000)
    });
});