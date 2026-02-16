{/*import React from "react";
import Header from "./Header";

const Dashboard = () => {
  return <Header />;
};
/
export default Dashboard;
*/}

import { useState } from 'react';
import NoteModal from './Notemodal'; // Import the modal
// ... (icons)

export default function Dashboard() {
  const [notes, setNotes] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addNote = (newNote) => {
    // Generate a quick ID and add to state
    const noteWithId = { ...newNote, id: Date.now() };
    setNotes([noteWithId, ...notes]);
  };

  return (
    <div className="flex h-screen bg-slate-50">
      {/* ... (Sidebar & Header) ... */}
      
      {/* Pass state and functions to Modal */}
      <NoteModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onSave={addNote} 
      />

      {/* Button to open Modal */}
      <button onClick={() => setIsModalOpen(true)}>
        New Note
      </button>

      {/* ... (Rest of UI) ... */}
    </div>
  );
}