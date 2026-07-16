const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'DeskFlow API',
      version: '1.0.0',
      description: 'Internal IT Service Request Portal API documentation',
    },
    servers: [
      { url: 'http://localhost:5000', description: 'Local dev server' },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
    security: [{ bearerAuth: [] }],
  },
  apis: ['./src/routes/*.js'], // reads JSDoc comments from route files
};

module.exports = swaggerJsdoc(options);