/*
  Warnings:

  - Added the required column `studentId` to the `Assignment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Assignment" ADD COLUMN     "studentId" INTEGER;
UPDATE "Assignment" SET "studentId" = 1;
ALTER TABLE "Assignment" ALTER COLUMN     "studentId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Assignment" ADD CONSTRAINT "Assignment_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
