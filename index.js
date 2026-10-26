const express = require('express');
const path = require('path');
const app = express();
const puerto = 3000;

app.use(express.static(__dirname));

app.get('/principal', (req, res) => {
  res.sendFile(path.join(__dirname, 'principal.html'));
});

app.listen(puerto, () => {
  console.log(`✅ Servidor funcionando en http://localhost:${puerto}`);
  console.log(`📄 Inicio de sesión: http://localhost:${puerto}/inicio.html`);
  console.log(`📊 Página principal: http://localhost:${puerto}/principal`);
});