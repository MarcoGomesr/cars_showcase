import { CustomFilter, SearchBar, Hero, CarCard } from '@/components'
import { getCars } from '@/services/getCars'
import { type CarProps } from '@/types'

export default async function Home() {
  const allCars: CarProps[] = await getCars()

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
            <CustomFilter title="fuel" />
            <CustomFilter title="year" />
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
