// Importing React to define the component
import React from "react";

/**
 * Card Component
 * 
 * This component displays a user card with an image, username, description, and a button.
 * Props:
 * - username (string): The name of the user to display.
 * - btnText (string, optional): The text on the button. Defaults to "visit me".
 */
function Card({ username, btnText = "visit me" }) {
  
  // Logging the received 'username' prop to the console (for debugging)
  console.log(username);

  return (
    <div className="relative h-[400px] w-[300px] rounded-md">
      {/* Displaying a user image with responsive styling */}
      <img
        src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
        alt="User Avatar" // Alternative text for accessibility
        className="z-0 h-full w-full rounded-md object-cover" // Styling for proper image rendering
      />

      {/* Overlay effect for better text visibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>

      {/* Displaying user information and action button */}
      <div className="absolute bottom-4 left-4 text-left">
        {/* Username displayed dynamically */}
        <h1 className="text-lg font-semibold text-white">{username}</h1>

        {/* Short description text */}
        <p className="mt-2 text-sm text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?
        </p>

        {/* Button with dynamic text */}
        <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
          {btnText} →
        </button>
      </div>
    </div>
  );
}

// Exporting the Card component for use in other parts of the application
export default Card;