function TicketCard({ ticket, children }) {
  const createdByName = typeof ticket.createdBy === 'object'
    ? ticket.createdBy?.name
    : ticket.createdBy;

  return (
    <div className="ticket-card">
      <h3>{ticket.title}</h3>
      <p className="ticket-description">{ticket.description}</p>
      {createdByName && <p className="ticket-meta">Submitted by: {createdByName}</p>}
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