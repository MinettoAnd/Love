import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';

const app = express();

// Proxy hacia tu servidor de Vite
app.use(
  '/',
  createProxyMiddleware({
    target: 'http://localhost:4200',
    changeOrigin: true,
    ws: true,
  })
);

app.listen(8000, '0.0.0.0', () => {
  console.log('✅ Proxy corriendo en http://0.0.0.0:8000');
});
