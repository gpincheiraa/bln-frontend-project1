npm run build

mkdir -p public && cp dist/* ./public/
cp server/server.js .

node server.js 