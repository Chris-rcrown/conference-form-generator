import Header from "../components/header"
import TicketSelection from "./ticket-selection"

const Home = () => {
    
  return (
    <div className="flex flex-col items-center bg-[#02191D]  lg:h-[100vh] ">
      <Header/>
    <TicketSelection /> 
    </div>
  )
}

export default Home
