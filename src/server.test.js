// index.test.js
import request from 'supertest';
import runServer from './server'; 

describe('Server running test', () => {
  let app;

  beforeAll(() => {
    // Setup the server before running the tests
    const handlers = {
      info: () => 'Battlesnake API',
      start: () => {},
      move: () => {},
      end: () => {},
    };
    app = runServer(handlers);
  });

  it('should return status 200 on GET /', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
  });
});
