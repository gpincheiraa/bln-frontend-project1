# Parte 8: Manejo offline guardando en caché las últimas peticiones exitosas

Existe un plugin de webpack que permite guardar la información de las peticiones sin necesidad de tener una conexión a internet, se llama `offline-plugin`, se puede encontrar en el siguiente link: [aquí](https://github.com/NekR/offline-plugin)

## **Instalar**

`npm install offline-plugin [--save-dev]`

## **Configurar**

Inicializar el plugin en el `webpack.config.js`:

```js
// webpack.config.js

const OfflinePlugin = require('offline-plugin')

module.exports = {
  // ...

  plugins: [
    // ... Los otros plugins
    // Colocar el plugin de último
    new OfflinePlugin()
  ]
  // ...
}
```

```js
// ./src/index.js

const offlinePlugin = require('offline-plugin/runtime');

/* ...
  Código
...
*/

offlinePlugin.install();
```

## LocalStorage

`localStorage`, permite almacenar en caché la información que se le asigne, siempre estará disponible mientras no limpien la caché.

## **Utilización**

`localStorage` tiene dos métodos, `.setItem(Key, Value)`, `.getItem(Key)` y se pueden utilizar de las siguientes maneras:

## Asignar

```js
localStorage.colorSetting = '#a4509b';
localStorage['colorSetting'] = '#a4509b';
localStorage.setItem('colorSetting', '#a4509b');
```

## Retornar valor

```es6
localStorage.getItem("Key")
="Key"

let variable = localStorage.getItem("Key");
```