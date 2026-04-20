const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Hello, DevOps!' });
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.get('/about', (req, res) => {
  res.json({
    name: 'devops-express',
    version: '1.0.0',
    description: 'Projeto de estudo de DevOps com Node.js e Express',
  });
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });
}

module.exports = app;
