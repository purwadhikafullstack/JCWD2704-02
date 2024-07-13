-- AddForeignKey
ALTER TABLE `carts` ADD CONSTRAINT `carts_productId_storeId_fkey` FOREIGN KEY (`productId`, `storeId`) REFERENCES `stocks`(`productId`, `storeId`) ON DELETE RESTRICT ON UPDATE CASCADE;
