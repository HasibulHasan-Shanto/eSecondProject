import React, { useContext, useEffect, useState } from "react";
import { ShopeContext } from "../context/ShopeContext";
import Image from "../components/Image";
import searchIcon from "../assets/search_icon.png";
import crossIcon from "../assets/cross_icon.png";
import { useLocation } from "react-router";

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } =
    useContext(ShopeContext);

    const[visible , setVisible] = useState(false)

    const location = useLocation()
    useEffect(()=>{
        if (location.pathname.includes('collection')) {
            setVisible(true)
        }
        else{
            setVisible(false)
        }
    },[location])

  return showSearch && visible ? (
    <div className="border-t border-b bg-gray-50  flex items-center justify-center">
      <div className="m-auto inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="search"
          className="flex-1 outline-none bg-inherit text-sm"
        />
        <Image className={"w-4"} imgSrc={searchIcon} imgAlt={searchIcon} />
      </div>
      <div onClick={() => setShowSearch(false)}>
        <Image className={'inline w-3 cursor-pointer'} imgSrc={crossIcon} imgAlt={crossIcon} />
      </div>
    </div>
  ) : null;
};

export default SearchBar;
