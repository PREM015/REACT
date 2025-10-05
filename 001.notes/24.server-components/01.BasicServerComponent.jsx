// React Server Component (RSC)

// This component runs ONLY on the server
async function UserList() {
  // Direct database access - no API needed!
  const users = await db.users.findMany();
  
  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
