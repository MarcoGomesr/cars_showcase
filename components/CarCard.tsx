'use client'

import { CarTransmission, type CarProps } from '@/types'
import { calculateCarRent } from '@/utils'
import Image from 'next/image'
import { CustomButton } from './CustomButton'
import { useState } from 'react'
import CarDetails from './CarDetails'
import { generateCarImageUrl } from '@/services/getCars'

interface CarCardProps {
  car: CarProps
}

export default function CarCard({ car }: CarCardProps) {
  const { city_mpg, year, make, model, transmission, drive } = car

  const [isOpen, setIsOpen] = useState(false)

  const carRent = calculateCarRent(city_mpg, year)
  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2>
          {make} {model}
        </h2>
      </div>
      <p className="flex mt-6 text-[32px]">
        <span className="self-start text-[14px]">$</span>
        <span>{carRent}</span>
        <span className="self-end text-[14px] font-medium">/day</span>
      </p>
      <div className="relative w-full h-40 my-3 ">
        <Image
          src={generateCarImageUrl(car)}
          alt="hero"
          fill
          className="object-contain"
        />
      </div>
      <div className="relative flex w-full mt-2">
        <div className="flex group-hover:invisible w-full justify-between text-gray">
          <div className="flex flex-col justify-items-center items-center gap-2">
            <Image
              src="/steering-wheel.svg"
              alt="steering wheelicon"
              width={20}
              height={20}
            />
            <p className="text-[14px]">
              {transmission === 'a'
                ? CarTransmission.automatic
                : CarTransmission.manual}
            </p>
          </div>
          <div className="flex flex-col justify-items-center items-center gap-2">
            <Image
              src="/tire.svg"
              alt="steering wheelicon"
              width={20}
              height={20}
            />
            <p className="text-[14px]">{drive.toLocaleLowerCase()}</p>
          </div>
          <div className="flex flex-col justify-items-center items-center gap-2">
            <Image
              src="/gas.svg"
              alt="steering wheelicon"
              width={20}
              height={20}
              aria-label="gas icon"
            />
            <p className="text-[14px]">{city_mpg} MPG</p>
          </div>
        </div>
        <div className="car-card__btn-container">
          <CustomButton
            title="View More"
            containerStyles="w-full py-[16px] rounded-full bg-primary-blue"
            textStyles="text-white text-[14px] leading-[17px] font-bold"
            rightIcon="/right-arrow.svg"
            handleClick={() => {
              setIsOpen(true)
            }}
          />
        </div>
      </div>
      <CarDetails
        isOpen={isOpen}
        closeModel={() => {
          setIsOpen(false)
        }}
        car={car}
      />
    </div>
  )
}
