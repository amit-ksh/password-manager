-- AlterTable
ALTER TABLE "IdCard" ALTER COLUMN "expirationDate" DROP DEFAULT,
ALTER COLUMN "expirationDate" SET DATA TYPE TEXT,
ALTER COLUMN "issueDate" DROP DEFAULT,
ALTER COLUMN "issueDate" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "PaymentCard" ALTER COLUMN "expirationDate" DROP DEFAULT,
ALTER COLUMN "expirationDate" SET DATA TYPE TEXT;