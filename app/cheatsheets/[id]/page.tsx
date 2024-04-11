import cheatsheets from '@/mockup-data/cheatsheets';
import cards from '@/mockup-data/cards';
import CheatSheet from '@/components/CheatSheet/CheatSheet';
import { useMemo } from 'react';

export default function CheatSheetDetail({ params }: { params: { id: string } }) {
  const cheatsheetId = params.id;

  // get cards that are part of the cheat sheet
  const cheatSheetCards: Card[] = [];

  useMemo(() => {
    cards.forEach((card) => {
      if (card.cheatsheetId === cheatsheetId) {
        cheatSheetCards.push(card);
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
