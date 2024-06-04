interface MetadataStripProps {
  createdAt?: string;
  updatedAt?: string;
}

const MetadataStrip: React.FC<MetadataStripProps> = ({ createdAt, updatedAt }) => {
  if (createdAt && updatedAt) {
    return <></>;
  }

  return (
    <footer className='mt-6 flex flex-col gap-4 p-5 rounded-md bg-fuchsia-800'>
      {(createdAt || updatedAt) && (
        <div className='flex gap-4 text-fuchsia-300'>
          {createdAt && (
            <div>
              <strong className='text-fuchsia-200'>Created at: </strong>
              <time dateTime={createdAt}>{createdAt}</time>
            </div>
          )}
          {updatedAt && (
            <div>
              <strong className='text-fuchsia-200'>Updated at: </strong>
              <time dateTime={updatedAt}>{updatedAt}</time>
            </div>
          )}
        </div>
      )}
    </footer>
  );
};

export default MetadataStrip;
