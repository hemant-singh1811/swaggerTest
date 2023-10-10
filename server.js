const express = require('express')

const app = express();
const swaggerJSdoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');


const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Node IS API Project for mongodb',
            version: '1.0.0'
        },
        servers: [
            {
                url: 'http://localhost:8000/'
            }
        ]
    },
    apis: ['./server.js']
}

const swaggerSpec = swaggerJSdoc(options);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));

/**
 * @swagger
 * /:
 *  get:
 *     summary: summary This is the root API
 *     description: This is the root API
 *     responses:
 *         200:
 *             description: A successful response
 */

app.get('/', (req, res) => {
    console.log("/ is called");
    res.send('Hello World')
})

app.listen(8000, () => {  // 3000 is the port number
    console.log('Server is running on port 8000')
})