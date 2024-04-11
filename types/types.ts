interface Cheatsheet {
  cheatsheetId: string;
  title: string;
  description: string;
  creationDate: Date;
}

interface Card {
  cardId: string;
  cheatsheetId: string; // Foreign key to Cheatsheet
  title: string;
  summary: string;
  order: number;
  size: CARD_SIZES;
}

type CARD_SIZES = 'small' | 'medium' | 'large';

const CardExample: Card = {
  cardId: '1',
  cheatsheetId: '1',
  title: 'Example Card',
  summary: 'This is a card summary',
  order: 1,
  size: 'medium',
};

interface Item {
  itemId: string;
  cardId: string; // Foreign key to Card
  title: string;
  description: string;
  example: string;
  syntax: string;
  created_At: Date;
  updated_At: Date;
  tags: Category[];
}

interface Category {
  categoryId: string;
  name: string;
  description: string;
}
