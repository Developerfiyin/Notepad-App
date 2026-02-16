{/*import React from "react";
import Header from "./Header";

const Dashboard = () => {
  return <Header />;
};
/
export default Dashboard;
*/}

import { useState } from 'react';
import { HiX } from "react-icons/hi";

export default function NoteModal({ isOpen, onClose, onSave }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  if (!isOpen) return null; // Don't render anything if it's closed

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !content) return;
    
    onSave({ title, content, date: new Date().toLocaleDateString() });
    setTitle(''); // Reset fields
    setContent('');
    onClose(); // Close modal
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 backdrop-blur-sm p-4">
      <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
        
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-slate-100">
          <h2 className="text-xl font-bold text-slate-800">Create New Note</h2>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-600 transition-colors">
            <HiX className="text-2xl" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Title</label>
            <input 
              autoFocus
              type="text" 
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g., Grocery List"
              className="w-full px-4 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Content</label>
            <textarea 
              rows="5"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Start typing..."
              className="w-full px-4 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all resize-none"
            />
          </div>

          {/* Actions */}
          <div className="flex gap-3 pt-4">
            <button 
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2 text-slate-600 font-medium hover:bg-slate-50 rounded-xl transition-colors"
            >
              Cancel
            </button>
            <button 
              type="submit"
              className="flex-1 px-4 py-2 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 shadow-lg shadow-indigo-100 transition-all"
            >
              Save Note
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}