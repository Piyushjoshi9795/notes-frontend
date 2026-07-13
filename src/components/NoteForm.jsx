import { useState, useEffect } from 'react';

const NoteForm = ({ onSubmit, editingNote, onCancel }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  // when editingNote changes, populate the form fields
  useEffect(() => {
    if (editingNote) {
      setTitle(editingNote.title);
      setBody(editingNote.body);
    } else {
      setTitle('');
      setBody('');
    }
  }, [editingNote]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !body.trim()) return;

    onSubmit({ title: title.trim(), body: body.trim() });

    // only clear form if creating (not editing — parent handles that)
    if (!editingNote) {
      setTitle('');
      setBody('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="note-form">
      <h2>{editingNote ? 'Edit note' : 'New note'}</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
        className="form-input"
      />
      <textarea
        placeholder="Write your note..."
        value={body}
        onChange={e => setBody(e.target.value)}
        className="form-textarea"
        rows={4}
      />
      <div className="form-actions">
        <button type="submit" className="btn btn-primary">
          {editingNote ? 'Save changes' : 'Add note'}
        </button>
        {editingNote && (
          <button type="button" className="btn btn-secondary" onClick={onCancel}>
            Cancel
          </button>
        )}
      </div>
    </form>
  );
};

export default NoteForm;