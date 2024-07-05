## How to run the project ?

1 - open a terminal for every project it will be 8 in total if you have vs code you can execute the terminals there so it's not that spammy

2 - cd into each one of the projects and run the yarn install or npm install

## Full example

```
cd ecomerce-cart
yarn install
yarn serve:single-spa:ecommerce-cart

cd ecommerce-footer
yarn install
yarn serve:single-spa:ecommerce-footer

cd ecommerce-header
yarn install
yarn serve:single-spa:ecommerce-header

cd ecommerce-home
yarn install
yarn serve:standalone

cd ecommerce-product-detail
yarn install
yarn serve:standalone

cd ecommerce-products
yarn install
yarn serve:single-spa:ecommerce-products

cd ecommerce-utils
yarn install
yarn start

cd root
yarn install
yarn start

```

### Note

- If you dont have yarn just use npm instead

```
npm install
npm run (and the command)

```
