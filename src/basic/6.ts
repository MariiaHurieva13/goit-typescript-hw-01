export {};

interface User {
  name: string;
  age: number;
  email: string;
  address?: Address;
}

interface Address {
  city: string;
  country: string;
}

const mango: User = {
  name: "Mango",
  age: 30,
  email: "john@example.com",
  address: {
    city: "New York",
    country: "USA",
  },
};

const poly: User = {
  name: "Mango",
  age: 30,
  email: "john@example.com",
};