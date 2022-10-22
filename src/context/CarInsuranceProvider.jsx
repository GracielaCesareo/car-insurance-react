import { createContext, useState } from "react";
import {getYearDiff, calculateByRegion, calculateByPlan, formatToCurrency} from '../helpers/index'

// Create context
const CarInsuranceContext = createContext()

// Create provider
const CarInsuranceProvider = ({children}) => {

    // useState of data
    const [data, setData] = useState({
        region: '',
        year: '',
        plan: ''
    })

    const handleChangeData = (e) => {

        setData({
            ...data, // Base changes on previous state
            [e.target.name] : e.target.value // Set value changes
        })
    }

    const [error, setError] = useState('') // To set error component state
    const [price, setPrice] = useState('') // To set price state
    const [loading, setLoading] = useState(false)

    // Fn to calculate car insurance price
    const calculate = () => {
        console.log('Cotizando...')

        //Base price
        let basePrice = 2000

        // Get difference of years
        const diffYear = getYearDiff(data.year)

        //Subtract 3% by year
        basePrice -= ((diffYear * 3) * basePrice) / 100

        // Calculate price by region
        basePrice *= calculateByRegion(data.region)

        // Calculate price by plan
        basePrice *= calculateByPlan(data.plan)

        // Format price
        basePrice = formatToCurrency(basePrice)

        setLoading(true)

        setTimeout(() => {
            setPrice(basePrice)
            setLoading(false)
        }, "2000")

        
    }

    return (
        <CarInsuranceContext.Provider 
            value={{
                data,
                handleChangeData,
                error,
                setError,
                calculate,
                price,
                setPrice,
                loading,
                setLoading
            }}
        >
            {children}
        </CarInsuranceContext.Provider>
    )
}

// Export provider
export {
    CarInsuranceProvider
}

// Export context (default)
export default CarInsuranceContext