import Router from "express";
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

const router = Router();

router.get('/', (req, res) => {
  res.send('Hello, Get!');
});

router.post('/', (req, res) => {
  res.send('Hello, Post!');
});

router.put('/', (req, res) => {
  res.send('Hello, Put!');
});

router.delete('/', (req, res) => {
  res.send('Hello, Delete!');
});

export default router;
