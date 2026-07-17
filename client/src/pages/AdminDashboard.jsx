import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import TicketList from '../components/TicketList';
import StatusDropdown from '../components/StatusDropdown';
import api from '../services/api';

function AdminDashboard() {
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

  const handleStatusChange = async (ticketId, newStatus) => {
    try {
      await api.put(`/tickets/${ticketId}`, { status: newStatus });
      fetchTickets(); // refresh list after update
    } catch (err) {
      setError('Failed to update ticket.');
    }
  };

  return (
    <div className="dashboard">
      <Navbar />
      <section>
        <h2>All Tickets</h2>
        {error && <p className="form-error">{error}</p>}
        {loading ? (
          <p>Loading tickets...</p>
        ) : (
          <TicketList
            tickets={tickets}
            renderActions={(ticket) => (
              <StatusDropdown
                currentStatus={ticket.status}
                onChange={(newStatus) => handleStatusChange(ticket._id, newStatus)}
              />
            )}
          />
        )}
      </section>
    </div>
  );
}

export default AdminDashboard;