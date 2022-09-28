-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Admin" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL DEFAULT '12bc34de',
    "photoUrl" TEXT NOT NULL DEFAULT './tmp/uploads/avatar/avatar_default.png'
);
INSERT INTO "new_Admin" ("email", "id", "name", "password", "photoUrl") SELECT "email", "id", "name", "password", "photoUrl" FROM "Admin";
DROP TABLE "Admin";
ALTER TABLE "new_Admin" RENAME TO "Admin";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
