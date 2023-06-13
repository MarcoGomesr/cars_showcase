'use client'

import { type CustomButtonProps } from '@/types'
import Image from 'next/image'

export const CustomButton = ({
  isDisable,
  btnType,
  containerStyles,
  textStyles,
  title,
  rightIcon,
  handleClick
}: CustomButtonProps) => {
  return (
    <button
      disabled={isDisable}
      type={btnType ?? 'button'}
      className={`custom-btn ${containerStyles ?? ''}`}
      onClick={handleClick}
    >
      <span className={`flex-1 ${textStyles ?? ''}`}>{title}</span>
      {rightIcon != null && (
        <div className="relative w-6 h-6">
          <Image
            src={rightIcon}
            alt="right-icon"
            fill
            className="object-contain"
          />
        </div>
      )}
    </button>
  )
}
