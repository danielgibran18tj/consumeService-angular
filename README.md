# Creacion del proyecto consumeService

ng new store --standalone --skip-tests
css
no

# Entramos en nuestro proyecto y comprobamos nuestro proyecto
ng serve


# Instalacion de tailwind dentro de nuestro proyecto 

npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init

---en el archivo 'tailwind.config.js'
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

---en el archivo 'styles.css'
@tailwind base;
@tailwind components;
@tailwind utilities;


# Comando para agregar un servicio 
ng g s user
