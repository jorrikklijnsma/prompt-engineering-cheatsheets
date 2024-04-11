import Link from 'next/link';

interface CheatSheetCardProps {
  title: string;
  cardId: string;
  description: string;
  size: CARD_SIZES;
  linkedItems: Item[];
}

const Card: React.FC<CheatSheetCardProps> = ({ title, cardId, description, size, linkedItems }) => {
  const getCardSpanClass = (size: CARD_SIZES) => {
    switch (size) {
      case 'small':
        return 'col-span-1 row-span-2';
      case 'medium':
        return 'col-span-2 row-span-3';
      case 'large':
        return 'col-span-2 row-span-4 ';
      default:
        return '';
    }
  };

  return (
    <div
      className={`rounded-xl border-2 border-slate-400/10 bg-neutral-100 p-4 dark:bg-neutral-900 ${getCardSpanClass(
        size
      )}`}
    >
      <h3 className='text-lg'>{title}</h3>
      <p>{description}</p>
      <ul className='no-list'>
        {linkedItems.map((item) => (
          <li key={item.itemId}>
            <Link
              href={`/cheatsheets/cards/items/${item.itemId}`}
              className='text-blue-400 hover:text-blue-500'
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
