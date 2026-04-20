const request = require('supertest');
const app = require('./app');

describe('GET /', () => {
  it('deve retornar mensagem de boas-vindas', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe('Hello, DevOps!');
  });
});

describe('GET /health', () => {
  it('deve retornar status ok', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe('ok');
  });
});

describe('GET /about', () => {
  it('deve retornar informacoes do projeto', async () => {
    const res = await request(app).get('/about');
    expect(res.statusCode).toBe(200);
    expect(res.body.name).toBe('devops-express');
    expect(res.body.version).toBeDefined();
  });
});
