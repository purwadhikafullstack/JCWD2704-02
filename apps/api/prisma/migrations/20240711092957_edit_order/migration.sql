-- AlterTable
ALTER TABLE `orders` ADD COLUMN `payment_method` VARCHAR(191) NULL,
    ADD COLUMN `snap_redirect_url` VARCHAR(191) NULL,
    ADD COLUMN `snap_token` VARCHAR(191) NULL;
