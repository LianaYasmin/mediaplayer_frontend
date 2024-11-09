import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Landing from './pages/Landing'
import Home from './pages/Home'
import WatchHistory from './pages/WatchHistory'

function App() {


  return (
    <>
      <Header />
    
       <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/watchHistory' element={<WatchHistory/>}/>
       </Routes>

      <Footer />
    </>
  )
}

export default App
