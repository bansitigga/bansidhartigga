import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.create({ data: { email: 'demo@sitepulse.dev', password: 'hashed' } });
  await prisma.project.create({ data: { name: 'Demo Project', ownerId: user.id } });
}

main().finally(() => prisma.$disconnect());
