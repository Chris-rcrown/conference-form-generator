import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/HomePage'
import Event from './pages/event'
import Selection from './pages/ticket-selection'
import MyTickets from './pages/myTickets'
import Details from './pages/attendee-details'
import GetTicket from './pages/getTicket'
import { GlobalProvider } from './context/GlobalContext'
import AboutProject from './pages/about'


function App() {
 return (
    <>
        <GlobalProvider>
          <Router>
            <Routes>
                <Route path='/' element= {<Home/>}/>
                <Route path = '/events' element ={ <Event/>}/>
                <Route path= '/aboutProject' element={<AboutProject/>} />
                <Route path = '/myTickets' element= {<MyTickets/>} />
                <Route path='/selection' element= {<Selection/>}/>
                <Route path='/details' element= {<Details/>}/>
                <Route path='/getTicket' element= {<GetTicket/>}/>
            </Routes>
          </Router>
        </GlobalProvider>
    </>
  )
}

export default App
