"use client";
import { useState } from "react";
import { SearchManufacturer } from "@/components";
import { SearchButton } from "@/components";
import Image from "next/image";
import {useRouter} from 'next/navigation';

const SearchBar = () => {
  const [manufacturer, setManufacturer] = useState("");
  const [carModel, setCarModel] = useState("");

  const router = useRouter()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();

    if (manufacturer === "" && carModel === "") {
      return alert("Please Enter Company and Car Model");
    }

    updateSearchparams(carModel.toLowerCase(), manufacturer.toLowerCase())
  };

  const updateSearchparams = (carModel: string, manufacturer: string) => {
    const searchParams = new URLSearchParams(window.location.search);
    
    if (carModel) {
      searchParams.set('model', carModel)
    } 

    if (manufacturer) {
      searchParams.set('manufacturer', manufacturer)
    }

    const newPathname = `${window.location.pathname}?${searchParams.toString()}`
    router.push(newPathname)
    
  };

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />

        <SearchButton otherClasses="sm:hidden" />
      </div>

      <div className="searchbar__item">
        <Image
          src="/model-icon.png"
          width={25}
          height={25}
          className="absolute w-[20px] h-[20px] ml-4"
          alt="car model icon"
        />
        <input
          type="text"
          name="model"
          value={carModel}
          onChange={(e) => {
            setCarModel(e.target.value);
          }}
          placeholder="Carolla"
          className="searchbar_input"
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>

      <SearchButton otherClasses="max-sm:hidden" />
    </form>
  );
};

export default SearchBar;
