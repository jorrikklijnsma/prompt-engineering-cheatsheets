import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className='bg-gray-200 text-gray-700 text-center p-4 mt-8'>
      <div className='container mx-auto'>
        © {new Date().getFullYear()} Prompt Engineering Cheat Sheets
      </div>
    </footer>
  );
};

export default Footer;
