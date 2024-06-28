import { useState } from 'react'


function App() {
  const [color, setColor] = useState('olive')

  return (
    <>
      <div className="box w-full h-screen" style={{backgroundColor:color}}>

        <div className="navTab fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="tabCont flex flex-wrap bg-white gap-3 px-5 py-2 rounded-3xl shadow-xl">
            <button onClick={()=> setColor('red')} className='outline-none px-4 py-1 text-white rounded-3xl shadow-lg'style={{backgroundColor:'red'}}>
            Red</button>
            <button onClick={()=> setColor('green')} className='outline-none px-4 py-1 text-white rounded-3xl shadow-lg'style={{backgroundColor:'green'}}>
            Green</button>
            <button onClick={()=> setColor('blue')} className='outline-none px-4 py-1 text-white rounded-3xl shadow-lg'style={{backgroundColor:'blue'}}>
            Blue</button>
          </div>
        </div>  
      </div>
    </>
  )
}

export default App
