import { test, expect } from '@playwright/test';

test.describe('Portfolio Multi-Identity Engine', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
    });

    test('should load the default Architect identity', async ({ page }) => {
        const title = await page.getByRole('heading', { level: 1 }).innerText();
        expect(title.toUpperCase()).toBe('LEAD BLOCKCHAIN ARCHITECT');

        // Check for Impact Ticker
        await expect(page.getByText('Bridged Volume')).toBeVisible();
        await expect(page.getByText('$55M+')).toBeVisible();
    });

    test('should switch to Neural identity', async ({ page }) => {
        // Click the Neural switcher button
        await page.getByRole('button', { name: /Neural/i }).filter({ visible: true }).first().click();

        const title = await page.getByRole('heading', { level: 1 }).innerText();
        expect(title.toUpperCase()).toBe('AI RESEARCH ENGINEER');

        // Check for Neural Canvas indicator
        await expect(page.getByText('Neural Intelligence Layer')).toBeVisible();
    });

    test('should switch to Cyber identity', async ({ page }) => {
        await page.getByRole('button', { name: /Matrix/i }).filter({ visible: true }).first().click();

        const title = await page.getByRole('heading', { level: 1 }).innerText();
        expect(title.toUpperCase()).toBe('MATRIX SYSTEMS SPECIALIST');

        // Check for Terminal
        await expect(page.getByText('Matrix Sequential Trace Active')).toBeVisible();
    });

    test('should navigate to Projects page and adapt theme', async ({ page }) => {
        await page.getByRole('link', { name: 'Projects' }).filter({ visible: true }).first().click();
        await expect(page).toHaveURL(/\/projects/);

        // Wait for the heading to change to ensure we are on the new page
        const header = page.getByRole('heading', { level: 1, name: /Selected Works/i });
        await expect(header).toBeVisible();

        // Check if projects are loaded
        await expect(page.getByText('Etherlink Bridge')).toBeVisible();
        await expect(page.locator('.grid-cols-12 > div')).toHaveCount(8); // 8 projects in data
    });

    test('should navigate to Skills page', async ({ page }) => {
        await page.getByRole('link', { name: 'Skills' }).filter({ visible: true }).first().click();
        await expect(page).toHaveURL(/\/skills/);

        // Verification based on actual h1 in skills.tsx
        const header = page.getByRole('heading', { level: 1, name: /Expertise & Toolbelt/i });
        await expect(header).toBeVisible();

        // Check for specific skill categories from SkillCategory enum (JavaScript, Python, Databases, Blockchain)
        await expect(page.getByRole('heading', { name: /JavaScript/i })).toBeVisible();
        await expect(page.getByRole('heading', { name: /Python/i })).toBeVisible();
    });

    test('should navigate to Resume page', async ({ page }) => {
        await page.getByRole('link', { name: 'Resume' }).filter({ visible: true }).first().click();
        await expect(page).toHaveURL(/\/resume/);

        const header = page.getByRole('heading', { level: 1, name: /Professional Path/i });
        await expect(header).toBeVisible();
        await expect(page.getByText('Download CV').filter({ visible: true }).first()).toBeVisible();
    });

    test('should persist identity across reload', async ({ page }) => {
        await page.getByRole('button', { name: /Matrix/i }).filter({ visible: true }).first().click();

        // Wait for state to be applied before reload
        await expect(page.getByRole('heading', { level: 1, name: /Matrix/i })).toBeVisible();

        await page.reload();

        const title = page.getByRole('heading', { level: 1, name: /Matrix/i });
        await expect(title).toBeVisible();
    });
});
