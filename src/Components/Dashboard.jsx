import { useState } from "react";
import {
  HiPlus,
  HiSearch,
  HiOutlineDocumentText,
  HiOutlineTrash,
  HiStar,
  HiMenuAlt2,
  HiOutlineLogout,
} from "react-icons/hi";

import { MdLogout } from "react-icons/md";

import NoteModal from "./Notemodal";

export default function Dashboard() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Initialize with a few dummy notes or an empty array
  const [notes, setNotes] = useState([
    {
      id: 1,
      title: "Welcome to Notetaker App",
      content: "Click the + button to create your first note!",
      date: "Feb 16 2025",
    },

    {
      id: 2,
      title: "How to settle disputes among triplets",
      content:
        "Never pick a side, Pray for wisdom, concentrate on solving the problem rather than causing more.",
      date: "Feb 15 2019",
    },
  ]);

  // Function to add a new note
  const addNote = (newNote) => {
    const noteWithId = { ...newNote, id: Date.now() };
    setNotes([noteWithId, ...notes]); // Add to the TOP of the list
  };

  // Function to delete a note
  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <div className="flex h-screen bg-slate-50 text-green-900 overflow-hidden">
      {/* SIDEBAR (Collapsible) */}
      <aside
        className={`bg-white border-r border-slate-200 flex flex-col transition-all duration-300 ${isExpanded ? "w-64" : "w-20"}`}
      >
        <div className="h-20 flex items-center px-6">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-2 hover:bg-green-300 rounded-xl text-green-400"
          >
            <HiMenuAlt2 className="text-2xl" />
          </button>
          <span
            className={`ml-4 font-black text-xl text-green-400 transition-opacity ${isExpanded ? "opacity-70" : "opacity-0 hidden"}`}
          >
            Notetaker App
          </span>
        </div>
        <nav className="flex-1 px-3 space-y-2 mt-4">
          <NavItem
            icon={<HiOutlineDocumentText />}
            label="All Notes"
            active
            isExpanded={isExpanded}
          />
          <NavItem
            icon={<HiStar />}
            label="Favorites"
            isExpanded={isExpanded}
          />
          <NavItem
            icon={<HiOutlineTrash />}
            label="Trash"
            isExpanded={isExpanded}
          />
        </nav>

        <NavItem 
         icon={<MdLogout className="text-2xl" />} label="Log-out" isExpanded={isExpanded}  />
      
        
  
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 flex flex-col">
        {/* HEADER */}
        <header className="h-20 bg-white border-b border-teal-200 flex items-center justify-between px-10">
          <div className="relative w-full max-w-md">
            <HiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-teal-400 text-lg" />
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-12 pr-4 py-2.5 bg-slate-100 border-none rounded-xl text-sm focus:ring-2 focus:ring-green-400 outline-none"
            />
          </div>

          {/* TRIGGER MODAL */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-green-400 hover:bg-teal-500 text-white px-6 py-2.5 rounded-xl flex items-center gap-2 font-bold shadow-lg shadow-green-100 transition-all active:scale-95"
          >
            <HiPlus className="text-xl" /> New Note
          </button>
        </header>

        {/* NOTES GRID */}
        <div className="flex-1 overflow-y-auto p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {notes.map((note) => (
              <NoteCard
                key={note.id}
                note={note}
                onDelete={() => deleteNote(note.id)}
              />
            ))}
          </div>
        </div>
      </main>

      {/* THE MODAL COMPONENT */}
      <NoteModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={addNote}
      />
    </div>
  );
}

// HELPERS (NavItem and NoteCard)
function NavItem({ icon, label, active, isExpanded }) {
  return (
    <button
      className={`w-full flex items-center p-3.5 rounded-2xl transition-all ${active ? "bg-green-50 text-teal-700" : "text-teal-500 hover:bg-green-50"}`}
    >
      <span className={`text-2xl ${!isExpanded && "mx-auto"}`}>{icon}</span>
      <span
        className={`ml-4 overflow-hidden whitespace-nowrap transition-all ${isExpanded ? "w-auto opacity-100" : "w-0 opacity-0"}`}
      >
        {label}
      </span>
    </button>
  );
}

function NoteCard({ note, onDelete }) {
  return (
    <div className="group bg-white border border-slate-200 p-6 rounded-4xl hover:shadow-xl transition-all relative">
      <div className="flex justify-between items-start mb-4">
        <span className="text-[10px] font-bold text-slate-400 bg-slate-50 px-3 py-1 rounded-full">
          {note.date}
        </span>
        <button
          onClick={onDelete}
          className="opacity-0 group-hover:opacity-100 p-2 text-slate-400 hover:text-red-500 transition-all"
        >
          <HiOutlineTrash />
        </button>
      </div>
      <h3 className="text-lg font-bold text-slate-800 mb-2">{note.title}</h3>
      <p className="text-slate-500 text-sm line-clamp-3">{note.content}</p>
    </div>
  );
}
