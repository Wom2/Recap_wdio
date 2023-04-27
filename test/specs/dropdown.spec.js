import DropdownPage from '../pageobjects/dropdown.page.js'

describe ('Dropdown Project', () => {
    it('to select option 1', async () => {
        await DropdownPage.open()

        await (browser).pause(1000)
        await (DropdownPage).dropdown.click();
        await (DropdownPage).option1.click();
        await expect(DropdownPage.option1).toBeSelected()
        
        await (browser).pause(2000)
    })
    it('to select option 2', async () => {
        await (browser).pause(1000)
        await (DropdownPage).dropdown.click();
        await (DropdownPage).option2.click();
        await expect(DropdownPage.option2).toBeSelected()
        
        await (browser).pause(2000)
    })
})