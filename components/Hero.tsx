'use client'

import Image from 'next/image'

import { CustomButton } from '../components/CustomButton'

export default function Hero() {
  const handleScroll = () => {
    const nextSection = document.getElementById('discover')

    if (nextSection != null) {
      nextSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Find, Book or Rent a car -- quick and easily!
        </h1>
        <p className="hero__subtitle">
          Sreamline you car rental experience with our effortless booking
          process.
        </p>

        <CustomButton
          title="Explore Cars"
          containerStyles="bg-primary-blue  text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image
            src="/hero.png"
            alt="hero"
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="hero__image-overlay"></div>
        </div>
      </div>
    </div>
  )
}
