 import React, { Fragment } from 'react'
 import { REGIONS, YEARS, PLANS } from '../constants/index'
 import useCarInsurance from '../hooks/useCarInsurance'
 import Error from './Error'
 
 const Form = () => {

    const {data, handleChangeData, error, setError, calculate } = useCarInsurance()

    const handleSubmit = (e) => {
        e.preventDefault();

        if(Object.values(data).includes('')){
            setError('All fields required')
        }
        setError('')
    }

   return (
     <>
        {error && <Error />}
        <form
            onSubmit={handleSubmit}
        >
            <div className='my-5'>
                <label htmlFor="region" className=' text-sm'>Region</label>
                <select
                  name="region"
                  id="region"
                  className='w-full
                  p-3
                  bg-white
                  border
                  border-gray-200'
                  onChange={(e) => handleChangeData(e)}
                  value={data.region}
                  >
                    <option value=""> -- Pick a region -- </option>
                    {REGIONS.map(region =>
                        <option 
                            key={region.id}
                            value={region.id}>
                            {region.name}
                        </option>
                    )}
                </select>
            </div>
            <div className='my-5'>
                <label htmlFor="year" className=' text-sm'>Year</label>
                <select
                  name="year"
                  id="year"
                  className='w-full
                  p-3
                  bg-white
                  border
                  border-gray-200'
                  onChange={(e) => handleChangeData(e)}
                  value={data.year}
                  >
                    <option value=""> -- Pick a year -- </option>
                    {YEARS.map(year =>
                        <option 
                            key={year}
                            value={year}>
                            {year}
                        </option>
                    )}
                </select>
            </div> 
            <div className='my-5'>
                <label htmlFor="">Pick a plan</label>
                <div className="flex gap-3">
                    {PLANS.map( plan => (
                        <Fragment key={plan.id}>
                            <label htmlFor={plan.name}>{plan.name}</label>
                            <input 
                            type="radio" 
                            name="plan" 
                            id={plan.name}
                            value={plan.id}
                            onChange={(e) => handleChangeData(e)}
                            />
                        </Fragment>
                    ))}
                </div>
            </div>

            <input
              type="submit"
              className='w-full
              bg-emerald-300
              hover:bg-emerald-400
              p-2
              rounded
              cursor-pointer
              uppercase'
              value='Calculate' 
              onClick={calculate}
            />
        </form>
     </>
   )
 }
 
 export default Form