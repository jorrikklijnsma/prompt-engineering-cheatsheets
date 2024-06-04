import React from 'react';
import Navigation from './Navigation';

const Header: React.FC = () => {
  return (
    <header className='bg-red-600 text-white p-4'>
      <div className='container mx-auto flex justify-between'>
        <h1 className='text-lg'>Prompt Engineering Cheat Sheets</h1>
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
