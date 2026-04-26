const request = require('supertest');
const app = require('./app');

describe('GET /', () => {
  it('deve retornar mensagem de boas-vindas', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe('Hello, DevOps!');
  });

  it('deve retornar Content-Type application/json', async () => {
    const res = await request(app).get('/');
    expect(res.headers['content-type']).toMatch(/application\/json/);
  });
});

describe('GET /health', () => {
  it('deve retornar status ok', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe('ok');
  });

  it('deve retornar somente o campo status', async () => {
    const res = await request(app).get('/health');
    expect(Object.keys(res.body)).toEqual(['status']);
  });
});

describe('GET /about', () => {
  it('deve retornar informacoes do projeto', async () => {
    const res = await request(app).get('/about');
    expect(res.statusCode).toBe(200);
    expect(res.body.name).toBe('devops-express');
    expect(res.body.version).toBeDefined();
  });

  it('deve retornar campo description', async () => {
    const res = await request(app).get('/about');
    expect(res.body.description).toBeDefined();
    expect(typeof res.body.description).toBe('string');
  });
});
