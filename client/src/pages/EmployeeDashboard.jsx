import Navbar from '../components/Navbar';
import TicketForm from '../components/TicketForm';
import TicketList from '../components/TicketList';

const dummyTickets = [
  { _id: '1', title: 'Laptop wont turn on', priority: 'High', status: 'Open' },
  { _id: '2', title: 'VPN not connecting', priority: 'Medium', status: 'In Progress' },
];

function EmployeeDashboard() {
  const handleCreateTicket = (ticketData) => {
    // Day 4: this will POST to /api/tickets
    console.log('New ticket:', ticketData);
  };

  return (
    <div className="dashboard">
      <Navbar />
      <section>
        <h2>Submit a Ticket</h2>
        <TicketForm onSubmit={handleCreateTicket} />
      </section>
      <section>
        <h2>My Tickets</h2>
        <TicketList tickets={dummyTickets} />
      </section>
    </div>
  );
}

export default EmployeeDashboard;