import { CarInsuranceProvider } from './context/CarInsuranceProvider'
import InsuranceApp from "./components/InsuranceApp"



function App() {


  return (
    <div className="App">
      <CarInsuranceProvider>
        <InsuranceApp />
      </CarInsuranceProvider>
      
    </div>
  )
}

export default App
