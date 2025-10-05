// Composing Server and Client Components

// Server Component
import ClientCounter from './ClientCounter';

async function Dashboard() {
  const data = await fetchDashboardData();
  
  return (
    <div>
      <h1>Dashboard</h1>
      
      {/* Server-rendered static content */}
      <section>
        <h2>Stats</h2>
        <p>Total users: {data.userCount}</p>
      </section>
      
      {/* Client component for interactivity */}
      <ClientCounter initialValue={data.someValue} />
    </div>
  );
}

export default Dashboard;
