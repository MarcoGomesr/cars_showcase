'use client'

import Image from 'next/image'
import { useState, Fragment } from 'react'
import { Combobox, Transition } from '@headlessui/react'

import { manufacturers } from '@/constants'
import { type SearchManuFacturerProps } from '@/types'

export default function SearchManufacturer({
  selected,
  setSelected
}: SearchManuFacturerProps) {
  const [query, setQuery] = useState('')

  const filteredManufacturers =
    query === ''
      ? manufacturers
      : manufacturers.filter((item) =>
          item
            .toLowerCase()
            .replace(/\s+/g, '')
            .includes(query.toLowerCase().replace(/\s+/g, ''))
        )

  return (
    <div className="search-manufacturer">
      <Combobox value={selected} onChange={setSelected}>
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
            displayValue={(item: string) => item}
            onChange={(event) => {
              setQuery(event.target.value)
            }} // Update the search query when the input changes
            placeholder="Volkswagen..."
          ></Combobox.Input>

          <Transition
            as={Fragment}
            leave="transition easi-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => {
              setQuery('')
            }}
          >
            <Combobox.Options className="search-manufacturer__options" static>
              {filteredManufacturers.length === 0 && query !== '' ? (
                <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                  Nothing found.
                </div>
              ) : (
                filteredManufacturers.map((item) => (
                  <Combobox.Option
                    key={item}
                    value={item}
                    className={({ active }) =>
                      `relative search-manufacturer__option ${
                        active ? 'bg-primary-blue text-white' : 'text-gray-900'
                      }`
                    }
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? 'font-medium' : 'font-normal'
                          }`}
                        >
                          {item}
                        </span>
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active ? 'text-white' : 'text-teal-600'
                            }`}
                          ></span>
                        ) : null}
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  )
}
