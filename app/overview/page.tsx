// pages/index.tsx
import CheatSheetCard from '@/components/CheatSheetCard';

const Home: React.FC = () => {
  // Placeholder data to simulate different card sizes
  const cheatSheets = [
    { id: 1, title: 'Basic Prompts', description: 'Learn the basics', size: 'normal' },
    {
      id: 2,
      title: 'Advanced Techniques',
      description: 'Dive deeper into prompt engineering',
      size: 'wide',
    },
    {
      id: 3,
      title: 'Data Science Prompts',
      description: 'Specialized prompts for data science',
      size: 'normal',
    },
    { id: 4, title: 'Quick Tips', description: 'Short and sweet tips', size: 'normal' },
    {
      id: 5,
      title: 'Comprehensive Guide',
      description: 'In-depth exploration of prompts',
      size: 'wide',
    },
  ];

  // Determine the CSS class based on the item size
  const getCardSpanClass = (size: string) => {
    switch (size) {
      case 'wide':
        return 'col-span-2 row-span-2';
      case 'tall':
        return 'row-span-2';
      default:
        return 'row-span-1';
    }
  };

  return (
    <div className='grid auto-rows-[192px] grid-cols-3 gap-4'>
      {cheatSheets.map((sheet) => (
        <CheatSheetCard
          key={sheet.id}
          title={sheet.title}
          description={sheet.description}
          className={getCardSpanClass(sheet.size)}
        />
      ))}
    </div>
  );
};

export default Home;
