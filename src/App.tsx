// import './App.css'
import StackIcon from 'tech-stack-icons'
import Navbar from './components/Navbar'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <section className='bg-black text-white px-20 pt-10 pb-20'>
      <Navbar></Navbar>
      <section className='flex justify-between mt-20'>
        <section className='flex flex-col gap-y-12'>
          <section className='flex flex-col gap-y-3 w-fit p-10 rounded-lg shadow-xl shadow-slate-700'>
            <h1 className=' text-6xl font-bold'>Leon Jayakusuma</h1>
            <h2>Fullstack Developer | Machine Learning Enthusiast</h2>
            <h2 className='text-[gray]'>I see, I build, I conquer. I will make your dream come true.</h2>
          </section>
          <p className=' w-[40rem] text-xl p-10 h-fit rounded-xl shadow-xl shadow-slate-300'>
            With a blend of creativity, technical prowess, and relentless determination,
            I transform your visions into reality, crafting digital solutions that not only meet your needs
            but exceed your expectations, propelling your dreams into the realm of the tangible.
          </p>
        </section>
        <section className='grid grid-cols-3 grid-rows-[repeat(2,200px)] gap-x-20 gap-y-20 justify-center items-center'>
          <StackIcon className='w-32 h-fit' name="figma" />
          <StackIcon className='w-32 h-fit' name="reactjs" />
          <StackIcon className='w-32 h-fit' name="vitejs" />
          <StackIcon className='w-32 h-fit bg-white p-3 rounded-full' name="nextjs" />
          <StackIcon className='w-32 h-fit' name="tailwindcss" />
          <StackIcon className='w-32 h-fit' name="python" />
        </section>
      </section>

    </section>
  )
}

export default App
