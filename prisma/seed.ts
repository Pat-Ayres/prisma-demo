import {Prisma,PrismaClient} from "@prisma/client"

const config: Prisma.PrismaClientOptions = {
  log: [
    "query",
    "info",
  ],
}
const prisma = new PrismaClient(config)

async function main(): Promise<void> {
  await prisma.student.create({
    data: {
      firstName: "John",
      lastName: "Cena"
    }
  })
  await prisma.student.create({
    data: {
      firstName: "Dwayne",
      lastName: "Johnson"
    }
  })
  await prisma.assignment.create({
    data: {
      title: "Master the Five Moves of Doom",
      student: {
        connect: {
          id: 1
        }
      }
    }
  })
}

main()
  .catch((e) => {
    throw e
  }).finally(async () => {
  await prisma.$disconnect();
});
