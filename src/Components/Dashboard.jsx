{/*import React from "react";
import Header from "./Header";

const Dashboard = () => {
  return <Header />;
};
/
export default Dashboard;
*/}
-1 flex flex-col">
        {/* Top Header */}
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8">
          <div className="relative w-96">
            <HiSearch className="absolute left-3 top-3 text-slate-400 text-lg" />
            <input type="text" placeholder="Search notes..." className="w-full pl-10 pr-4 py-2 bg-slate-100 border-none rounded-full text-sm outline-none" />
          </div>
        </header>

        {/* Dynamic Content Area */}
        <section className="p-8 flex-1 overflow-y-auto">
          {notes.length > 0 ? (
            /* 1. The Notes Grid */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {notes.map(note => (
                <div key={note.id} className="p-6 bg-white border border-slate-200 rounded-2xl hover:shadow-lg transition-all cursor-pointer">
                  <h3 className="font-bold text-slate-800">{note.title}</h3>
                  <p className="text-slate-600 text-sm mt-2">{note.content}</p>
                </div>
              ))}
            </div>
          ) : (
            /* 2. The Empty State */
            <div className="h-full flex flex-col items-center justify-center text-center">
              <div className="w-24 h-24 bg-indigo-50 text-indigo-500 rounded-full flex items-center justify-center mb-6 animate-bounce-slow">
                <HiOutlineDocumentAdd className="text-5xl" />
              </div>
              <h2 className="text-2xl font-bold text-slate-800 mb-2">No notes yet</h2>
              <p className="text-slate-500 max-w-xs mb-8">
                Your creative journey starts here. Click the button below to write your first note!
              </p>
              <button 
                onClick={handleCreateNote}
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-xl font-semibold flex items-center gap-2 transition-all shadow-lg shadow-indigo-100"
              >
                <HiPlus className="text-xl" /> Create Your First Note
              </button>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}