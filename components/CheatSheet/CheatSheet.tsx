import items from '@/mockup-data/items';
import Card from './Card';
import TitleCard from './TitleCard';

interface CheatSheetProps {
  data: Cheatsheet;
  linkedCards: Card[];
}

const CheatSheet: React.FC<CheatSheetProps> = ({ data, linkedCards }) => {
  const { cheatsheetId, title } = data;
  const creationDate = new Date();

  // sort LinkedCards by order
  linkedCards.sort((a, b) => a.order - b.order);

  const getLinkedItems = (cardId: string): Item[] => {
    const cardItems: Item[] = [];
    items.forEach((item) => {
      if (item.cardId === cardId) {
        cardItems.push(item);
      }
    });
    return cardItems;
  };

  return (
    <div
      data-cheat-sheet-id={cheatsheetId}
      id={`cheatSheet_${cheatsheetId}`}
      className='space-y-8 > * + *'
    >
      <TitleCard title={title} creationDate={creationDate} />
      <div className='gap-8 columns-5 space-y-8 > * + *'>
        {linkedCards.map((card) => (
          <Card
            key={card.cardId}
            cardId={card.cardId}
            title={card.title}
            linkedItems={getLinkedItems(card.cardId)}
          />
        ))}
      </div>
    </div>
  );
};

export default CheatSheet;
