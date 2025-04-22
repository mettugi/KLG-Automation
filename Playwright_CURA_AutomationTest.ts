//import { test, expect } from '@playwright/test';

import { error } from "console";

const { test, expect } = require('@playwright/test');

test.describe('Practice Test Automation Login', () => {
    const url = 'https://katalon-demo-cura.herokuapp.com/';

    test.beforeEach(async ({ page }) => {
        await page.goto(url);
    });

    test('Test case 1: Positive Login test', async ({ page }) => {
        await page.click('#menu-toggle');
        await page.locator('#menu-close').scrollIntoViewIfNeeded();
        await page.click('text=Login');;
        await page.fill('input[name="username"]', 'John Doe');
        await page.fill('input[name="password"]', 'ThisIsNotAPassword');
        await page.click('button[type="submit"]');;
    });

    test('Test case 2: Negative username test', async ({ page }) => {
        await page.click('#menu-toggle');
        await page.locator('#menu-close').scrollIntoViewIfNeeded();
        await page.click('text=Login');;
        await page.fill('input[name="username"]', 'John');
        await page.fill('input[name="password"]', 'ThisIsNotAPassword');
        await page.click('button:text("Login")');;

        const errorMessage = page.locator('text=Login failed! Please ensure the username and password are valid.');
        await expect(page.locator('text=Login failed! Please ensure the username and password are valid.')).toBeVisible();
        await expect(page.locator('text=Login failed! Please ensure the username and password are valid.')).toContainText("Login failed! Please ensure the username and password are valid.");
    });

    test('Test case 3: Negative password test', async ({ page }) => {
        await page.click('#menu-toggle');
        await page.locator('#menu-close').scrollIntoViewIfNeeded();
        await page.click('text=Login');;
        await page.fill('input[name="username"]', 'John Doe');
        await page.fill('input[name="password"]', 'Password');
        await page.click('button:text("Login")');;

        const errorMessage = page.locator('text=Login failed! Please ensure the username and password are valid.');
        await expect(page.locator('text=Login failed! Please ensure the username and password are valid.')).toBeVisible();
        await expect(page.locator('text=Login failed! Please ensure the username and password are valid.')).toContainText("Login failed! Please ensure the username and password are valid.");
    });

    test('Test case 4: Positive Login and Logout test', async ({ page }) => {
        await page.click('#menu-toggle');
        await page.locator('#menu-close').scrollIntoViewIfNeeded();
        await page.click('text=Login');;
        await page.fill('input[name="username"]', 'John Doe');
        await page.fill('input[name="password"]', 'ThisIsNotAPassword');
        await page.click('button[type="submit"]');
        await page.click('#menu-toggle');
        await page.locator('#menu-close').scrollIntoViewIfNeeded();
        await page.click('text=Logout');;
    });
        
    test('Test case 5: Make Appointment without login', async ({ page }) => {
        await page.click('text=Make Appointment');;
    });

    test('Test case 6: Make Appointment', async ({ page }) => {
        await page.click('#menu-toggle');
        await page.locator('#menu-close').scrollIntoViewIfNeeded();
        await page.click('text=Login');;
        await page.fill('input[name="username"]', 'John Doe');
        await page.fill('input[name="password"]', 'ThisIsNotAPassword');
        await page.click('button[type="submit"]');
        await page.selectOption('#combo_facility', 'Hongkong CURA Healthcare Center');
        await page.check('#chk_hospotal_readmission');
        await page.check('#radio_program_medicaid');
        await page.fill('#txt_visit_date', '21/04/2025');
        await page.fill('#txt_comment', 'Automated test appointment');
        await page.click('#btn-book-appointment');

        // 5. Assert confirmation page
        //const errorMessage = page.locator('text=Appointment Confirmation');
        //await expect(page.locator('text=Appointment Confirmation')).toBeVisible();
        //await expect(page.locator('text=Appointment Confirmation')).toContainText("Appointment Confirmation");
        //await expect(page.locator('#summary')).toContainText('Appointment Confirmation');
        await expect(page.locator('h2')).toHaveText('Appointment Confirmation');
        await expect(page.locator('#facility')).toHaveText('Hongkong CURA Healthcare Center');
        await expect(page.locator('#hospital_readmission')).toHaveText('Yes');
        await expect(page.locator('#program')).toHaveText('Medicaid');
        await expect(page.locator('#visit_date')).toHaveText('21/04/2025');
        await expect(page.locator('#comment')).toHaveText('Automated test appointment');
        //await page.click('#menu-toggle');
        //await page.locator('#menu-close').scrollIntoViewIfNeeded();
        //await page.click('text=Logout');;
    });
});
