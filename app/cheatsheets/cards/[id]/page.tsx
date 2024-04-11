import TitleCard from '@/components/CheatSheet/TitleCard';
import cards from '@/mockup-data/cards';
import items from '@/mockup-data/items';
import Item from '@/components/CheatSheet/Item';
import { useMemo } from 'react';
import Link from 'next/link';

export default function CheatSheetDetail({ params }: { params: { id: string } }) {
  const cardId = params.id;
  const currentCard = cards.find((card) => card.cardId === cardId);

  if (!currentCard) {
    return <div>Card not found</div>;
  }

  // get cards that are part of the cheat sheet
  const linkedItems: Item[] = [];

  useMemo(() => {
    items.forEach((item) => {
      if (item.cardId === cardId) {
        linkedItems.push(item);
      }
    });
  }, [items, cardId]);

  return (
    <div data-card-id={currentCard}>
      <div className='grid'>
        <TitleCard title={currentCard.title} description={currentCard.summary} />
        {linkedItems.map((item) => (
          <Item itemData={item} key={item.itemId} />
        ))}
      </div>
    </div>
  );
}
