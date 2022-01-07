export class Book {
  id: number;
  name: string;
  author: string;
  description: string;
  constructor(name: string, author: string, description: string) {
    this.name = name;
    this.author = author;
    this.description = description;
  }
}
