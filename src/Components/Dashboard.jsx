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
    <div className="group bg-white border border-slate-200 p-6 rounded-4xl hover:border-indigo-300 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300 cursor-pointer relative">
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
