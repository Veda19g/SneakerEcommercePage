import React, { useState } from 'react';
import menuIcon from './../images/icon-menu.svg';
import logo from './../images/logo.svg';
import cartIcon from './../images/icon-cart.svg';
import avatarImage from './../images/image-avatar.png';
import closeIcon from './../images/icon-close.svg';

const Navbar = () => {
  const [isMenuOpen, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu((prev) => !prev);
  };

  const handleClose = () => {
    setMenu((prev) => !prev);
  };

  const hamBurger =
    'fixed bg-white overflow-y-auto p-5 top-0 bottom-0 left-0 w-2/3 text-gray-400 text-xl bg-opacity-100 z-50 md:hidden';

  const navList = isMenuOpen ? `${hamBurger}` : 'hidden';

  const Navlink = () => (
    <div className='flex flex-col gap-3 mt-10 text-gray-500 font-semibold md:flex-row md:mt-0 md:font-normal md:gap-8 md:flex-wrap'>
      <NavLinkItem> Collections </NavLinkItem>
      <NavLinkItem> Men </NavLinkItem>
      <NavLinkItem> Women </NavLinkItem>
      <NavLinkItem> About </NavLinkItem>
      <NavLinkItem> Contact </NavLinkItem>
    </div>
  );

  const NavLinkItem = ({ children }) => (
    <div className='hover:cursor-pointer hover:text-gray-900 hover:border-b-4 hover:border-orange-600'>{children}</div>
  );

  return (
  
    <div className='flex justify-between items-center p-5 md:border-b md:border-gray-500 lg:p-8 lg:border-b lg:border-gray-500 lg:max-w-7xl lg:mx-auto'>
      <div className='flex items-center gap-5 lg:gap-10'>
        <img src={menuIcon} alt='menu-btn' onClick={handleMenu} className='md:hidden' />
        <img src={logo} alt='logo' />
        <div className={navList}>
          <div className='md:hidden'>
            <img src={closeIcon} onClick={handleClose} alt='close-btn' />
          </div>
          <Navlink />
        </div>
        <div className='hidden md:block'>
          <Navlink />
        </div>
      </div>

      <div className='flex justify-around items-center'>
        <img src={cartIcon} alt='cart-btn' />
        <img src={avatarImage} alt='avatar' className='w-1/3' />
      </div>
    </div>
    
  );
};

export default Navbar;
