import items from '@/mockup-data/items';
import Link from 'next/link';

export default function ItemsOverview() {
  return (
    <div className='container mx-auto mt-8'>
      <h2 className='text-xl'>Items</h2>
      <ul className='mt-4 space-y-4 list-none p-0 dark:text-white dark:bg-gray-900'>
        {items.map((item: Item) => (
          <li key={item.cardId} className='mt-4 p-2 border-2 border-fuchsia-400/10 rounded-xl'>
            <Link
              href={`/cheatsheets/cards/items/${item.itemId}`}
              className=' text-lg hover:underline dark:text-white dark:hover:text-gray-300 dark:hover:bg-gray-800 dark:bg-gray-900'
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
