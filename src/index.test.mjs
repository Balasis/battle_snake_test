import request from 'supertest';
import runServer from './server.js';  // Importing the server
import info from './handlers/info.js';
import start from './handlers/start.js';
import move from './handlers/move.js';
import end from './handlers/end.js';

describe('Server running test', () => {
  let app;

  beforeAll(() => {
    // Set up the server with the handlers before running the tests
    const handlers = {
      info: info,
      start: start,
      move: move,
      end: end,
    };
    app = runServer(handlers);  // Run the server with the provided handlers
  });

  it('should return status 200 on GET /', async () => {
    const response = await request(app).get('/');  // Send a GET request to the root
    expect(response.status).toBe(200);  // Expect a 200 status response
  });
});
