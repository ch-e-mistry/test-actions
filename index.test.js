const http = require('http');

describe('HTTP Server Test', () => {
  test('It should respond with "Hello DevOps Training!\n"', done => {
    http.get('http://127.0.0.1:3000', response => {
      let data = '';

      // A chunk of data has been received.
      response.on('data', chunk => {
        data += chunk;
      });

      // The whole response has been received. Print out the result.
      response.on('end', () => {
        expect(data).toBe('Hello DevOps Training!\n');
        done();
      });
    });
  });
});
