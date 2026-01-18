import { test, expect } from '@playwright/test';

test.describe('Portfolio Multi-Identity Engine', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
    });

    test('should load the default Architect identity', async ({ page }) => {
        const title = await page.getByRole('heading', { level: 1 }).innerText();
        expect(title).toBe('Lead Blockchain Architect');

        // Check for Impact Ticker
        await expect(page.getByText('Bridged Volume')).toBeVisible();
        await expect(page.getByText('$55M+')).toBeVisible();
    });

    test('should switch to Neural identity', async ({ page }) => {
        // Click the Neural switcher button (index 1)
        await page.getByTitle('Neural').click();

        const title = await page.getByRole('heading', { level: 1 }).innerText();
        expect(title).toBe('AI & Web3 Research Engineer');

        // Check for Neural Canvas indicator
        await expect(page.getByText('Autonomous Intelligence Hub')).toBeVisible();
    });

    test('should switch to Cyber identity', async ({ page }) => {
        await page.getByTitle('Cyber').click();

        const title = await page.getByRole('heading', { level: 1 }).innerText();
        expect(title).toBe('Cyber-Engineer & GameFi Specialist');

        // Check for Terminal
        await expect(page.getByText('Terminal ID: PG-AST-01')).toBeVisible();
    });

    test('should navigate to Projects page and adapt theme', async ({ page }) => {
        await page.getByRole('link', { name: 'Projects' }).click();
        await expect(page).toHaveURL(/\/projects/);

        const header = await page.getByRole('heading', { level: 1 }).innerText();
        expect(header).toBe('Selected Works');

        // Check if projects are loaded
        await expect(page.getByText('Etherlink Bridge')).toBeVisible();
    });

    test('should persist identity across reload', async ({ page }) => {
        await page.getByTitle('Cyber').click();
        await page.reload();

        const title = await page.getByRole('heading', { level: 1 }).innerText();
        expect(title).toBe('Cyber-Engineer & GameFi Specialist');
    });
});
