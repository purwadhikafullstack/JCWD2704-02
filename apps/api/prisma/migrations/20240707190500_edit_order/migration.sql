/*
  Warnings:

  - You are about to drop the column `paid_type` on the `orders` table. All the data in the column will be lost.
  - Added the required column `paidType` to the `orders` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `orders` DROP COLUMN `paid_type`,
    ADD COLUMN `paidType` ENUM('manual', 'gateway') NOT NULL;
