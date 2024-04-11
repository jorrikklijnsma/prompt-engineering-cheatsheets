import Link from 'next/link';
import MetadataStrip from './MetadataStrip';

interface TitleCardProps {
  itemData: Item;
}

const TitleCard: React.FC<TitleCardProps> = ({ itemData }) => {
  const { title, description, example, syntax, tags, created_At, updated_At, itemId } = itemData;

  return (
    <div>
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
      <MetadataStrip
        tags={tags}
        createdAt={new Date(created_At).toLocaleDateString()}
        updatedAt={new Date(updated_At).toLocaleDateString()}
      />
    </div>
  );
};

export default TitleCard;
