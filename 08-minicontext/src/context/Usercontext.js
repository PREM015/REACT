// Importing the React library to use its features
import React from 'react';



/**
 * Creating a context using React's createContext() method.
 * 
 * - Context provides a way to share state between components 
 *   without passing props manually at every level (avoiding prop drilling).
 * - This Usercontext will hold and provide user-related data across components.
 */
const Usercontext = React.createContext();
/**
What Context API Does:
✅ Stores data (like user info, theme, language, etc.) in one place.
✅ Shares that data with multiple components without needing to pass props manually through every parent.
✅ Any component in the project can access the data directly using useContext(). */

// Exporting the context so it can be used in other files
export default Usercontext;
