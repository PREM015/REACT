// Importing necessary React hooks and useLoaderData for data fetching
// import React, { useEffect, useState } from 'react'
import { useLoaderData } from "react-router-dom";

function Github() {
  // Fetching data using useLoaderData, which gets data from the loader function
  const data = useLoaderData();

  // Alternative way: Using useState and useEffect to fetch data manually (commented out)
  // This is useful when data needs to be fetched dynamically based on user actions
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch('https://api.github.com/users/hiteshchoudhary')
  //     .then(response => response.json())
  //     .then(data => {
  //       console.log(data); // Logging data for debugging
  //       setData(data); // Updating state with fetched data
  //     });
  // }, []); // Empty dependency array ensures useEffect runs only once

  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      {/* Displaying the number of followers from GitHub API response */}
      Github followers: {data.followers}
      
      {/* Displaying the user's avatar image fetched from GitHub */}
      <img src={data.avatar_url} alt="Git picture" width={300} />
    </div>
  );
}

// Exporting the Github component to be used in other parts of the application
export default Github;

/**
 * Loader function to fetch GitHub user data before rendering the component.
 * This method ensures data is available when the component mounts.
 */
export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/PREM015");
  return response.json(); // Converting response to JSON and returning it
};
