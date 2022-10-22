import React from 'react'
import Form from './Form'
import useCarInsurance from '../hooks/useCarInsurance'
import Loading from './Loading';

const InsuranceApp = () => {

    const {price, loading } = useCarInsurance()

  return (
    <>
        <header className="my-10">
            <h1 className='text-white text-center text-4xl font-black'>Car Insurance</h1>
        </header>
        <main className='bg-white md:w-2/3 lg:2/4 mx-auto shadow rounded-lg p-10'>
            <Form/>
            {loading ? <Loading/> : price }
        </main>
    </>
  )
}

export default InsuranceApp