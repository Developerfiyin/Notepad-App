import React from 'react'
import { Menu, X } from 'lucide-react'; // Menu and Close icons




const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-bold">NoteFlow</div>

        {/* DESKTOP LINKS (Visible only on md screens and up) */}
        <div className="hidden md:flex gap-8">
          <a href="#" className="hover:text-indigo-600">Home</a>
          <a href="#" className="hover:text-indigo-600">About</a>
          <a href="#" className="hover:text-indigo-600">Contact</a>
        </div>

        {/* MOBILE MENU BUTTON (Visible only on small screens) */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden p-2 text-gray-600"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE LINKS (Dropdown Menu) */}
      {/* This only renders if isOpen is true */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-white border-t border-gray-100`}>
        <div className="flex flex-col p-4 space-y-4">
          <a href="#" className="text-lg font-medium">Home</a>
          <a href="#" className="text-lg font-medium">About</a>
          <a href="#" className="text-lg font-medium">Contact</a>
        </div>
      </div>
    </nav>
  );
};
  

export default Navbar