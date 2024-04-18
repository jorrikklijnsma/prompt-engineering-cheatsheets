import Link from 'next/link';

interface CheatSheetCardProps {
  title: string;
  cardId: string;
  linkedItems: Item[];
}

const Card: React.FC<CheatSheetCardProps> = ({ title, cardId, linkedItems }) => {
  return (
    <div
      className={`rounded-xl border-2 border-fuchsia-400/10 bg-neutral-100 dark:bg-neutral-900 break-inside-avoid`}
      data-card-id={cardId}
    >
      <h3 className='text-lg p-4 text-black bg-rose-400'>{title}</h3>
      <ul className='no-list p-4'>
        {linkedItems.map((item) => (
          <li key={item.itemId}>
            <Link
              href={`/cheatsheets/cards/items/${item.itemId}`}
              className='text-white hover:text-rose-300'
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Card;
