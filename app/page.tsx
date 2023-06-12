'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

import { CustomFilter, SearchBar, Hero, CarCard, ShowMore } from '@/components'
import { fuels, yearsOfProduction } from '@/constants'
import { getCars } from '@/services/getCars'
import { type FilterProps, type CarProps } from '@/types'

export default async function Home() {
  const [allCars, setAllCars] = useState<CarProps[]>([])
  const [loading, setLoading] = useState(false)

  // search states
  const [manufacturer, setManuFacturer] = useState('')
  const [model, setModel] = useState('')

  // filter states
  const [fuel, setFuel] = useState('')
  const [year, setYear] = useState(2005)

  // pagination states
  const [limit, setLimit] = useState(10)

  const getAllCars = async () => {
    setLoading(true)
    try {
      const filter: FilterProps = {
        manufacturer: manufacturer.toLowerCase(),
        model,
        fuel,
        year,
        limit
      }

      const result = await getCars(filter)
      setAllCars(result)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getAllCars()
    console.log('eeee')
    console.log(fuel, year, limit, manufacturer, model)
  }, [])

  return (
    <main className="overflow-hiden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalog</h1>
          <p>Explore the cars you might like</p>
        </div>
        <div className="home__filters">
          <SearchBar setManuFacturer={setManuFacturer} setModel={setModel} />
          <div className="home__filter-container">
            <CustomFilter title="fuel" options={fuels} setFilter={setFuel} />
            <CustomFilter
              title="year"
              options={yearsOfProduction}
              setFilter={setYear}
            />
          </div>
        </div>

        {allCars.length > 0 ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars.map((car, index) => {
                const id = `${car.make}-${car.model}-${index}`
                return <CarCard car={car} key={id} />
              })}
            </div>

            {loading && (
              <div>
                <Image
                  src="/loader.svg"
                  alt="Loading"
                  width={50}
                  height={50}
                  className="object-contain"
                />
              </div>
            )}
            <ShowMore
              pageNumber={limit / 10}
              isNext={limit > allCars.length}
              setLimit={setLimit}
            />
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-back text-sl">Oops, no results</h2>
          </div>
        )}
      </div>
    </main>
  )
}
