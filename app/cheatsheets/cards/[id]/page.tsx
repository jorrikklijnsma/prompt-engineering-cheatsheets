'use client';

import TitleCard from '@/components/CheatSheet/TitleCard';
import cards from '@/mockup-data/cards';
import items from '@/mockup-data/items';
import Item from '@/components/CheatSheet/Item';
import { useMemo, useState } from 'react';

export default function CheatSheetDetail({ params }: { params: { id: string } }) {
  const cardId = params.id;

  const [linkedItems, setLinkedItems] = useState<Item[]>([]);

  useMemo(() => {
    items.forEach((item) => {
      if (item.cardId === cardId) {
        setLinkedItems((linkedItems) => linkedItems.concat(item));
      }
    });
  }, [cardId]);

  const currentCard = cards.find((cheatSheet) => cheatSheet.cheatsheetId === cardId);

  if (!currentCard) {
    return <div>Card not found</div>;
  }

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
