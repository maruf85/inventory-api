-- CreateTable
CREATE TABLE "Product" (
    "id" STRING NOT NULL,
    "productName" STRING NOT NULL,
    "productDescription" STRING,
    "productUnit" STRING,
    "productPrice" INT4,
    "productQuantity" INT4,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Category" (
    "categoryId" STRING NOT NULL,
    "categoryName" STRING NOT NULL,
    "categoryDescription" STRING,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("categoryId")
);
