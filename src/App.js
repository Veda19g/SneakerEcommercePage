import React from 'react';
import { useState } from 'react';
import menuIcon from './images/icon-menu.svg';
import logo from './images/logo.svg';
import cartIcon from './images/icon-cart.svg';
import avatarImage from './images/image-avatar.png';
import closeIcon from './images/icon-close.svg';
import img1 from './images/image-product-1.jpg';
import img2 from './images/image-product-2.jpg';
import img3 from './images/image-product-3.jpg';
import img4 from './images/image-product-4.jpg';
import thumbnail1 from './images/image-product-1-thumbnail.jpg';
import thumbnail2 from './images/image-product-2-thumbnail.jpg';
import thumbnail3 from './images/image-product-3-thumbnail.jpg';
import thumbnail4 from './images/image-product-4-thumbnail.jpg';
import minus from "./images/icon-minus.svg"
import plus from "./images/icon-plus.svg"
import next from "./images/icon-next.svg";
import previous from  "./images/icon-previous.svg";
import close from "./images/icon-close.svg"
import iconDelete from "./images/icon-delete.svg";

const App = () => {
  
  const [isMenuOpen, setMenu] = useState(false);
  const [isCartOpen,setCart]=useState(false);
  const handleMenu = () => {
    setMenu((prev) => !prev);
  };

  const handleClosed = () => {
    setMenu((prev) => !prev);
  };

  const handleCart=()=>{
    setCart((prev)=>!prev);
  }

  const hamBurger =
    'fixed bg-white overflow-y-auto p-5 top-0 bottom-0 left-0 w-2/3 text-gray-400 text-xl bg-opacity-100 z-50 md:hidden';

    const text = "Autumn Limited Edition Sneakers";

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

  const [selectedImage, setSelectedImage] = useState(img1);
  const [isLightHouseOpen,setLightHouse]=useState(false); 

  const [count,setCount]=useState(0);
  
  const handleThumbnailClick = (newImage) => {
    setSelectedImage(newImage);
  };
  
  const addItem=()=>{
      setCount((prev)=>
          prev+1
      )
  }
  
  const subItem=()=>{
    setCount((prev)=>
        prev-1
    )
  }

  const handleMobPrev=()=>{
    setSelectedImage(selectedImage===img1?img4:selectedImage===img2?img1:selectedImage===img3?img2:img3)
  }

  const handleMobNext=()=>{
    setSelectedImage(selectedImage===img1?img2:selectedImage===img2?img3:selectedImage===img3?img4:img1)
  }

  const handleLighthouse=()=>{
     setLightHouse((prev)=>!prev)
  }

  const handleClose=()=>{
    setLightHouse((prev)=>!prev)
  }
  
  
   
  const items="flex items-center justify-between";
  const Checkout="bg-orange-500 py-2 px-4 text-white font-bold rounded-lg shadow mt-5 w-full hover:bg-orange-600 transition-all duration-200";

  const mainImage=isLightHouseOpen?"hidden md:block md:w-1/4 md:m-auto md:mt-20 md:rounded-2xl md:hover:cursor-pointer":"hidden md:block md:w-1/2 md:rounded-2xl md:m-auto md:hover:cursor-pointer"
  
  const [Quantity,setCartQuantity]=React.useState(0);

   const handlePurchase=()=>{

    setCartQuantity(
      count
    )
    
    
   }

   

  

  const Gallery = () => (
    
    <div className='hidden  md:flex md:flex-1 md:flex-col'>
    <img onClick={handleLighthouse} src={selectedImage} alt='' className={mainImage} />
    <div className='hidden md:flex md:m-auto lg:gap-6 md:gap-3 lg:mt-6 md:mt-3 '>
      <img
        src={thumbnail1}
        alt=''
        className={`lg:w-14 md:w-10 rounded-md hover:cursor-pointer ${selectedImage === img1 ? 'grayscale' : ''}`}
        onClick={() => handleThumbnailClick(img1)}
      />
      <img
        src={thumbnail2}
        alt=''
        className={`lg:w-14 md:w-10 rounded-md hover:cursor-pointer ${selectedImage === img2 ? 'grayscale' : ''}`}
        onClick={() => handleThumbnailClick(img2)}
      />
      <img
        src={thumbnail3}
        alt=''
        className={`lg:w-14 md:w-10 rounded-md hover:cursor-pointer ${selectedImage === img3 ? 'grayscale' : ''}`}
        onClick={() => handleThumbnailClick(img3)}
      />
      <img
        src={thumbnail4}
        alt=''
        className={`lg:w-14 md:w-10 rounded-md hover:cursor-pointer ${selectedImage === img4 ? 'grayscale' : ''}`}
        onClick={() => handleThumbnailClick(img4)}
      />
    </div>
</div>

  );


  
  return (
   <div className='main-div'>
  
  <div className='flex justify-between items-center p-5 md:border-b md:border-gray-500 lg:p-8 lg:border-b lg:border-gray-500 lg:max-w-7xl lg:mx-auto'>
      <div className='flex items-center gap-5 lg:gap-10'>
        <img src={menuIcon} alt='menu-btn' onClick={handleMenu} className='md:hidden' />
        <img src={logo} alt='logo' />
        <div className={navList}>
          <div className='md:hidden'>
            <img src={closeIcon} onClick={handleClosed} alt='close-btn' />
          </div>
          <Navlink />
        </div>
        <div className='hidden md:block'>
          <Navlink />
        </div>
      </div>

      <div className='flex justify-around items-center'>
        <img onClick={handleCart} src={cartIcon} alt='cart-btn' />
        <img src={avatarImage} alt='avatar' className='w-1/3' />
      </div>
      
    
    </div>

    <div className='flex flex-col md:flex md:flex-row md:p-10 '>
      
      <Gallery />
      
      {isLightHouseOpen&&<div className=' hidden text-white md:block md:h-screen md:absolute md:right-0 md:left-0 md:top-0 md:bottom-0 md:bg-black md:bg-opacity-75'>
        <img onClick={handleClose} src={close}  className='w-4 absolute right-1/3 top-12 mr-10' />
        
        <Gallery/>
        
        </div>}
  
      <div className='md:hidden '>
         <img onClick={handleMobPrev} src={previous} alt='' className='absolute top-72 left-0 p-3 ml-3 bg-slate-100 rounded-3xl hover:cursor-pointer'/>
         <img src={selectedImage} alt='' className=''/>
         <img onClick={handleMobNext} src={next} alt='' className='absolute top-72 right-0 p-3 mr-3 bg-slate-100 rounded-3xl hover:cursor-pointer'/>
      </div>
        
      <div className='md:flex md:flex-1 md:flex-col md:pt-8'>
        
        <h3 className='px-4 py-4 md:px-0 md:py-0 text-orange-700 text-sm font-bold tracking-wide'>SNEAKER COMPANY</h3>
        <h1 className='pt-0 px-4  md:px-0 font-bold text-3xl md:pt-4 text-black md:font-semibold md:text-3xl lg:text-5xl'>Fall Limited Edition Sneakers</h1>
        <p className='pt-2 px-4 md:px-0 md:pt-5  text-gray-500 lg:text-lg md:text-sm'>These low-profile sneakers are your perfect casual wear companion.Featuring a durable rubber outer sole,they'll
          withstand everything the weather can offer
        </p>
        <div className='flex flex-row justify-between px-3 md:flex-col md:justify-normal md:px-0 pt-3'>
          <div className='text-black text-2xl font-bold'>$125.00<span className='ml-4 text-sm text-orange-600 p-1 px-4 bg-orange-200 rounded-lg font-bold'>50%</span></div>
          <div className='pt-1 p-3 md:p-0 font-bold text-gray-500 text-sm'>$250.00</div>
        </div>
        <div className='flex flex-col gap-2 md:flex-row md:gap-0 items-center'>
    <div className='flex p-3 md:p-3 px-24 md:px-0 justify-center items-center bg-slate-200 mt-5 rounded-lg '>
      <img onClick={subItem} src={minus} alt='' className='mr-8 md:ml-8 hover:cursor-pointer'/>
      <div className='font-bold'>{count<0?0:count}</div>
      <img onClick={addItem} src={plus} alt='' className='ml-8 md:mr-8 hover:cursor-pointer'/>
    </div>
    
    <div className='flex pt-2 items-center ml-5'>
    
    <button onClick={handlePurchase} className='bg-orange-600 p-3 px-24 lg:p-4 lg:px-28  md:p-2 md:px-24 md:text-sm text-white font-bold rounded-lg flex items-center'>
    <img src={cartIcon} alt='' className='mr-2' />
    <span className='md:px-3'>Add to Cart</span>
    </button>
    
    
    </div>
  
      </div>
  
        </div>
      
    </div>

    {isCartOpen && 
    
    <>  
  <article
  className="bg-white rounded-2xl shadow-2xl p-8 absolute right-3 top-32 left-3 md::w-96 md:left-auto md:top-20"
  style={{
    zIndex: 1000,
  }}
>
  <h2 className="border-b border-slate-400 font-bold pb-2 mb-8">Cart</h2>
   {Quantity!==0 && <div className={items}>
    <img src={thumbnail1} alt="" className="rounded-lg w-14" />
    <ul>
      <li className="text-slate-600 text-sm">{`${text.substring(
        0,
        23
      )}...`}</li>
      <li className="text-slate-600 text-sm">
        $125.00 x {Quantity}{" "}
        <span className="font-bold text-slate-900">${Quantity * 125}</span>

      </li>
    </ul>

    <button>
      <img  src={iconDelete} alt="" />
    </button>
  </div>

   }
   {Quantity!==0 && <button className={Checkout}>
    Checkout
  </button> }
  {(Quantity===0) && <div className="flex items-center justify-between">
      <div className="text-3xl font-bold pb-10">Your Cart is empty</div>
  </div>}

</article>


 
</>

    }
    
  </div>
  

  );
};

export default App;
