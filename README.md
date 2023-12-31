# Node.js Authentication and Product Management API
This repository contains a simple Node.js application with authentication and product management APIs. Users can register, log   in, and manage products (retrieve, create, update, and delete)  
  
**APIs**    
**Authentication**  
  
**Register a User**  
 Endpoint: /auth/register  
Method: POST  
Headers: Content-Type: application/json  
Request Body:  
{  
  "username": "your_username",  
  "password": "your_password"  
}  
  
**Login**  
Endpoint: /auth/login  
Method: POST  
Headers: Content-Type: application/json  
Request Body:  
{  
  "username": "your_username",  
  "password": "your_password"  
}  
  
**Product Management**  
  
**Get All Products**  
Endpoint: /api/products  
Method: GET  
Headers: Authorization: Bearer {token}  
  
  
**Create a Product**  
Endpoint: /api/products  
Method: POST  
Headers: Authorization: Bearer {token}  
Request Body:  
{  
  "name": "Product Name",  
  "price": 19.99  
}  
  
  
#Update a Product  
Endpoint: /api/products/:productId  
Method: PUT  
Headers: Authorization: Bearer {token}  
Request Body:  
{  
  "name": "Updated Product Name",  
  "price": 24.99  
}  
  
  
#Delete a Product  
Endpoint: /api/products/:productId  
Method: DELETE  


