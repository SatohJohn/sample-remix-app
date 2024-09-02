import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  const item1 = await prisma.items.upsert({
    where: {
        id: 1,
    },
    update: {},
    create: {
      name: 'item1',
    },
  })
  const item2 = await prisma.items.upsert({
    where: {
        id: 2,
    },
    update: {},
    create: {
      name: 'item2',
    },
  })
  console.log({ item1, item2 })
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })