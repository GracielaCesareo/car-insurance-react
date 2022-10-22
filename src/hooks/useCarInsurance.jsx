import { useContext} from 'react';
import CarInsuranceContext 
 from '../context/CarInsuranceProvider';

 const useCarInsurance = () =>{
    return useContext(CarInsuranceContext)
 }

 export default useCarInsurance