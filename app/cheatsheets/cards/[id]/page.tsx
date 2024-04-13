'use client';

import TitleCard from '@/components/CheatSheet/TitleCard';
import cards from '@/mockup-data/cards';
import items from '@/mockup-data/items';
import Item from '@/components/CheatSheet/Item';
import { useMemo, useState } from 'react';

export default function CardDetail({ params }: { params: { id: string } }) {
  const cardId = params.id;

  const [linkedItems, setLinkedItems] = useState<Item[]>([]);

  useMemo(() => {
    setLinkedItems([]);
    items.forEach((item) => {
      if (item.cardId === cardId) {
        setLinkedItems((linkedItems) => linkedItems.concat(item));
      }
    });
  }, [cardId]);

  const currentCard = cards.find((card: Card) => card.cardId === cardId);

  if (!currentCard) {
    return <div>Card not found</div>;
  }

  return (
    <div className='container mx-auto mt-8' data-card-id={cardId}>
      <div className='grid'>
        <TitleCard title={currentCard.title} description={currentCard.summary} />
        {linkedItems.map((item) => (
          <Item itemData={item} key={item.itemId} />
        ))}
      </div>
    </div>
  );
}
