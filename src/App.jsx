import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';
import { useNotes } from './hooks/useNotes';
import './App.css';

const App = () => {
  const {
    notes,
    loading,
    error,
    editingNote,
    setEditingNote,
    addNote,
    editNote,
    removeNote,
  } = useNotes();

  const handleFormSubmit = (noteData) => {
    if (editingNote) {
      editNote(editingNote._id, noteData);
    } else {
      addNote(noteData);
    }
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>Notes</h1>
        <span className="note-count">{notes.length} notes</span>
      </header>

      <main className="app-main">
        <NoteForm
          onSubmit={handleFormSubmit}
          editingNote={editingNote}
          onCancel={() => setEditingNote(null)}
        />

        {loading && <p className="status">Loading...</p>}
        {error && <p className="status error">{error}</p>}

        {!loading && (
          <NoteList
            notes={notes}
            onEdit={setEditingNote}
            onDelete={removeNote}
          />
        )}
      </main>
    </div>
  );
};

export default App;