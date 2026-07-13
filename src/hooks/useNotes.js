import { useState, useEffect } from 'react';
import * as noteService from '../services/noteService';

export const useNotes = () => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editingNote, setEditingNote] = useState(null); // null = not editing

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await noteService.getALLNotes();
      setNotes(data);
    } catch (err) {
      setError('Failed to fetch notes. Is your backend running?');
    } finally {
      setLoading(false);
    }
  };

  const addNote = async (noteData) => {
    try {
      const newNote = await noteService.createNote(noteData);
      setNotes(prev => [newNote, ...prev]); // add to top, no refetch needed
    } catch (err) {
      setError('Failed to create note.');
    }
  };

  const editNote = async (id, noteData) => {
    try {
      const updated = await noteService.updateNote(id, noteData);
      setNotes(prev => prev.map(n => n._id === id ? updated : n));
      setEditingNote(null);
    } catch (err) {
      setError('Failed to update note.');
    }
  };

  const removeNote = async (id) => {
    try {
      await noteService.deleteNote(id);
      setNotes(prev => prev.filter(n => n._id !== id)); // remove locally, no refetch
    } catch (err) {
      setError('Failed to delete note.');
    }
  };

  return {
    notes,
    loading,
    error,
    editingNote,
    setEditingNote,
    addNote,
    editNote,
    removeNote,
  };
};