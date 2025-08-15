import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import AppRoutes from './routes'

function App() {
  

  return (
    <>
    <BrowserRouter>
      <Navbar />
      <AppRoutes />
    </BrowserRouter>
    </>
  )
}

export default App
