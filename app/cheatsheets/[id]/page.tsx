'use client';

import cheatsheets from '@/mockup-data/cheatsheets';
import cards from '@/mockup-data/cards';
import CheatSheet from '@/components/CheatSheet/CheatSheet';
import { useMemo, useState } from 'react';

export default function CheatSheetDetail({ params }: { params: { id: string } }) {
  const cheatsheetId = params.id;

  const [cheatSheetCards, setCheatsheetCards] = useState<Card[]>([]);

  useMemo(() => {
    cards.forEach((card) => {
      if (card.cheatsheetId === cheatsheetId) {
        setCheatsheetCards((cheatSheetCards) => cheatSheetCards.concat(card));
      }
    });
  }, [cheatsheetId]);

  const currentCheatSheet = cheatsheets.find(
    (cheatSheet) => cheatSheet.cheatsheetId === cheatsheetId
  );

  return (
    <div>
      <div className='container mx-auto mt-8'>
        {currentCheatSheet && <CheatSheet data={currentCheatSheet} linkedCards={cheatSheetCards} />}
      </div>
    </div>
  );
}
