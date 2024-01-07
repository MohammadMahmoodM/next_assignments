'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import {ShowMoreProps} from '@/types'
import { CustomButton } from '@/components'
import { updateSearchParams } from '@/utils'

export default function ShowMore({pageNumber, isNext}:ShowMoreProps) {
    const Router = useRouter()
 
    const handleNavigation = () => {
        const newLimit = (pageNumber + 1) * 10;
        const newPathname = updateSearchParams("limit", `${newLimit}`)
        Router.push(newPathname)
    }

    return (
    <div className="w-full gap-5 mt-10 flex-center">
        {!isNext && (
            <CustomButton 
            title="Show More"
            btnType='button'
            containerStyles='bg-primary-blue rounded-full text-white'
            handleClick={handleNavigation}
            />
        )}
        </div>
  )
}
