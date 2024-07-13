/*
  Warnings:

  - Added the required column `paid_type` to the `orders` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `orders` ADD COLUMN `paid_type` ENUM('manual', 'gateway') NOT NULL,
    MODIFY `shippingCost` DOUBLE NULL;
