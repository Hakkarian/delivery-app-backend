# delivery-app-backend

To run this application - "git clone https://github.com/Hakkarian/delivery-app-backend.git" "npm i" "npm run dev".

# Jepetto

A multipage application using React, Redux, Node.js, MongoDB, Mongoose and other minor technologies.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)

## Installation

!important (Make sure you've installed a backend locally. Check out: https://github.com/Hakkarian/delivery-app-frontend)

- git clone https://github.com/Hakkarian/delivery-app-backend.git app
- cd app
- npm i
- npm start
- Your app is up and running!

## Usage

The multipage application is used making orders by user from specific shops. After user adds a product to cart, the product will appear in the Cart Page. Inside of the Cart Page user can submit a form with his data and a list of added products. If form data passes validation and order is created succesfully, it saves inside of History Page, where user can see his orders after passing his own credentials.

## Features

The multipage application consists of four pages - main page, shopping page and cart page and history page.

Main Page 

Consists only with greetings title.

Shopping page

Renders a list of shops after GET request. If the user clicks on the selected shop, shop displays a list of associated products. User can add one or many products to cart. Also he can increase or decrease their quantity, pressing "+" or "-" buttons.

Cart page

Cart page consists of submit form and the list of products, added to cart.

History page

Has a submit form and the list of orders, made by specific user.

## Warning while entering the Shop page

GET request IS working, but slowly, so at the start you're risking not seeing a list of shops. Please wait until the list of shops shows up, sorry for the inconvenience.

