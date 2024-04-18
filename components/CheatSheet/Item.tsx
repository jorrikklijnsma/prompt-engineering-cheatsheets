import Link from 'next/link';

interface TitleCardProps {
  itemData: Item;
}

const TitleCard: React.FC<TitleCardProps> = ({ itemData }) => {
  const { title, description, example, syntax, itemId } = itemData;

  return (
    <div
      data-item-id={itemId}
      className='col-span-3 row-span-4 p-4 rounded-xl border-2 border-fuchsia-400/10 bg-neutral-100 dark:bg-neutral-900'
    >
      <Link href={`/cheatsheets/cards/items/${itemId}`}>
        <h2 className='text-xl'>{title}</h2>
      </Link>
      <p>{description}</p>
      <p className='mt-4'>
        <strong>Example:</strong> {example}
      </p>
      <p>
        <strong>Syntax:</strong> {syntax}
      </p>
    </div>
  );
};

export default TitleCard;
