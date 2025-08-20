import { Queue, Worker } from 'bullmq';
import { checkTitle } from '@sitepulse/analyzers';

const connection = { connection: { host: 'redis', port: 6379 } };

export const auditQueue = new Queue('audits', connection);

new Worker('audits', async job => {
  const { html } = job.data;
  return { title: checkTitle(html) };
}, connection);

console.log('Worker started');
