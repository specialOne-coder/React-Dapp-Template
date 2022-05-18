import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { shortenAddress } from "../utils/ShortAdress";
import { FaHammer} from "react-icons/fa";
import hlogo from '../assets/ethereum.png';


const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const { currentAccount, connectWallet } = useContext(/*Your context*/);

  return (
    <nav className="w-full flex md:justify-center justify-between items-center p-4">
      <div className="md:flex-[0.8] flex-initial justify-center items-center">
        <div className="text-white md:flex  list-none fex-row justify-between items-center fex-initial">
          <div className="menu-transition bg-[#2952e3] py-1 px-3 mx-4 rounded-lg cursor-pointer hover:bg-[#2546bd]">
            <Link to="/">
              <img className="head_logo" src={hlogo}/>
            </Link>
          </div>
        </div>
      </div>
      <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
        <li className="menu-transition mx-4 cursor-pointer border-b-2 border-transparent hover:border-blue-600">
          <Link to="/">Item</Link>
        </li>
        <li className="menu-transition mx-4 cursor-pointer border-b-2 border-transparent hover:border-blue-600">
          <Link to="/"> Item</Link>
        </li>
        <li className="menu-transition mx-4 cursor-pointer border-b-2 border-transparent hover:border-blue-600">
          <Link to="/"> Item</Link>
        </li>
        <li className="mx-4 cursor-pointer">
          <Drop />
        </li>
        <li className="bg-[#2952e3] py-2 px-7 mx-4 rounded-lg cursor-pointer hover:bg-[#2546bd] animate-pulse">
          <button onClick={connectWallet}>
            {!currentAccount
              ? "Connect Wallet"
              : shortenAddress(currentAccount)}
          </button>
        </li>
      </ul>
      <div className="flex relative">
        {!toggleMenu ? (
          <HiMenuAlt4
            fontSize={28}
            className="text-white md:hidden cursor-pointer"
            onClick={() => setToggleMenu(true)}
          />
        ) : (
          <AiOutlineClose
            fontSize={28}
            className="text-white md:hidden cursor-pointer"
            onClick={() => {
              setToggleMenu(false);
            }}
          />
        )}
        {toggleMenu && (
          <ul
            className="z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
                   flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in"
          >
            <li className="text-xl w-full my-2">
              <AiOutlineClose onClick={() => setToggleMenu(false)} />
            </li>
            <li className="mx-4 cursor-pointer">
              <button
                className='flex flex-row items-center my-2 border-solid border-2  mr-2 bg-[#fff] rounded-md cursor-pointer h-8 w-40 place-content-center'>
                <FaHome fontSize={20} className="text-white text-center pr-1" color="#2546bd" />
                <p className="text-[#2546bd] font-bold  pr-1 pl-1">
                  <Link to="/"> Item</Link>
                </p>
              </button>
            </li>

            <li className="mx-4 cursor-pointer">
              <button
                className='flex flex-row items-center my-2 border-solid border-2  mr-2 bg-[#fff] rounded-md cursor-pointer h-8 w-40 place-content-center'>
                <FaHammer fontSize={20} className="text-white text-center pr-1" color="#2546bd" />
                <p className="text-[#2546bd] font-bold  pr-1 pl-1">
                  <Link to="/"> Item</Link>
                </p>
              </button>
            </li>
            <li className="mx-4 cursor-pointer">
              <button
                className='flex flex-row items-center my-2 border-solid border-2  mr-2 bg-[#fff] rounded-md cursor-pointer h-8 w-40 place-content-center'>
                <FaHammer fontSize={20} className="text-white text-center pr-1" color="#2546bd" />
                <p className="text-[#2546bd] font-bold  pr-1 pl-1">
                  <Link to="/"> Item</Link>
                </p>
              </button>
            </li>
            <li className="mx-4 cursor-pointer">
              <button
                className='flex flex-row items-center my-2 border-solid border-2  mr-2 bg-[#fff] rounded-md cursor-pointer h-8 w-40 place-content-center'>
                <FaHammer fontSize={20} className="text-white text-center pr-1" color="#2546bd" />
                <p className="text-[#2546bd] font-bold  pr-1 pl-1">
                  <Link to="/"> Item</Link>
                </p>
              </button>
            </li>
            <li className="mx-4 cursor-pointer">
            <button
                className='flex flex-row items-center my-2 border-solid border-2  mr-2 bg-[#fff] rounded-md cursor-pointer h-8 w-40 place-content-center'>
                <FaHammer fontSize={20} className="text-white text-center pr-1" color="#2546bd" />
                <p className="text-[#2546bd] font-bold  pr-1 pl-1">
                  <Drop />
                </p>
              </button>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
