// import './App.css'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Footer from './components/Footer'
import MainContent from './components/MainContent'


function App() {

  return (
    <section className='bg-black text-white px-20 pt-10 pb-20'>
      <Navbar />
      <Header />
      <MainContent />
      <Footer />
    </section>
  )
}

export default App
