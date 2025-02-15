import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Selection from './pages/ticket-selection'
import Details from './pages/attendee-details'
import GetTicket from './pages/getTicket'
import { GlobalProvider } from './context/GlobalContext'


function App() {
 return (
    <>
        <GlobalProvider>
          <Router>
            <Routes>
                <Route path='/' element= {<Home/>}/>
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
