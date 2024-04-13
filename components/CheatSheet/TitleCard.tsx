import MetadataStrip from './MetadataStrip';

interface TitleCardProps {
  title: string;
  description: string;
  creationDate?: Date;
}

const TitleCard: React.FC<TitleCardProps> = ({ title, description, creationDate }) => {
  return (
    <div
      className={`rounded-xl border-2 border-slate-400/10 bg-neutral-100 p-4 dark:bg-neutral-900 col-span-3`}
    >
      {/* <Link href={`/cheatsheets/${cheatsheetId}`}> */}
      <h2 className='text-xl'>{title}</h2>
      {/* </Link> */}
      <p>{description}</p>
      {creationDate && <MetadataStrip createdAt={new Date(creationDate).toLocaleDateString()} />}
    </div>
  );
};

export default TitleCard;
