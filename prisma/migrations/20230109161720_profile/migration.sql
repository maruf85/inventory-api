-- CreateTable
CREATE TABLE "Profile" (
    "id" STRING NOT NULL,
    "firstName" STRING,
    "lastName" STRING,
    "address" STRING,
    "phone" INT4,
    "userId" STRING,

    CONSTRAINT "Profile_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Profile_userId_key" ON "Profile"("userId");

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
