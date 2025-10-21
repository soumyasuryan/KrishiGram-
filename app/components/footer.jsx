import React from 'react';

function Footer() {
  return (
    <div className='h-30 flex flex-col items-center justify-center bg-gray-900/10 mt-10'>
      <ul className='flex w-80 justify-between text-sm text-gray-900'>
        <li className='cursor-pointer hover:undeline transition-all smooth duration-500 hover:underline'>Home</li>
        <li className='cursor-pointer hover:undeline transition-all smooth duration-500 hover:underline'>Features</li>
        <li className='cursor-pointer hover:undeline transition-all smooth duration-500 hover:underline'>About</li>
        <li className='cursor-pointer hover:undeline transition-all smooth duration-500 hover:underline'>Contact</li>
      </ul>
      <p className='text-gray-900 text-sm mt-4'>Developed By <span className='text-blue-600'>Team Krishak</span></p>
      <p className='text-gray-900 text-sm'>TeamKrishak@2025</p>
    </div>
  );
}

export default Footer;
