import {
  type SetStateAction,
  type MouseEventHandler,
  type Dispatch
} from 'react'

export interface CustomButtonProps {
  title: string
  containerStyles?: string
  handleClick?: MouseEventHandler<HTMLButtonElement>
  btnType?: 'button' | 'submit'
  textStyles?: string
  rightIcon?: string
  isDisable?: boolean
}

export interface SearchManuFacturerProps {
  selected: string
  setSelected: (manufacturer: string) => void
}

export interface CarProps {
  city_mpg: number
  class: string
  combination_mpg: number
  cylinders: number
  displacement: number
  drive: string
  fuel_type: string
  highway_mpg: number
  make: string
  model: string
  transmission: string
  year: number
  error?: string
}

export type CarState = CarProps[] & { message?: string }

export enum CarTransmission {
  manual = 'Manual',
  automatic = 'Automatic'
}

export interface FilterProps {
  manufacturer: string
  year: number
  fuel: string
  limit: number
  model: string
}

interface OptionsProps {
  title: string
  value: string
}

export interface CustomFilterProps {
  options: OptionsProps[]
  setFilter: (selected: T) => void
}

export interface ShowMoreProps {
  pageNumber: number
  isNext: boolean
  setLimit: Dispatch<SetStateAction<number>>
}

export interface SearchBarProps {
  setManuFacturer: Dispatch<SetStateAction<string>>
  setModel: Dispatch<SetStateAction<string>>
}
