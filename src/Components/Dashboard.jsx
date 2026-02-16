{/*import React from "react";
import Header from "./Header";

const Dashboard = () => {
  return <Header />;
};
/
export default Dashboard;
*/}
starts here. Click the button below to write your first note!
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