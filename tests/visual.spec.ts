import { test, expect } from '@playwright/test';

test.describe('Visual Regression - Identities', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
        // Wait for fonts/animations to stabilize
        await page.waitForTimeout(1000);
    });

    test('Architect identity visual snapshot', async ({ page }) => {
        // Default is Architect
        await expect(page).toHaveScreenshot('architect-home.png', {
            fullPage: true,
        });
    });

    test('Neural identity visual snapshot', async ({ page }) => {
        await page.getByRole('button', { name: /Neural/i }).filter({ visible: true }).first().click();
        await page.waitForTimeout(1000); // Wait for transition
        await expect(page).toHaveScreenshot('neural-home.png', {
            fullPage: true,
        });
    });

    test('Cyber identity visual snapshot', async ({ page }) => {
        await page.getByRole('button', { name: /Matrix/i }).filter({ visible: true }).first().click();
        await page.waitForTimeout(1000); // Wait for transition
        await expect(page).toHaveScreenshot('cyber-home.png', {
            fullPage: true,
        });
    });
});

test.describe('Visual Regression - Subpages', () => {
    test('Projects page visual snapshot', async ({ page }) => {
        await page.goto('/projects');
        await page.waitForTimeout(1000);
        await expect(page).toHaveScreenshot('projects-page.png', {
            fullPage: true,
        });
    });

    test('Skills page visual snapshot', async ({ page }) => {
        await page.goto('/skills');
        await page.waitForTimeout(1000);
        await expect(page).toHaveScreenshot('skills-page.png', {
            fullPage: true,
        });
    });

    test('Resume page visual snapshot', async ({ page }) => {
        await page.goto('/resume');
        await page.waitForTimeout(1000);
        await expect(page).toHaveScreenshot('resume-page.png', {
            fullPage: true,
        });
    });
});
