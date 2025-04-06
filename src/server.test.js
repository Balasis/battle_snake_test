// src/index.test.js
const request = require('supertest'); 
const app = require('./server'); 

describe('Server running test', () => {
  it('should return status 200 on GET /', async () => {
    const response = await request(app).get('/'); 
    expect(response.status).toBe(200); 
  });
});
