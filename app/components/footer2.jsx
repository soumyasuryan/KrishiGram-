import React from 'react';

function Footer() {
  return (
    <div className='h-30 flex flex-col items-center justify-center bg-gray-600 mt-25 mb-[-82px]'>
      <ul className='flex w-80 justify-between text-sm text-white'>
        <li className='cursor-pointer hover:undeline transition-all smooth duration-500 hover:underline'>Home</li>
        <li className='cursor-pointer hover:undeline transition-all smooth duration-500 hover:underline'>Features</li>
        <li className='cursor-pointer hover:undeline transition-all smooth duration-500 hover:underline'>About</li>
        <li className='cursor-pointer hover:undeline transition-all smooth duration-500 hover:underline'>Contact</li>
      </ul>
      <p className='text-white text-sm mt-4'>Developed By <span className='text-blue-600'>Team Krishak</span></p>
      <p className='text-white text-sm'>TeamKrishak@2025</p>
    </div>
  );
}

export default Footer;
