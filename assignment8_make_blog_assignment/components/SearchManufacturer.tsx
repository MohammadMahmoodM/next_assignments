"use client";

import React, { Fragment, useState } from "react";
import Image from "next/image";
import { manufacturers } from "@/constants";

import { Combobox, Transition } from "@headlessui/react";

const SearchManufacturer = (props: any) => {
  const [query, setQuery] = useState("");

  const filteredManufacturers = query === ""
    ? manufacturers
    : manufacturers.filter((item) => {
        return (item
          .toLowerCase()
          .replace(/\s+/g, "")
          .includes(query.toLowerCase().replace(/\s+/g, ""))
        )
        });

  return (
    <div className="search-manufacturer">
      <Combobox>
        <div className="relative w-full">
          <Combobox.Button className="absolute top-[14px]">
            <Image
              src="/car-logo.svg"
              width={20}
              height={20}
              className="ml-4"
              alt="car logo"
            />
          </Combobox.Button>

          <Combobox.Input
            className="search-manufacturer__input"
            placeholder="Carolla"
            displayValue={(manufacturer: string) => manufacturer}
            onChange={(event) => setQuery(event.target.value)}
          />

          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
          >
            <Combobox.Options>
                {filteredManufacturers.length === 0 && query !== "" ? (
                    <Combobox.Option value={query}>
                        {query}
                    </Combobox.Option>
                    
                ) : (
                   filteredManufacturers.map((item) => {
                       return (
                        <Combobox.Option value={item}>
                            {item}
                        </Combobox.Option>
                       )
                   })
                )
                }
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};

export default SearchManufacturer;