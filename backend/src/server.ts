import express from 'express';
import { MOCK_MATCH } from './Mock_data/mock-match';
import { detectKeyMoments } from './moment-detector';

const application = express();
const serverPort = Number(process.env.PORT ?? 3000);

application.use(express.json());

application.get('/api/health', (_request, response) => {
  response.json({ status: 'ok' });
});

application.get('/api/match', (_request, response) => {
  response.json(MOCK_MATCH);
});
application.get('/api/moments', (_request, response) => {
  response.json(detectKeyMoments(MOCK_MATCH));
});

application.listen(serverPort, () => {
  console.log(`Backend running at http://localhost:${serverPort}`);
});