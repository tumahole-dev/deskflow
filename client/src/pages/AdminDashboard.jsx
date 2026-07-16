import { useAuth } from "../context/AuthContext";

const dummyTickets = [
    { _id: '1', title: 'Laptop wont turn on', priority: 'High', status: 'Open', createdBy: 'Jane Employee' },
    { _id: '2', title: 'VPN not connecting', priority: 'Medium', status: 'In Progress', createdBy: 'Sam Employee' },
];

function AdminDashboard() {
    const { user, logout } = useAuth();

    return (
        <div className="dashboard">
            <header>
                <h1>Admin: {user?.name}</h1>
                <button onClick={logout}>Log out</button>
            </header>

            <section>
                <h2>All Tickets</h2>
                <ul>
                    {dummyTickets.map((t) => (
                        <li key={t._id}>
                            {t.title} - {t.createdBy} - {t.priority} - {t.status}
                            {/* StatusDropdown component goes here - Day 4 */}
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
}

export default AdminDashboard;