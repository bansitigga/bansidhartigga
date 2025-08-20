# SitePulse

SitePulse is a simplified monorepo skeleton for an SEO auditing and schema generation platform.

## Structure

- `apps/web` – Next.js frontend.
- `apps/api` – Express API.
- `apps/worker` – BullMQ worker.
- `packages/analyzers` – Reusable analysis functions.
- `packages/ui` – Shared UI components.
- `prisma` – Prisma schema and seed script.

## Development

```bash
npm install
npm test
```

Run services locally using Docker Compose:

```bash
docker-compose up --build
```

## Environment Variables

Copy `.env.example` to `.env` and adjust as needed.

## Notes

This project is a minimal scaffold. Many features from the specification are not fully implemented.
