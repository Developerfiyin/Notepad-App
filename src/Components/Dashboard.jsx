{/*import React from "react";
import Header from "./Header";

const Dashboard = () => {
  return <Header />;
};
/
export default Dashboard;
*/}
import { useState } from 'react';
// Importing specific icons from Heroicons and Font Awesome sets
import { HiPlus, HiSearch, HiOutlineDocumentText, HiOutlineTrash, HiStar } from "react-icons/hi";
import { FaRegStickyNote } from "react-icons/fa";

export default function Dashboard() {
  const [notes, setNotes] = useState([
    { id: 1, title: 'Project Ideas', content: 'Build an AI app builder...', date: 'Oct 12' },
    { id: 2, title: 'Grocery List', content: 'Milk, Eggs, Bread...', date: 'Oct 14' },
  ]);

  return (
    <div className="flex h-screen bg-slate-50">
      {/* 1. Sidebar */}
      <aside className="w-64 bg-white border-r border-slate-200 p-6 flex flex-col gap-4">
        <h2 className="text-xl font-bold text-indigo-600 flex items-center gap-2">
          <FaRegStickyNote className="text-2xl" /> MyNotes
        </h2>
        <nav className="mt-8 space-y-2">
          <button className="w-full flex items-center gap-3 px-4 py-2 bg-indigo-50 text-indigo-700 rounded-lg font-medium">
            <HiOutlineDocumentText className="text-xl" /> All Notes
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors">
            <HiStar className="text-xl" /> Favorites
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors">
            <HiOutlineTrash className="text-xl" /> Trash
          </button>
        </nav>
      </aside>

      {/* 2. Main Content */}
      <main className="flex-1 flex flex-col">
        {/* Top Header */}
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8">
          <div className="relative w-96">
            <HiSearch className="absolute left-3 top-3 text-slate-400 text-lg" />
            <input 
              type="text" 
              placeholder="Search notes..." 
              className="w-full pl-10 pr-4 py-2 bg-slate-100 border-none rounded-full text-sm focus:ring-2 focus:ring-indigo-500 outline-none"
            />
          </div>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-xl flex items-center gap-2 text-sm font-semibold shadow-md shadow-indigo-200 transition-all active:scale-95">
            <HiPlus className="text-xl" /> New Note
          </button>
        </header>

        {/* Notes Grid */}
        <section className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-y-auto">
          {notes.map(note => (
            <div key={note.id} className="p-6 bg-white border border-slate-200 rounded-2xl hover:border-indigo-300 hover:shadow-xl hover:shadow-indigo-500/5 transition-all cursor-pointer group">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-bold text-slate-800 text-lg">{note.title}</h3>
                <span className="text-xs font-medium text-slate-400 bg-slate-100 px-2 py-1 rounded-md">{note.date}</span>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed line-clamp-3">{note.content}</p>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}