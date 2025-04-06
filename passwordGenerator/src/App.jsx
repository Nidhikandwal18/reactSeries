import { useCallback, useEffect, useRef, useState } from "react"

function App() {

  const [length, setLength]=useState(8)
  const [number,setNumber]=useState(false)
  const [char,setChar]=useState(false)
  const [password,setPassword]=useState("")
  
  const passwordGenerator=useCallback(()=>{
    let pass="";
    let string="ABCDEFGHIJKLMNOPQRSUTVWXYZabcdefghijklmnopqrstuvwxyz";

    if(number) {
      string+="1234567890"
    }
    if(char){
      string+="!@#$%^&*(){}[]"
    }

    for(let i=1;i<=length;i++){
      pass+=string.charAt(Math.floor(Math.random()*string.length+1))
    }

    setPassword(pass);
  },[length,number,char,setPassword])
  const passwordRef=useRef(null)

  const copyPassword=useCallback(()=>{
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{passwordGenerator()},[length,number,char,passwordGenerator])
  return (
    <>
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg
     px-4 my-8 text-pink-400 bg-gray-800 text-center">
      <h1 className="text-xl my-5 py-5">Password Generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input type="text"  value={password} className="outline-none w-full py-1 px-3 mb-6 rounded-lg text-pink-650 font-semibold" placeholder="password" readOnly
        ref={passwordRef}/>
        <button className=" py-1 mb-6 border-2 border-gray-1000 text-black rounded-lg bg-pink-400 p-2 mx-1" 
        onClick={copyPassword}>copy</button>
      </div>
      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input 
          type="range"
          min={6}
          max={20}
          value={length}
          className="cursor-pointer" 
          onChange={(e)=>{setLength(e.target.value)}}
          
          />

          <label className="py-4" >Length: {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input type="checkbox" className="cursor-pointer" defaultChecked={number}
          onChange={()=>{
            setNumber((prev)=>!prev);
          }} 
          />
          <label className="pr-4" >Include <br/>Number</label>
          


          <input type="checkbox" className="pointer" defaultChecked={char}
          onChange={()=>{
            setChar((prev)=>!prev);
          }} 
          />
          <label >Include<br/>characters</label>
        </div>

        

      </div>
      </div> 
      <div className="flex items-center justify-center gap-1 text-center">


      <div className="text-pink-400 text-center text-2xl">I love color pink</div>
        
       <img src="https://cdn.iconscout.com/icon/premium/png-512-thumb/bow-4301389-3571848.png?f=webp&w=512" className="h-7 flex flex" alt="" />    
      </div>
    </>
  )
}

export default App
