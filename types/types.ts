const CardExample: Card = {
  cardId: '1',
  cheatsheetId: '1',
  title: 'Example Card',
  summary: 'This is a card summary',
  order: 1,
};

interface Cheatsheet {
  cheatsheetId: string;
  title: string;
  description: string;
}

interface Card {
  cardId: string;
  cheatsheetId: string;
  title: string;
  order: number;
  summary?: string;
}

interface Item {
  itemId: string;
  cardId: string; // Foreign key to Card
  title: string;
  value: string;
  order: number;
  description?: string;
  example?: string;
  syntax?: string;
}
