import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { z } from 'zod';

const app = express();
app.use(cors());
app.use(helmet());
app.use(express.json());

app.post('/api/auth/login', (req, res) => {
  res.json({ token: 'stub' });
});

app.post('/api/audits/start', (req, res) => {
  const schema = z.object({ projectId: z.string(), url: z.string().url(), mode: z.enum(['single','crawl']).default('single') });
  const parsed = schema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json(parsed.error);
  res.json({ auditId: 'placeholder' });
});

app.get('/api/audits/:auditId/status', (req, res) => {
  res.json({ status: 'pending' });
});

app.get('/api/audits/:auditId/report', (req, res) => {
  res.json({ score: 0, issues: [] });
});

app.post('/api/schema/generate', (req, res) => {
  res.json({ jsonld: {} });
});

app.post('/api/schema/validate', (req, res) => {
  res.json({ valid: true, errors: [] });
});

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`API running on port ${port}`));
