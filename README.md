```
# tuesday july 5 2022
# https://parceljs.org/recipes/react/

mkdir parcel-react-pdf
cd parcel-react-pdf
yarn init
yarn add react react-dom
mkdir src
code .
touch src/index.html
touch src/index.js
touch src/App.js
yarn add @react-pdf/renderer
parcel build src/index.html

cd dist
npx http-server --port=3000
# open chrome see console
# error index.js:56 Uncaught ReferenceError: $32d89daef5eb73ec$import$5ace8e5c686fb130 is not defined
    at index.js:56:6
```
