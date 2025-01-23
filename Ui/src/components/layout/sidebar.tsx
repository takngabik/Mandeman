import React from 'react';

interface SidebarProps { }

const Sidebar: React.FC<SidebarProps> = () => {
  return (
    <div className="w-64 bg-white shadow-lg transition-all duration-300 ease-in-out flex flex-col">
      <h1 className="h-16 flex items-center px-12 border-b text-xl font-bold text-gray-800">
        <i className="bi bi-globe-asia-australia mr-3"></i>
        <span className="uppercase">Mandeman</span>
      </h1>
      <div className="flex-grow overflow-y-auto">
        <nav className="mt-5">
          <a href="#" className="flex items-center px-6 py-3 text-blue-600 bg-blue-50 border-r-4 border-blue-600 transition-colors duration-200">
            <i className="bi bi-house-door text-lg mr-3"></i>
            <span>Beranda</span>
          </a>
          <a href="#" className="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100 transition-colors duration-200">
            <i className="bi bi-envelope text-lg mr-3"></i>
            <span>Surat Masuk</span>
          </a>
          <a href="#" className="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100 transition-colors duration-200">
            <i className="bi bi-envelope-paper text-lg mr-3"></i>
            <span>Surat Keluar</span>
          </a>
          <a href="#" className="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100 transition-colors duration-200">
            <i className="bi bi-gear text-lg mr-3"></i>
            <span>Pengaturan</span>
          </a>
        </nav>
      </div>
      <div className="border-t mt-auto">
        <button className="flex items-center w-full px-6 py-4 text-gray-700 hover:bg-red-50 hover:text-red-500 transition-colors duration-200">
          <i className="bi bi-box-arrow-left text-lg mr-3"></i>
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
