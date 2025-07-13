import { useState, useCallback, useEffect, useRef } from "react";
// useCallBack is use to memorize the function sa much possible
// useRef is use to get the refernce of the function on the webpage and manuplate it
function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumber] = useState(false);
  const [charAllowed, setChar] = useState(false);
  const [password, setPass] = useState("");
  // rseRef hook
   const passwordRef =useRef(null)

  const passwordGenrator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()+-{}[]_=`~";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPass(pass);
  }, [length, numberAllowed, charAllowed, setPass]);

  // copy to clipboard Function
  const copyPasswordToClipborad = useCallback(() => {
    passwordRef.current?.select() // use for show that input is selected
    passwordRef.current?.setSelectionRange(0, 3) // use for only selecting within the range 
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {passwordGenrator()}, [length, numberAllowed, charAllowed, passwordGenrator])

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-black bg-white">
        <h1 className="text-black font-bold text-2xl text-center my-3">Password Genrator</h1>
        <div className="flex shadow rounded-2xl overflow-hidden mb-4 bg-gray-100">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3 bg-gray-100"
            placeholder="password"
            readOnly
            ref={passwordRef}
          />
          <button onClick={copyPasswordToClipborad} className="outline-none bg-cyan-500 text-white px-3 py-0.5 mx-2 my-2 rounded-2xl shrink-0">
            Copy
          </button>
        </div>
        <div className="flex flex-col text-sm gap-y-1 py-5 font-semibold">
          <div className="flex justify-between item-center gap-x-1">
            <label> Length (6-26) : {length}</label>
            <input
              type="range"
              min={6}
              max={26}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
          </div>
          <div className="flex justify-between gap-x-1 items-center">
            <label htmlFor="numberInput">Numbers</label>
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumber((prev) => !prev);
              }}
            />
          </div>
          <div className="flex justify-between gap-x-1 items-center">
            <label htmlFor="charInput">Characters</label>
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="charInput"
              onChange={() => {
                setChar((prev) => !prev);
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
