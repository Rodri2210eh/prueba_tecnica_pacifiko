# 🚀 prueba_tecnica_pacifiko

## ✈️ Como ejecutarlo en local

Necesitarás tener instalado ``` node.js ```, ```postgress```, ```github``` y tener acceso a una terminal para seguir los siguientes pasos:
>
### 🐱‍👓Levantar el programa
>
1. Necesitamos clonar el proyecto añadiendo la siguiente linea de comando en una terminal
```
git clone https://github.com/Rodri2210eh/prueba_tecnica_pacifiko.git
```
>
2. Entramos a la carpeta que acabamos de clonar e instalamos las dependencias necesarias
```
npm install
```
>
3. Debes levantar tu base de datos y añadir las credenciales en la carpeta ```./integration/src```, en el archivo llamado ```index.js```, como se indica en el siguiente ejemplo.
```
const db = pgPromise('postgres://User:Password@localhost:5432/Database_name');
```
>
4. Ejecutamos nuestro proyecto en local
```
npm run dev
```
Despues nos dirigimos a ```localhost:3000/```
