import { getTestClient } from '../../../../utils/getTestClient'

test('missing-relation', async () => {
  expect.assertions(1)
  const PrismaClient = await getTestClient()
  const prisma = new PrismaClient()
  if (process.env.PRISMA_FORCE_NAPI) {
    await expect(
      prisma.post.findMany({
        include: {
          author: true,
        },
      }),
    ).rejects.toThrowErrorMatchingInlineSnapshot(`

                        Invalid \`prisma.post.findMany()\` invocation in
                        /client/src/__tests__/integration/errors/missing-relation/test.ts:9:19

                           6 const prisma = new PrismaClient()
                           7 if (process.env.PRISMA_FORCE_NAPI) {
                           8   await expect(
                        →  9     prisma.post.findMany(
                          PANIC: Application logic invariant error: received null value for field author which may not be null in query-engine/core/src/response_ir/internal.rs:398:26

                        This is a non-recoverable error which probably happens when the Prisma Query Engine has a panic.

                        TEST_GITHUB_LINK

                        If you want the Prisma team to look into it, please open the link above 🙏
                        To increase the chance of success, please post your schema and a snippet of
                        how you used Prisma Client in the issue. 

                    `)
  } else {
    await expect(
      prisma.post.findMany({
        include: {
          author: true,
        },
      }),
    ).rejects.toThrowErrorMatchingInlineSnapshot(`

            Invalid \`prisma.post.findMany()\` invocation in
            /client/src/__tests__/integration/errors/missing-relation/test.ts:36:19

              33         \`)
              34 } else {
              35   await expect(
            → 36     prisma.post.findMany(
              PANIC in query-engine/core/src/response_ir/internal.rs:398:26
            Application logic invariant error: received null value for field author which may not be null

            This is a non-recoverable error which probably happens when the Prisma Query Engine has a panic.

            TEST_GITHUB_LINK

            If you want the Prisma team to look into it, please open the link above 🙏
            To increase the chance of success, please post your schema and a snippet of
            how you used Prisma Client in the issue. 

          `)
  }

  prisma.$disconnect()
})

// Please don't remove, this is used to debug this test

// async function main() {
//   const PrismaClient = await getTestClient()
//   const prisma = new PrismaClient()
//   await prisma.post.findMany({
//     include: {
//       author: true,
//     },
//   })
// }

// main().catch((e) => console.error(e))
