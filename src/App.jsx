import MovieCard from './components/MovieCard.jsx'
import HomePage from './pages/Home.jsx'
import FaviroutePage from './pages/Faviroute.jsx'
import {Routes,Route} from 'react-router-dom'
import NavbBarPage from './components/NavbBar.jsx'
import './css/App.css'
import {MovieProvider} from './context/MovieContext.jsx'

function App() {


  return (
    <>
  <MovieProvider>
  <NavbBarPage/>
    <main className="main-contet">
<Routes>
  <Route path="/" element={<HomePage/>}/>
  <Route path="/Faviroute" element={<FaviroutePage/>}/>
</Routes>

    </main>
  </MovieProvider>
    </>
  )
}

export default App
