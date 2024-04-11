interface MetadataStripProps {
  tags?: Category[];
  createdAt?: string;
  updatedAt?: string;
}

const MetadataStrip: React.FC<MetadataStripProps> = ({ tags, createdAt, updatedAt }) => {
  if (tags && createdAt && updatedAt) {
    return <></>;
  }

  const formattedTags =
    tags &&
    tags.map((tag) => (
      <span key={tag.categoryId} className='bg-blue-500 text-white py-1 px-2 rounded-lg'>
        {tag.name}
      </span>
    ));

  return (
    <footer className='mt-6 flex flex-col gap-4 p-5 rounded-md bg-slate-800'>
      {formattedTags && (
        <div className='flex items-center'>
          <strong className='text-slate-300'>Tags: </strong>
          <div className='flex gap-2 ml-2'>{formattedTags}</div>
        </div>
      )}
      {(createdAt || updatedAt) && (
        <div className='flex gap-4 text-slate-400'>
          {createdAt && (
            <div>
              <strong className='text-slate-300'>Created at: </strong>
              <time dateTime={createdAt}>{createdAt}</time>
            </div>
          )}
          {updatedAt && (
            <div>
              <strong className='text-slate-300'>Updated at: </strong>
              <time dateTime={updatedAt}>{updatedAt}</time>
            </div>
          )}
        </div>
      )}
    </footer>
  );
};

export default MetadataStrip;
