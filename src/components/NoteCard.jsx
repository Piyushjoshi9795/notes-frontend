const NoteCard = ({ note, onEdit, onDelete }) => {
  const formattedDate = new Date(note.createdAt).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });

  return (
    <div className="note-card">
      <div className="note-card-header">
        <h3 className="note-title">{note.title}</h3>
        <span className="note-date">{formattedDate}</span>
      </div>
      <p className="note-body">{note.body}</p>
      <div className="note-actions">
        <button className="btn btn-secondary" onClick={() => onEdit(note)}>
          Edit
        </button>
        <button className="btn btn-danger" onClick={() => onDelete(note._id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default NoteCard;