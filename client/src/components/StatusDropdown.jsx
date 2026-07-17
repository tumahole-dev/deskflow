function StatusDropdown({ currentStatus, onChange }) {
  return (
    <select value={currentStatus} onChange={(e) => onChange(e.target.value)}>
      <option value="Open">Open</option>
      <option value="In Progress">In Progress</option>
      <option value="Resolved">Resolved</option>
    </select>
  );
}

export default StatusDropdown;