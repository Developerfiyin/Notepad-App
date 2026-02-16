{
  /*import React from "react";
import Header from "./Header";

const Dashboard = () => {
  return <Header />;
};
/
export default Dashboard;
*/
}

import { useState } from "react";
import {
  HiPlus,
  HiSearch,
  HiOutlineDocumentText,
  HiOutlineTrash,
  HiStar,
  HiOutlineAdjustments,
  HiOutlineLogout,
} from "react-icons/hi";
import { FaRegStickyNote } from "react-icons/fa";
import NoteModal from "../components/NoteModal";

export default function Dashboard() {
  const [notes, setNotes] = useState([
    {
      id: 1,
      title: "Project Roadmap",
      content:
        "Finish the frontend by Friday. Start backend integration next week.",
      date: "Feb 16",
    },
    {
      id: 2,
      title: "Weekly Groceries",
      content: "Eggs, Milk, Avocados, Coffee beans, Sourdough bread.",
      date: "Feb 15",
    },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addNote = (newNote) => {
    setNotes([{ ...newNote, id: Date.now() }, ...notes]);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <div className="flex h-screen bg-slate-50 text-slate-900 font-sans">
      {/* 1. SIDEBAR: Fixed, height of screen */}
      <aside className="w-72 bg-white border-r border-slate-200 flex flex-col shrink-0">
        <div className="p-8">
          <div className="flex items-center gap-3 text-indigo-600">
            <div className="bg-indigo-600 p-2 rounded-xl text-white">
              <FaRegStickyNote className="text-xl" />
            </div>
            <h1 className="text-2xl font-black tracking-tight">SkyNotes</h1>
          </div>
        </div>

        <nav className="flex-1 px-4 space-y-1">
          <NavItem icon={<HiOutlineDocumentText />} label="All Notes" active />
          <NavItem icon={<HiStar />} label="Favorites" />
          <NavItem icon={<HiOutlineTrash />} label="Trash" />
          <div className="pt-4 pb-2 px-4 text-xs font-bold text-slate-400 uppercase tracking-widest">
            Settings
          </div>
          <NavItem icon={<HiOutlineAdjustments />} label="Preferences" />
        </nav>

        <div className="p-4 border-t border-slate-100">
          <button className="w-full flex items-center gap-3 px-4 py-3 text-slate-500 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all font-medium">
            <HiOutlineLogout className="text-xl" /> Log out
          </button>
        </div>
      </aside>

      {/* 2. MAIN AREA: Scrolls independently */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* HEADER */}
        <header className="h-20 bg-white/80 backdrop-blur-md border-b border-slate-200 flex items-center justify-between px-10 shrink-0">
          <div className="relative w-full max-w-md">
            <HiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-lg" />
            <input
              type="text"
              placeholder="Search through your thoughts..."
              className="w-full pl-12 pr-4 py-3 bg-slate-100 border-none rounded-2xl text-sm focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
            />
          </div>

          <button
            onClick={() => setIsModalOpen(true)}
            className="ml-4 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-2xl flex items-center gap-2 font-bold shadow-lg shadow-indigo-200 transition-all hover:-translate-y-0.5 active:translate-y-0"
          >
            <HiPlus className="text-xl" /> New Note
          </button>
        </header>

        {/* CONTENT GRID */}
        <div className="flex-1 overflow-y-auto p-10">
          <div className="max-w-7xl mx-auto">
            <header className="mb-8">
              <h2 className="text-3xl font-bold text-slate-800">Your Notes</h2>
              <p className="text-slate-500 mt-1">
                You have {notes.length} notes saved.
              </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {notes.map((note) => (
                <NoteCard
                  key={note.id}
                  note={note}
                  onDelete={() => deleteNote(note.id)}
                />
              ))}
            </div>
          </div>
        </div>
      </main>

      <NoteModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={addNote}
      />
    </div>
  );
}

// Sub-component for Sidebar Items
function NavItem({ icon, label, active = false }) {
  return (
    <button
      className={`w-full flex items-center gap-4 px-4 py-3.5 rounded-2xl font-semibold transition-all ${
        active
          ? "bg-indigo-50 text-indigo-700"
          : "text-slate-500 hover:bg-slate-50 hover:text-slate-700"
      }`}
    >
      <span className="text-xl">{icon}</span>
      {label}
    </button>
  );
}

// Sub-component for Note Cards
function NoteCard({ note, onDelete }) {
  return (
    <div className="group bg-white border border-slate-200 p-6 rounded-[2rem] hover:border-indigo-300 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300 cursor-pointer relative">
      <div className="flex justify-between items-start mb-4">
        <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 bg-slate-50 px-3 py-1 rounded-full">
          {note.date}
        </span>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onDelete();
          }}
          className="opacity-0 group-hover:opacity-100 p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all"
        >
          <HiOutlineTrash className="text-lg" />
        </button>
      </div>
      <h3 className="text-xl font-bold text-slate-800 mb-2 leading-tight group-hover:text-indigo-600 transition-colors">
        {note.title}
      </h3>
      <p className="text-slate-500 text-sm leading-relaxed line-clamp-4">
        {note.content}
      </p>
    </div>
  );
}
