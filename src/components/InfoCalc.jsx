import React, {useMemo, useRef} from 'react'
import useCarInsurance from '../hooks/useCarInsurance'
import { REGIONS, PLANS} from '../constants'

const InfoCalc = () => {

    const {price, data} = useCarInsurance()
    const {region, year, plan} = data
    const yearRef = useRef(year)

    const [regionName] = useMemo( () =>
        REGIONS.filter(reg => reg.id === Number(region)),
        [price] // Dependencies
    )

    const [planName] = useMemo( () => 
        PLANS.filter(p => p.id === Number(plan)),
        [price] // Dependencies
    )


    if(!price) return null

  return (
    <div className='bg-gray-100 text-center mt-5 p-5 shadow'>
        <h2 className='text-gray-600 font-black text-2xl'>Insurance info: </h2>
        <p className='my-2'> <span className='font-bold'>Region:</span>{regionName.name}</p>
        <p className='my-2'> <span className='font-bold'>Year:</span>{yearRef.current}</p>
        <p className='my-2'> <span className='font-bold'>Plan:</span>{planName.name}</p>
        <p className='my-2'> <span className='font-bold'>Total:</span>{price}</p>
    </div>
  )
}

export default InfoCalc