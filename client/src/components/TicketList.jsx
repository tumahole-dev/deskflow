import TicketCard from './TicketCard';

function TicketList({ tickets, renderActions }) {
  if (tickets.length === 0) {
    return <p className="empty-state">No tickets yet.</p>;
  }

  return (
    <div className="ticket-list">
      {tickets.map((ticket) => (
        <TicketCard key={ticket._id} ticket={ticket}>
          {renderActions && renderActions(ticket)}
        </TicketCard>
      ))}
    </div>
  );
}

export default TicketList;