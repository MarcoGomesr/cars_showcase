'use client'
import { useState } from 'react'
import { SearchManufacturer } from '@/components'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
  <button type="submit" className={` -ml-3 z-10 ${otherClasses}`}>
    <Image
      src="/magnifying-glass.svg"
      alt="maginifying glass"
      width={40}
      height={40}
      className="object-contain"
    />
  </button>
)

export default function SearchBar() {
  const [manufacturer, setManufacturer] = useState('')
  const [model, setModel] = useState('')
  const router = useRouter()

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(manufacturer)
    if (manufacturer === '' || model === '') {
      alert('Please enter a manufacturer and model')
    }
    updateSearchParams(model.toLowerCase(), manufacturer.toLowerCase())
  }

  const updateSearchParams = (model: string, manufacturer: string) => {
    const searchParams = new URLSearchParams(window.location.search)

    if (model !== '' || model.length > 0) {
      searchParams.set('model', model)
    } else {
      searchParams.delete('model')
    }

    if (manufacturer !== '' || manufacturer.length > 0) {
      searchParams.set('manufacturer', manufacturer)
    } else {
      searchParams.delete('manufacturer')
    }

    const newPathName = `${window.location.pathname}?${searchParams.toString()}`

    router.push(newPathName)
  }

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
          alt="car model"
        />
        <input
          type="text"
          placeholder="Tiguan"
          value={model}
          onChange={(e) => {
            setModel(e.target.value)
          }}
          className="searchbar__input"
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <SearchButton otherClasses="max-sm:hidden" />
    </form>
  )
}
