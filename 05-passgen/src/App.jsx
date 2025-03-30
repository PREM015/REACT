// Importing necessary React hooks for state and side effects
import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  // State to track password length, default is 8
  const [length, setLength] = useState(8);

  // State to enable/disable numbers in the password
  const [numberAllowed, setNumberAllowed] = useState(false);

  // State to enable/disable special characters in the password
  const [charAllowed, setCharAllowed] = useState(false);

  // State to store the generated password
  const [password, setPassword] = useState("");

  // useRef hook to reference the password input field for copying functionality
  const passwordRef = useRef(null);

  /**
   * Function to generate a random password based on selected options.
   * Wrapped in useCallback to optimize performance by memoizing the function.
   */
  const passwordGenerator = useCallback(() => {
    let pass = ""; // Initialize empty password string
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"; // Base character set (letters only)

    if (numberAllowed) str += "0123456789"; // Append numbers if enabled
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`"; // Append special characters if enabled

    // Generate password by selecting random characters from the allowed set
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length); // Get random index
      pass += str.charAt(char); // Append random character
    }

    setPassword(pass); // Update state with the generated password
  }, [length, numberAllowed, charAllowed]); // Dependencies: re-run function if any of these change

  /**
   * Function to copy the generated password to the clipboard.
   * Uses useRef to select and copy the password text.
   */
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select(); // Select the text inside input field
    passwordRef.current?.setSelectionRange(0, 999); // Ensure full selection for copying
    window.navigator.clipboard.writeText(password); // Copy to clipboard
  }, [password]); // Dependency: re-run only if password changes

  /**
   * useEffect hook to generate a new password automatically
   * whenever the length, numberAllowed, or charAllowed states change.
   */
  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]); // Dependencies: triggers re-generation when these change

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      {/* Header */}
      <h1 className="text-white text-center my-3">Password Generator</h1>

      {/* Password Display & Copy Button */}
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={password} // Display the generated password
          className="outline-none w-full py-1 px-3"
          placeholder="Password"
          readOnly // Prevent manual editing
          ref={passwordRef} // Reference for copy functionality
        />
        <button
          onClick={copyPasswordToClipboard} // Trigger copy function
          className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
        >
          Copy
        </button>
      </div>

      {/* Controls for Password Options */}
      <div className="flex text-sm gap-x-2">
        {/* Length Slider */}
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            min={6} // Minimum password length
            max={100} // Maximum password length
            value={length}
            className="cursor-pointer"
            onChange={(e) => setLength(Number(e.target.value))} // Update length state
          />
          <label>Length: {length}</label>
        </div>

        {/* Checkbox to enable/disable numbers */}
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange={() => setNumberAllowed((prev) => !prev)} // Toggle numberAllowed state
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>

        {/* Checkbox to enable/disable special characters */}
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={charAllowed}
            id="characterInput"
            onChange={() => setCharAllowed((prev) => !prev)} // Toggle charAllowed state
          />
          <label htmlFor="characterInput">Characters</label>
        </div>
      </div>
    </div>
  );
}

// Exporting the App component to be used in index.js
export default App;
