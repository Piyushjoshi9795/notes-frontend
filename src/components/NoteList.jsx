import NoteCard from './NoteCard';

const NoteList = ({ notes, onEdit, onDelete }) => {
  if (notes.length === 0) {
    return <p className="empty-state">No notes yet. Create one above.</p>;
  }

  return (
    <div className="note-grid">
      {notes.map(note => (
        <NoteCard
          key={note._id}
          note={note}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default NoteList;