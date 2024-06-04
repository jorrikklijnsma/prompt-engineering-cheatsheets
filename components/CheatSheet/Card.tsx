import Link from 'next/link';

interface CheatSheetCardProps {
  title: string;
  cardId: string;
  linkedItems: Item[];
}

const Card: React.FC<CheatSheetCardProps> = ({ title, cardId, linkedItems }) => {
  return (
    <div
      className={`rounded-xl border-2 border-white/10 bg-neutral-100 dark:bg-neutral-900 break-inside-avoid`}
      data-card-id={cardId}
    >
      <h3 className='text-lg p-4 text-white bg-red-600'>{title}</h3>
      <ul className='no-list p-4'>
        {linkedItems.map((item) => (
          <li key={item.itemId}>
            <Link
              href={`/cheatsheets/cards/items/${item.itemId}`}
              className='text-white hover:text-white/80'
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
