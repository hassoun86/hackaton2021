### admin

Repository for ReactJS Admin v2.

### Run in dev mode

Make sure You have `npm@6.13.4` and `node@12.14.1` then

```
npm install
npm start
```

### How to build it

Make sure You have `npm@6.13.4` and `node@12.14.1` then go to the project directory and

```
rm -rf ./node_modules // make sure we clean all node_modules folder before install
npm install
npm run build
```

### Requirements

- npm@6.13.4
- node@12.14.1

### Details

This project is using [react-i18next](https://react.i18next.com/) for localization. All examples how to use are [here](src/App/components/Examples)

For Routing we are using [react-router-dom](https://reacttraining.com/react-router/web/guides/quick-start). **Important:** We shoud use `Link` elements instead of `a` html elements during creating internal links.

### How to run E2E test

The E2E test will run after starting the local site with "npm start" then use the referenced command to run all the test suites
```
npm run test:e2e
npm run test:e2e -t TicketDetails.test.ts
```

### Examples

```
import { devices } from 'puppeteer';

describe( 'Examples', () => {
  beforeAll( async () => {
    await page.goto( __TEST_APP_URL__ + '/policies/pol_Xh88fE7' );
    await page.emulate( devices['iPhone 6'] );
  } );

  it( 'Open dropdown menu and click on Activate option. Show popup and read title of the modal popup', async () => {
    const dropdownButtonSelector = '#time-frame-dropdown';
    const dropdownMenuSelector = '.dropdown-menu.show';
    await page.waitForSelector( dropdownButtonSelector );
    await page.click( dropdownButtonSelector );

    await page.waitForSelector( dropdownMenuSelector );
    const items = await page.$$( dropdownMenuSelector + ' .dropdown-item' );
    const buttonText = await page.evaluate(
      ( element ) => element.textContent,
      items[0],
    );
    expect( buttonText ).toBe( 'Aktivieren' );
    await items[0].click();

    // Popup is showing, wait for it:
    const modalPopupTitleSelector = 'h5.modal-title';
    await page.waitForSelector( modalPopupTitleSelector );

    const modalPopupCloseSelector = '.modal-header button.close';
    await page.waitForSelector( modalPopupCloseSelector );

    const modalTitleHandle = await page.$( modalPopupTitleSelector );
    const modalTitleText = await page.evaluate(
      ( element ) => element.textContent,
      modalTitleHandle,
    );

    expect( modalTitleText ).toBe( 'Aktivieren' );

    await page.click( modalPopupCloseSelector ); // Close popup
  }, 10000 );
} );

```
