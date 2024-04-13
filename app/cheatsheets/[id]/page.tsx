'use client';

import cheatsheets from '@/mockup-data/cheatsheets';
import cards from '@/mockup-data/cards';
import CheatSheet from '@/components/CheatSheet/CheatSheet';
import { useMemo, useRef, useState } from 'react';
import html2canvas from 'html2canvas';

const exportToPNG = async (elementId) => {
  const element = document.getElementById(elementId);
  if (!element) {
    console.error('No CheatSheet found');
    return;
  }

  // set width of element to 1920px
  element.style.width = '1920px';

  const canvas = await html2canvas(element, {
    scale: (1920 / element.offsetWidth) * 2, // Adjust scale to get the desired resolution
    backgroundColor: 'black',
  });
  const image = canvas.toDataURL('image/png');
  element.style.width = '';
  const link = document.createElement('a');
  link.href = image;
  link.download = 'cheat-sheet.png';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export default function CheatSheetDetail({ params }: { params: { id: string } }) {
  const cheatSheetElement = useRef(null);

  const cheatsheetId = params.id;

  const [cheatSheetCards, setCheatsheetCards] = useState<Card[]>([]);

  useMemo(() => {
    setCheatsheetCards([]);
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
    <div className='container mx-auto mt-8'>
      <div className='flex justify-center space-x-4'>
        <button
          onClick={() => exportToPNG(`cheatSheet_${cheatsheetId}`)}
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
        >
          Export to PNG
        </button>
      </div>
      <div className='mt-8'>
        {currentCheatSheet && <CheatSheet data={currentCheatSheet} linkedCards={cheatSheetCards} />}
      </div>
    </div>
  );
}
