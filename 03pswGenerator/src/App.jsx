import { useState, useCallback, useEffect, useRef } from 'react';
import './App.css';

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [passw, setPassw] = useState("");
  const [isCopied, setIsCopied] = useState(false); // State to manage copied message

  const reference = useRef(null);

  const pswGenerator = useCallback(() => {
    let psw = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`";

    for (let i = 1; i <= length; i++) {
      let p = Math.floor(Math.random() * str.length);
      psw += str.charAt(p);
    }
    setPassw(psw);
  }, [length, numberAllowed, charAllowed, setPassw]);

  useEffect(() => {
    pswGenerator();
  }, [length, numberAllowed, charAllowed, pswGenerator]);

  const copyPasswordToClipboard = useCallback(() => {
    reference.current?.select();
    window.navigator.clipboard.writeText(passw);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  }, [passw]);

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50'>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
        <h1 className='text-white text-xl text-center my-3'>Password Generator</h1>
        <div className='flex bg-white shadow rounded-lg overflow-hidden mb-4'>
          <input
            type='text'
            value={passw}
            placeholder="Password"
            className="outline-none w-full py-1 px-3"
            readOnly
            ref={reference}
          />
          <button
            onClick={copyPasswordToClipboard}
            className='bg-blue-700 text-white px-3 py-0.5 shrink-0 hover:bg-blue-800'
          >
            Copy
          </button>
        </div>
        {isCopied && (
          <div className="fixed top-5 left-1/2 transform -translate-x-1/2 bg-gray-700 text-white px-4 py-2 rounded-lg shadow-lg transition-opacity duration-300">
            Copied to clipboard!
          </div>
        )}

        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
              type="range"
              min={6}
              max={30}
              value={length}
              className='cursor-pointer'
              onChange={(e) => { setLength(e.target.value) }}
            />
            <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;