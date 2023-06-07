# gloriaLopezFrontend

## crear carptea .vscode en el protecto frontendv2, crear un setting.json y que contenga lo siguiente:

{
  "editor.defaultFormatter": "rvest.vs-code-prettier-eslint",

  "editor.formatOnPaste": false,

  "editor.formatOnType": false,

  "editor.formatOnSave": true,

  "editor.formatOnSaveMode": "file",

  "files.autoSave": "onFocusChange",

  "vs-code-prettier-eslint.prettierLast": false
}


## ejecutar el comando 'npm i' para instalar todo o 'npm i --force' si llega a fallar

## instalar las siguientes extensiones para poder ejecutar el proyecto correctamente:
ESLint, 
Prettier - code formatter, 
prettier Eslint, 
simple react snippets, 
vite, 
vscode-styled-components, 
JavaScript (ES6) code snippets, 
ES7+ React/Redux/React-Native snippets

## ir a la tuerca de la barra izquierda en la parte inferior, seleccionar commnad palette y buscar '>preferences>open user settings (JSON)' y agregar al json lo siguiente:

 "emmet.includeLanguages": {"javascript" : "javascriptreact"},
  "editor.formatOnSave": true,

 "[json]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[typescriptreact]": {
        "editor.defaultFormatter": "rvest.vs-code-prettier-eslint"
    },
    "[typescript]": {
        "editor.defaultFormatter": "rvest.vs-code-prettier-eslint"
    },

