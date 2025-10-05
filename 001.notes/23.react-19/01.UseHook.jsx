// React 19 use() hook

import { use, Suspense } from 'react';

// Fetching data with use()
function UserProfile({ userPromise }) {
  const user = use(userPromise);
  
  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </div>
  );
}

// Using with Context
function ThemedComponent({ theme }) {
  const themeValue = use(theme);
  
  return <div className={themeValue}>Content</div>;
}

// Main component
function App() {
  const userPromise = fetch('/api/user').then(res => res.json());
  
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <UserProfile userPromise={userPromise} />
    </Suspense>
  );
}

export default App;
