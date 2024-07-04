/*
  Warnings:

  - You are about to drop the column `city` on the `cities` table. All the data in the column will be lost.
  - You are about to drop the column `provinceId` on the `cities` table. All the data in the column will be lost.
  - You are about to drop the `provinces` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `cityName` to the `cities` table without a default value. This is not possible if the table is not empty.
  - Added the required column `province` to the `cities` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `cities` DROP FOREIGN KEY `cities_provinceId_fkey`;

-- AlterTable
ALTER TABLE `cities` DROP COLUMN `city`,
    DROP COLUMN `provinceId`,
    ADD COLUMN `cityName` VARCHAR(191) NOT NULL,
    ADD COLUMN `province` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `provinces`;
