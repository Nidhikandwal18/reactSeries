import { useCallback, useState } from "react"

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

  
  return (
    <>
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg
     px-4 my-8 text-orange-500 bg-gray-800 text-center">
      test
      </div>    
    </>
  )
}

export default App
