// Event handling with TypeScript

import { ChangeEvent, FormEvent, MouseEvent } from 'react';

function EventExamples() {
  // Mouse events
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    console.log('Clicked:', e.currentTarget);
  };

  // Input events
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log('Value:', e.target.value);
  };

  // Form events
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleChange} />
      <button onClick={handleClick}>Submit</button>
    </form>
  );
}

export default EventExamples;
