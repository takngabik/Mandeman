import React from 'react';
import Sidebar from '../layout/sidebar';
import Topbar from '../layout/topbar';
import Infografis from './infografis';
import Terbaru from './terbaru';
import Aktifitas from './aktifitas';

interface DashboardProps { }

const Dashboard: React.FC<DashboardProps> = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 overflow-auto">
        <Topbar />
        <div className="p-8">
          <Infografis />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
            <Terbaru />
            <Aktifitas />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
