'use client'
import { useState } from 'react'
import { SearchManufacturer } from '@/components'

export default function SearchBar() {
  const [manufacturer, setManufacturer] = useState('')
  const handleSearch = (e) => {
    console.log(e.target.value)
  }
  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer />
      </div>
    </form>
  )
}
