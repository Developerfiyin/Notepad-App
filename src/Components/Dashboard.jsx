{
  /*import React from "react";
import Header from "./Header";

const Dashboard = () => {
  return <Header />;
};
/
export default Dashboard;
*/
}import { useState } from 'react';
import { 
  HiPlus, 
  HiSearch, 
  HiOutlineDocumentText, 
  HiOutlineTrash, 
  HiStar, 
  HiMenuAlt2, 
  HiOutlineLogout 
} from "react-icons/hi";
import { FaRegStickyNote } from "react-icons/fa";

export default function Dashboard() {
  // This state controls the sidebar "Open" or "Closed"
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="flex h-screen bg-slate-50 text-slate-900 overflow-hidden">
      
      {/* 1. SIDEBAR CONTAINER */}
      <aside 
        className={`bg-white border-r border-slate-200 flex flex-col transition-all duration-300 ease-in-out shrink-0 ${
          isExpanded ? 'w-64' : 'w-20'
        }`}
      >
        {/* TOP BAR: Menu & Logo */}
        <div className="h-20 flex items-center px-6 mb-4">
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-2 hover:bg-slate-100 rounded-xl transition-colors text-indigo-600"
          >
            <HiMenuAlt2 className="text-2xl" />
          </button>
          
          {/* Logo - Fades in/out based on state */}
          <span className={`ml-4 font-black text-xl tracking-tight text-indigo-600 transition-opacity duration-300 whitespace-nowrap ${
            isExpanded ? 'opacity-100' : 'opacity-0'
          }`}>
            SkyNotes
          </span>
        </div>

        {/* NAVIGATION LINKS */}
        <nav className="flex-1 px-3 space-y-2">
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

        {/* BOTTOM: Logout */}
        <div className="p-3 border-t border-slate-100">
          <button className="w-full flex items-center p-3.5 text-slate-500 hover:text-red-500 hover:bg-red-50 rounded-2xl transition-all font-semibold overflow-hidden">
            <span className={`text-2xl ${!isExpanded && 'mx-auto'}`}>
              <HiOutlineLogout />
            </span>
            <span className={`ml-4 transition-all duration-300 whitespace-nowrap ${
              isExpanded ? 'opacity-100 w-auto' : 'opacity-0 w-0'
            }`}>
              Log out
            </span>
          </button>
        </div>
      </aside>

      {/* 2. MAIN CONTENT AREA */}
      <main className="flex-1 flex flex-col">
        {/* Header */}
        <header className="h-20 bg-white border-b border-slate-200 flex items-center justify-between px-10">
          <div className="relative w-full max-w-md">
            <HiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-lg" />
            <input 
              type="text" 
              placeholder="Search..." 
              className="w-full pl-12 pr-4 py-2.5 bg-slate-100 border-none rounded-xl text-sm focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
            />
          </div>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2.5 rounded-xl flex items-center gap-2 font-bold shadow-lg shadow-indigo-100 transition-all">
            <HiPlus className="text-xl" /> 
            <span className="hidden md:block">New Note</span>
          </button>
        </header>

        {/* Scrollable Notes Section */}
        <div className="flex-1 overflow-y-auto p-10">
           <h2 className="text-2xl font-bold mb-6">Your Workspace</h2>
           {/* Grid and Notes go here */}
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Dummy Card for visual test */}
              <div className="p-6 bg-white border border-slate-200 rounded-3xl h-40 shadow-sm hover:shadow-md transition-shadow">
                <div className="h-4 w-24 bg-slate-100 rounded-full mb-4"></div>
                <div className="h-4 w-full bg-slate-50 rounded-full mb-2"></div>
                <div className="h-4 w-2/3 bg-slate-50 rounded-full"></div>
              </div>
           </div>
        </div>
      </main>
    </div>
  );
}

/**
 * HELPER COMPONENT: NavItem
 * Handles the logic for showing/hiding labels and centering icons
 */
function NavItem({ icon, label, active = false, isExpanded }) {
  return (
    <button 
      className={`w-full flex items-center rounded-2xl font-bold transition-all p-3.5 relative group ${
        active 
          ? 'bg-indigo-50 text-indigo-700' 
          : 'text-slate-500 hover:bg-slate-50 hover:text-indigo-600'
      }`}
    >
      {/* Icon: Centers itself when sidebar is small */}
      <span className={`text-2xl transition-all duration-300 ${!isExpanded ? 'mx-auto' : ''}`}>
        {icon}
      </span>
      
      {/* Label: Fades and shrinks to 0 width */}
      <span className={`ml-4 transition-all duration-300 whitespace-nowrap overflow-hidden ${
        isExpanded ? 'opacity-100 w-auto' : 'opacity-0 w-0'
      }`}>
        {label}
      </span>

      {/* Mini Tooltip: Only shows when collapsed and hovering */}
      {!isExpanded && (
        <div className="absolute left-16 bg-slate-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-50">
          {label}
        </div>
      )}
    </button>
  );
}

