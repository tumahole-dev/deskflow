import Navbar from '../components/Navbar';
import TicketList from '../components/TicketList';
import StatusDropdown from '../components/StatusDropdown';

const dummyTickets = [
  { _id: '1', title: 'Laptop wont turn on', priority: 'High', status: 'Open', createdBy: 'Jane Employee' },
  { _id: '2', title: 'VPN not connecting', priority: 'Medium', status: 'In Progress', createdBy: 'Sam Employee' },
];

function AdminDashboard() {
  const handleStatusChange = (ticketId, newStatus) => {
    // Day 4: this will PUT to /api/tickets/:id
    console.log(`Ticket ${ticketId} → ${newStatus}`);
  };

  return (
    <div className="dashboard">
      <Navbar />
      <section>
        <h2>All Tickets</h2>
        <TicketList
          tickets={dummyTickets}
          renderActions={(ticket) => (
            <StatusDropdown
              currentStatus={ticket.status}
              onChange={(newStatus) => handleStatusChange(ticket._id, newStatus)}
            />
          )}
        />
      </section>
    </div>
  );
}

export default AdminDashboard;