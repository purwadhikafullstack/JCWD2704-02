/*
  Warnings:

  - A unique constraint covering the columns `[invoice]` on the table `orders` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `orders_invoice_key` ON `orders`(`invoice`);
