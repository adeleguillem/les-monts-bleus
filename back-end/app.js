require('dotenv').config();
const cors = require('cors');
const express = require('express');

const app = express();


const Prisma = require('@prisma/client');
const db = new Prisma.PrismaClient();

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
}));

app.use(express.json());


app.get('/', (req, res) => {
    res.send('Hello World!')
  })
  
  app.get('/api/treks', async (req, res) => {
    res.send(await db.$queryRaw`SELECT * FROM treks`);
  });

  app.get('/api/treks/:id', async (req, res) => {
    const trekId = req.params.trekId;
    res
    .status(200)
    .send(await db.$queryRaw`SELECT * FROM pictures JOIN treks ON pictures.trek_id=trek.id WHERE trek_id=${trekId}`);
  });
  
  module.exports = app;
