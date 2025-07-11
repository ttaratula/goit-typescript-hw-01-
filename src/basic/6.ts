// Завдання 6

// Створіть інтерфейс User для типізації об'єктів, які містять такі властивості. Зверніть увагу, що адреса є необов'язковою властивістю.

interface Address {
    city: string;
    country: string;
}
  
interface User {
    name: string;
    age: number;
    email: string;
    address?: Address; 
}

const mango: User = {
    name: 'Mango',
    age: 30,
    email: 'john@example.com',
    address: {
      city: 'New York',
      country: 'USA'
    }
};
  
const poly: User = {
    name: 'Mango',
    age: 30,
    email: 'john@example.com'
};
  