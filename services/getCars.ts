import { type FilterProps } from '@/types'

export async function fetchCars(filters: FilterProps) {
  const { fuel, manufacturer, limit, model, year } = filters

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.NEXT_PUBLIC_RAPID_API_KEY ?? '',
      'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }
  }

  const response = await fetch(
    `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make${manufacturer}&year=${year}&model=${model}&fuel_type=${fuel}&limit=${limit}`,
    options
  )

  const result = await response.json()

  return result
}

// export const generateCarImageUrl = (car: CarProps, angle?: string) => {
//   // keys
//   const url = new URL('https://cdn.imagin.studio/getimage')
//   const { make, year, model } = car
//   url.searchParams.append('customer', 'hrjavascript-mastery')
//   url.searchParams.append('make', make)
//   url.searchParams.append('modelFamily', model.split(' ')[0])
//   url.searchParams.append('zoomType', 'fullscreen')
//   url.searchParams.append('modelYear', `${year}`)
//   url.searchParams.append('angle', `${angle ?? '0'}`)
//   return `${url.toString()}`
// }
