import Image from 'next/image';
import logo from '../public/amazon-logo.png';
import primeImg from '../public/header-img.jpg';
import {
  MenuIcon,
  LocationMarkerIcon,
  SearchIcon,
  ShoppingCartIcon,
} from '@heroicons/react/outline';

function Header() {
  return (
    <header className="">
      {/* Top */}
      <div className="bg-[#131921] h-[60px] flex items-center px-1 flex-grow py-2 whitespace-nowrap ">
        <div className="mt-2 mr-2 flex items-center flex-grow sm:flex-grow-0">
          <Image
            src={logo}
            width={120}
            height={30}
            className="object-contain cursor-pointer"
          />
        </div>

        {/* Location */}
        <div className="hidden md:flex items-center cursor-pointer mr-4">
          <LocationMarkerIcon className="h-5 text-white" />
          <div className="link text-xs font-medium">
            <p className="text-[#CCC]">Deliver to Tarun</p>
            <p className="font-bold md:text-sm">Ghaziabad 201010</p>
          </div>
        </div>
        {/* Search */}
        <div className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500">
          <input
            type="text"
            className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none"
          />
          <SearchIcon className="h-12 p-4 text-white" />
        </div>

        {/* Right */}
        <div className="text-white flex items-center text-xs space-x-6 mx-6 font-medium">
          <div className="link">
            <p>Hello, Tarun</p>
            <p className="font-bold md:text-sm">Accounts & Lists</p>
          </div>
          <div className="link">
            <p>Returns</p>
            <p className="font-bold md:text-sm">& Orders</p>
          </div>
          <div className="relative link flex items-center">
            <span className="absolute left-4 top-[6px] text-[14px] text-[#F08804]">
              0
            </span>
            <ShoppingCartIcon className="h-10" />
            <p className="hidden md:inline font-bold md:text-sm">Basket</p>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="bg-[#232f3e] flex items-center justify-between">
        <p className="flex items-center">
          <MenuIcon className="h-6 link" />
          <p className="link">All</p>
        </p>
        <p className="link">Fresh</p>
        <p className="link">Amazon Pay</p>
        <p className="link">Amazon Business</p>
        <p className="link">Amazon miniTV</p>
        <p className="link hidden lg:inline-flex">Sell</p>
        <p className="link hidden lg:inline-flex">Gift Cards</p>
        <p className="link hidden lg:inline-flex">
          Health,Household & Personal Care
        </p>
        <Image src={primeImg} className="link hidden lg:inline-flex" />
      </div>
    </header>
  );
}

export default Header;
