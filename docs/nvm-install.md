###Como instalar NVM y NodeJS

- Abrir la terminal
- Ejecutar el siguiente comando 

```
    curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh | bash
```
- Ejecutar `cat ~/.bash_profile | grep NVM_DIR` y corroborar en la terminal el siguiente resultado:

```
    export NVM_DIR="$HOME/.nvm"
    [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
```
- Finalmente ejecutar `nvm install 8`
- Corroborar la versión instalada con `node -v`