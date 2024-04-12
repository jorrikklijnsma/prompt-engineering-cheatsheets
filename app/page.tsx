import Link from 'next/link';

const Home: React.FC = () => {
  const homePageLinks = [
    { title: 'Cheat Sheets', path: '/cheatsheets' },
    { title: 'Cards', path: '/cheatsheets/cards' },
    { title: 'Items', path: '/cheatsheets/cards/items' },
  ];

  const LinkCard = ({ title, path }: { title: string; path: string }) => (
    <Link href={path} className='size-60 bg-slate-800 text-white p-4 rounded-lg hover:bg-slate-700'>
      <h2 className='text-xl'>{title}</h2>
    </Link>
  );
  return (
    <div className='container mx-auto mt-8'>
      <h2 className='text-xl'>Welcome to Prompt Engineering Cheat Sheets</h2>
      <p className='mt-4'>
        This is a collection of cheat sheets that are useful for Prompt Engineering.
      </p>

      <h3 className='mt-12 text-lg'>Select a category to get started:</h3>
      <div className='mt-4 flex gap-8'>
        {homePageLinks.map((link, index) => (
          <LinkCard key={index} title={link.title} path={link.path} />
        ))}
      </div>
    </div>
  );
};

export default Home;
