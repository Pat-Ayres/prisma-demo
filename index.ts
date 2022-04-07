import {Prisma,PrismaClient} from "@prisma/client"

const config: Prisma.PrismaClientOptions = {
  log: [
    "query",
    "info",
  ],
}
const prisma = new PrismaClient(config)

async function main(): Promise<void> {
  const student = await prisma.student.findUnique({
    where: {
      id: 1
    },
    select: {
      firstName: true,
      lastName: true
    }
  })

  const assignment = await prisma.assignment.findFirst({
    where: {
      title: {
        contains: "Doom"
      }
    }
  })

  console.log({
    student,
    assignment
  })
}

main()
  .catch((e) => {
    throw e
  }).finally(async () => {
  await prisma.$disconnect();
});
