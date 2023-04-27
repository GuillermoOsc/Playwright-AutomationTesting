import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.mercadolibre.com.ar/');
  await page.getByPlaceholder('Buscar productos, marcas y más…').click();
  await page.getByPlaceholder('Buscar productos, marcas y más…').fill('iphone');
  await page.getByPlaceholder('Buscar productos, marcas y más…').press('Enter');
  await page.getByRole('link', { name: 'Apple iPhone 13 Pro (512 GB) - Plata' }).first().click();
  await page.getByRole('button', { name: 'Comprar ahora' }).click();
});


test('test locators', async ({ page }) => {

  await page.goto('https://www.mercadolibre.com.ar')
  await page.getByRole('link', { name: 'Ingresa', exact: true }).click()
  await page.pause()

});



