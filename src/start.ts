import express from 'express';

export default function start() {
  const app = express();

  app.use(express.json());

  app.post('/', (req, res) => {
    console.log({ req: req.body });
    res.status(200).send('success mate');
  });

  app.listen(3000, () => {
    console.log('🚀 Listening on port 3000...');
  });
}
