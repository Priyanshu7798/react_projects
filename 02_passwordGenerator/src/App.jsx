import { useState,useCallback,useEffect,useRef} from 'react'


function App() {
  const [length, setLength] = useState(8)
  const [numAllow, setNumAllow] = useState(false);
  const [character, setCharacter] = useState(false);
  const [password,setPassword]=useState("");

  // Password Genrator function
  const passGen = useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numAllow) str+='123456789'
    if(character) str+='!@#$%^&*(){'

    for(let i=1;i<=length;i++){
      let char=Math.floor(Math.random()*str.length+1)
      pass+=str.charAt(char);
    }

    setPassword(pass);

  },[length,numAllow,character,setPassword])

  //  useRef hook functionality for copying the text
  const passRef=useRef(null);


  useEffect(()=>{
    passGen()
  },[length,numAllow,character,passGen])

  const passwordCopy = useCallback(()=>{
    passRef.current?.select(); // To show coiped text selected
    passRef.current?.setSelectionRange(0,length);
    window.navigator.clipboard.writeText(password)
  },[password])

  return (
    <>
      <div className="box outline-slate-200 w-full max-w-lg  mx-auto shadow-md rounded-lg px-4 py-3 mt-9 text-orange-500 bg-gray-700"> 
        <h1 className='text-white text-3xl text-center'>PassWord Generator</h1>
        <div className="innerBox flex shadow rounded-lg overflow-hidden mb-4 mt-4">
          <input type="text" value={password} className='outline-none w-full h-10 px-4 py-1' placeholder='password' readOnly ref={passRef}
          />
          <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0' onClick={passwordCopy}>COPY
          </button> 
        </div>

        <div className='flex text-sm, gap-x-2'>
          <div className='flex items-center gap-x-2'>
            <input type="range" min={6} max={20} value={length} className='cursor-pointer' onChange={(e)=>{setLength(e.target.value)}} />
            <label htmlFor=""> Length :{length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" defaultChecked={character} id="charAllowed" onChange={()=>{
              setCharacter((prev)=> !prev);
            }} />
            <label htmlFor="characterInput"> Character </label>
            <input type="checkbox" defaultChecked={numAllow} id="numAllowed" onChange={()=>{
              setNumAllow((prev)=> !prev);
            }} />
            <label htmlFor="bumInput"> Number </label>
          </div>
        </div>

      </div>
      
    </>
  )
}

export default App
