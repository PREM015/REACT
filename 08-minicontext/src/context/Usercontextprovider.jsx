// Importing React and the Usercontext (which was created separately)
import React from "react";
import Usercontext from "./Usercontext";

/**
 * Usercontextprovider - A Context Provider component that wraps
 * child components and provides global access to user state.
 */
const Usercontextprovider = ({ children }) => {
  
  // useState to manage the user object (Initially set to null)
  const [user, setuser] = React.useState(null);

  return (
    /**
     * Usercontext.Provider makes `user` and `setuser` available 
     * to all child components inside this provider.
     * 
     * `children` represents all nested components within this provider.
     */
    <Usercontext.Provider value={{ user, setuser }}>
      {children} {/* Render all wrapped child components */}
    </Usercontext.Provider>
  );
};

// Exporting Usercontextprovider to be used in App.js or other files
export default Usercontextprovider;
