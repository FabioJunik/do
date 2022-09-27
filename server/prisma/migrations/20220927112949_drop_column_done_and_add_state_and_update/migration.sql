/*
  Warnings:

  - You are about to drop the column `done` on the `AssignedTask` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_AssignedTask" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "employeeId" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "state" TEXT NOT NULL DEFAULT 'pending',
    "updateAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "AssignedTask_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "Employee" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_AssignedTask" ("createdAt", "description", "employeeId", "id") SELECT "createdAt", "description", "employeeId", "id" FROM "AssignedTask";
DROP TABLE "AssignedTask";
ALTER TABLE "new_AssignedTask" RENAME TO "AssignedTask";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
