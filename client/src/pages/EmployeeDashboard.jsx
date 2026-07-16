import { useAuth } from '../context/AuthContext';

const dummyTickets = [
    { _id: '1', title: 'Laptop wont turn on', priority: 'High', status: 'Open' },
    { _id: '2', title: 'VPN not connecting', priority: 'Medium', status: 'In Progress'},
];

function EmployeeDashboard() {
    const { user, logout } = useAuth();

    return (
        <div className="dashboard">
            <header>
                <h1>Welcome, {user?.name}</h1>
                <button onClick={logout}>Log out</button>
            </header>

            <section>
                <h2>Submit a Ticket</h2>
                {/* TicketForm component goes here - Day 4 */}
            </section>

            <section>
                <h2>My Tickets</h2>
                <ul>
                    {dummyTickets.map((t) => (
                        <li key={t._id}>
                            {t.title} - {t.priority} - {t.status}
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
}

export default EmployeeDashboard;