// Importing the CSS file for styling
import './App.css';

// Importing the Card component from the 'components' folder
import Card from './components/Card';

function App() {
  return (
    <>
      {/* 
        A heading styled with Tailwind CSS 
        - bg-green-400: Sets the background color to green
        - text-black: Sets the text color to black
        - p-4: Adds padding
        - rounded-xl: Rounds the corners
        - mb-4: Adds margin at the bottom
      */}
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>
        Tailwind test
      </h1>

      {/* 
        Rendering the Card component and passing props
        - The first Card receives both 'username' and 'btnText' props 
      */}
      <Card username="chaiaurcode" btnText="click me" />

      {/* 
        The second Card receives only the 'username' prop
        - The 'btnText' prop is not provided, so it will use its default value (if defined in Card component)
      */}
      <Card username="hitesh" />
    </>
  );
}

// Exporting the App component so it can be used in index.js
export default App;
