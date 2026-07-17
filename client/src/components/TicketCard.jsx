function TicketCard({ ticket, children }) {
  return (
    <div className="ticket-card">
      <h3>{ticket.title}</h3>
      {ticket.createdBy && <p className="ticket-meta">Submitted by: {ticket.createdBy}</p>}
      <p className="ticket-meta">
        Priority: <span className={`priority-${ticket.priority.toLowerCase()}`}>{ticket.priority}</span>
      </p>
      <p className="ticket-meta">
        Status: <span className={`status-${ticket.status.replace(' ', '-').toLowerCase()}`}>{ticket.status}</span>
      </p>
      {children}
    </div>
  );
}

export default TicketCard;