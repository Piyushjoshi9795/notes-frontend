import axios from 'axios';

const API_URL= 'http://localhost:5000/api/notes';

export const getALLNotes= async()=>{
    const res=await axios.get(API_URL);
    return res.data.data;
}

export const createNote= async(noteData)=>{
    const res=await axios.post(API_URL,noteData);
    return res.data.data;
}

export const updateNote= async(id,noteData)=>{
    const res=await axios.put(`${API_URL}/${id}`,noteData);
    return res.data.data;
}

export const deleteNote=async(id)=>{
 await axios.delete(`${API_URL}/${id}`);
}
