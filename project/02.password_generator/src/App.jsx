import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setlength] = useState(8)
  const [numberallowed, setnumberallowed] = useState(false)
  const [charallowed, setcharallowed] = useState(false)
  const [password, setpassword] = useState('')


  //ref hook
  const passwordref = useRef(null)


  const passwordgenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyZ"
    if (numberallowed) str += "0123456789"
    if (charallowed) str += "!@#$%^&*()_"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setpassword(pass)


  }, [length, numberallowed, charallowed, setpassword])

    const copyPasswordtoclipbord = useCallback(()=>{
      passwordref.current?.select()
      //passwordref.current?.setSelectionRange(0,3)

      window.navigator.clipboard.writeText(password)
    },[password])



  useEffect(() => {
    passwordgenerator()
  }, [length, numberallowed, charallowed, passwordgenerator])

  return (
    <>

      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-8 my-8 text-orange-500 bg-gray-700'>
        <h1 className='text-white text-center my-3'>password genertor</h1>

        <div className='flex shadow rounded-lg overflow-hidden mb-4'>

          <input
            type="text"
            value={password}
            className='outline-non w-full py-1 px-3'
            placeholder='password'
            readOnly
            ref={passwordref}
          />

          <button onClick={copyPasswordtoclipbord} className='outline-non bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>


        </div>

        <div className='flex text-sm gap-x-2'>

          <div className='flex item-center gap-x-1'>
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => { setlength(e.target.value) }}
            />
            <label>length:{length}</label>

          </div>

          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={numberallowed}
              id="numberInput"
              onChange={() => { setnumberallowed((prev) => !prev) }}

            />
            <label htmlFor="numberInput">Numbers</label>
          </div>


          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={charallowed}
              id="charInput"
              onChange={() => { setcharallowed((prev) => !prev) }}

            />
            <label htmlFor="charInput">character</label>
          </div>



        </div>


      </div>

    </>

  )
}

export default App
