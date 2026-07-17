import { useState } from 'react';

function TicketForm({ onSubmit }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('Low');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim() || !description.trim()) {
      setError('Title and description are required.');
      return;
    }

    setError('');
    onSubmit({ title, description, priority });
    setTitle('');
    setDescription('');
    setPriority('Low');
  };

  return (
    <form onSubmit={handleSubmit} className="ticket-form">
      {error && <p className="form-error">{error}</p>}
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <button type="submit">Submit Ticket</button>
    </form>
  );
}

export default TicketForm;