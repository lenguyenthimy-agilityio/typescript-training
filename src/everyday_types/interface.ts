
// interface with optional property
interface Product {
  id: number;
  name: string;
  description?: string; // description is optional
}

const product1: Product = {
  id: 101,
  name: "Laptop",
  description: "A high-end gaming laptop",
};

const product2: Product = {
  id: 102,
  name: "Mouse",
};

function printProduct(product: Product) {
  console.log(`ID: ${product.id}, Name: ${product.name}`);
  if (product.description) {
    console.log(`Description: ${product.description}`);
  } else {
    console.log("Description: Not provided");
  }
}

printProduct(product1);
printProduct(product2);

// extending interfaces
interface Electronic extends Product {
  warrantyPeriod: number; // in months
}

const electronicItem: Electronic = {
  id: 201,
  name: "Smartphone",
  warrantyPeriod: 24,
};

function printElectronic(electronic: Electronic) {
  printProduct(electronic);
  console.log(`Warranty Period: ${electronic.warrantyPeriod} months`);
}

printElectronic(electronicItem);