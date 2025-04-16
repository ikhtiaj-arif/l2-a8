-- DropForeignKey
ALTER TABLE "customers" DROP CONSTRAINT "customers_email_fkey";

-- AddForeignKey
ALTER TABLE "customers" ADD CONSTRAINT "customers_email_fkey" FOREIGN KEY ("email") REFERENCES "users"("email") ON DELETE RESTRICT ON UPDATE CASCADE;
