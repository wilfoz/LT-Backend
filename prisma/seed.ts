import { PrismaClient } from '@prisma/client';
import { teams } from './seeds/data-seed';

const prisma = new PrismaClient();

async function main() {
  await prisma.team.createMany({
    data: teams,
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
