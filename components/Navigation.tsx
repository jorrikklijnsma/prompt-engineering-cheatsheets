import Link from 'next/link';
import React from 'react';

const Navigation: React.FC = () => {
  return (
    <nav className='text-center'>
      <Link href='/' className='text-orange-400 hover:text-orange-500 p-2'>
        Home
      </Link>
      <Link href='#' className='text-orange-400 hover:text-orange-500 p-2'>
        About
      </Link>
    </nav>
  );
};

export default Navigation;
