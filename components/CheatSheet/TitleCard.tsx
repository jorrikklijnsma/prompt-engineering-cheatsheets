import MetadataStrip from './MetadataStrip';

interface TitleCardProps {
  title: string;
  creationDate?: Date;
}

const TitleCard: React.FC<TitleCardProps> = ({ title, creationDate }) => {
  return (
    <div
      className={`rounded-xl border-2 border-fuchsia-400/10 bg-neutral-100 p-4 dark:bg-neutral-900 col-span-4 auto-rows-min`}
    >
      <h2 className='text-xl'>{title}</h2>
      {creationDate && <MetadataStrip createdAt={new Date(creationDate).toLocaleDateString()} />}
    </div>
  );
};

export default TitleCard;
