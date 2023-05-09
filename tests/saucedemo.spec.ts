import { test, expect } from '@playwright/test'

test('Comprar un artículo', async ({ page }) => {

    await page.goto('https://saucedemo.com')

    await page.getByRole('textbox', { name: 'Username' }).fill('standard_user')
    await page.getByRole('textbox', { name: 'Password' }).fill('secret_sauce')
    await page.getByRole('button', { name: 'Login' }).click()

    await page.pause()

});


// Se importan las funciones test y expect de la librería @playwright/test. test se usa para definir un test y expect se usa para hacer afirmaciones sobre el comportamiento del sitio web.

// La función test recibe dos argumentos: el primero es una descripción del test (en este caso, "Comprar un artículo"), y el segundo es una función asíncrona que describe el comportamiento del test. En este caso, la función asíncrona recibe un objeto page que representa la página web y hace lo siguiente:

// Navega a la página https://saucedemo.com
// Busca los campos de texto de usuario y contraseña por su nombre y los llena con los valores "standard_user" y "secret_sauce" respectivamente.
// Busca el botón de inicio de sesión por su nombre y hace clic en él.
// Pausa la ejecución del test para permitir que el usuario pueda ver el resultado.