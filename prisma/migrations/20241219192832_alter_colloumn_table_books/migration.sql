/*
  Warnings:

  - You are about to drop the column `description` on the `books` table. All the data in the column will be lost.
  - Added the required column `description_type` to the `books` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_books" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "author" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description_type" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    CONSTRAINT "books_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_books" ("author", "id", "title", "userId") SELECT "author", "id", "title", "userId" FROM "books";
DROP TABLE "books";
ALTER TABLE "new_books" RENAME TO "books";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
