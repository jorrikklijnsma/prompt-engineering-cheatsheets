import items from '@/mockup-data/items';
import Card from './Card';
import TitleCard from './TitleCard';

interface CheatSheetProps {
  data: Cheatsheet;
  linkedCards: Card[];
}

const CheatSheet: React.FC<CheatSheetProps> = ({ data, linkedCards }) => {
  const { cheatsheetId, title, description, creationDate } = data;

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
    <div data-cheat-sheet-id={cheatsheetId} id={`cheatSheet_${cheatsheetId}`}>
      <div className='grid auto-rows-fr grid-cols-5 gap-4'>
        <TitleCard title={title} description={description} creationDate={creationDate} />
        {linkedCards.map((card) => (
          <Card
            key={card.cardId}
            cardId={card.cardId}
            title={card.title}
            description={card.summary}
            size={card.size}
            linkedItems={getLinkedItems(card.cardId)}
          />
        ))}
      </div>
    </div>
  );
};

export default CheatSheet;
