import { CustomFilter, SearchBar, Hero, CarCard } from '@/components'
import { fuels, yearsOfProduction } from '@/constants'
import { getCars } from '@/services/getCars'
import { type FilterProps, type CarProps } from '@/types'

export default async function Home({
  searchParams
}: {
  searchParams: FilterProps
}) {
  const allCars: CarProps[] = await getCars({
    manufacturer: searchParams.manufacturer || '',
    year: searchParams.year || 2023,
    fuel: searchParams.fuel || '',
    limit: searchParams.limit || 10,
    model: searchParams.model || ''
  })

  const isDataEmpty = !Array.isArray(allCars) || allCars.length === 0
  return (
    <main className="overflow-hiden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalog</h1>
          <p>Explore the cars you might like</p>
        </div>
        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container">
            <CustomFilter title="fuel" options={fuels} />
            <CustomFilter title="year" options={yearsOfProduction} />
          </div>
        </div>

        {!isDataEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars.map((car, index) => {
                const id = `${car.make}-${car.model}-${index}`
                return <CarCard car={car} key={id} />
              })}
            </div>
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-back text-sl">Oops, no reults</h2>
            <p>{allCars?.error}</p>
          </div>
        )}
      </div>
    </main>
  )
}
