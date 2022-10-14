Backend
Prerequisites
Git
MySQL
Option one

nodejs
nodejs framework of your choice
Option two

Ruby

Ruby framework of your choice

You can use any additional libraries you want.

Project description
Pizzeria

This application serves the purpose of exposing a JSON API to be consumed by a frontend client for ordering pizza.

The following entities should be created (including proper relations):

pizza - has a name and price (e.g. Margherita $5, Pepperoni $6, ...)
order - has items
order item - has a pizza and quantity
The following endpoints should return a JSON response:

/api/orders (list of orders)
/api/orders/:id (details of an individual order)
/api/pizzas (list of pizzas; see './backend/example-pizzas.json')