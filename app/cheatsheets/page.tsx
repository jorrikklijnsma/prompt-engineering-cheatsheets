import cheatsheets from '@/mockup-data/cheatsheets';
import Link from 'next/link';

export default function CheatSheetOverview() {
  return (
    <div className='container mx-auto mt-8'>
      <h2 className='text-xl'>Cheat Sheets</h2>
      <ul className='mt-4 space-y-4 list-none p-0 dark:text-white dark:bg-gray-900'>
        {cheatsheets.map((cheatSheet: Cheatsheet) => (
          <li
            key={cheatSheet.cheatsheetId}
            className='mt-4 p-2 border-2 border-slate-400/10 rounded-xl'
          >
            <Link
              href={`/cheatsheets/${cheatSheet.cheatsheetId}`}
              className=' text-lg hover:underline dark:text-white dark:hover:text-gray-300 dark:hover:bg-gray-800 dark:bg-gray-900'
            >
              {cheatSheet.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
