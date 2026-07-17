import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import TicketForm from '../components/TicketForm';
import TicketList from '../components/TicketList';
import api from '../services/api';

function EmployeeDashboard() {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchTickets = async () => {
    try {
      const response = await api.get('/tickets');
      setTickets(response.data);
    } catch (err) {
      setError('Failed to load tickets.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTickets();
  }, []);

  const handleCreateTicket = async (ticketData) => {
    try {
      await api.post('/tickets', ticketData);
      fetchTickets(); // refresh list after creating
    } catch (err) {
      setError('Failed to create ticket.');
    }
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
        {error ? (
        <p className="form-error">{error}</p>
        ) : loading ? (
        <p>Loading tickets...</p>
        ) : (
        <TicketList tickets={tickets} />
        )}
        </section>
    </div>
  );
}

export default EmployeeDashboard;