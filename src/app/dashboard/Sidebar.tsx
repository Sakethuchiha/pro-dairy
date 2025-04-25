'use client';

type Props = {
  activeTab: 'application' | 'dashboard';
  setActiveTab: (tab: 'application' | 'dashboard') => void;
  setActiveComponent: (component: string) => void;
  activeComponent: string;
};

const dashboardMenuItems = [
  'Location Network',
  'Rate Chart',
  'TM Batch Preparation',
  'Bulk Production Entry',
  'Testing Equipment Register',
  'Feed-Seed-Medicine Register',
  'Location Map',
  'Procurement Entry',
  'Procurement Cartage',
  'Chemical-Laboratory Register',
  'Milk Transfers',
  'Output Entry',
  'Billing Adjustments',
  'Billing ',
  'Reports',
  'Daily Sales Entry',
  'Producer Data',
  'Producer Procurement Entry',
  'Producer Billing',
  'New Time Period',
  'Procurement Time Period',
  'Shed Maintenance',
  'Bank Master',
  'Shed Procurement Daywise Data',
  'Stock Register Report',
];

export default function Sidebar({
  activeTab,
  setActiveTab,
  setActiveComponent,
  activeComponent,
}: Props) {
  return (
    <div className="w-64 bg-white shadow-lg fixed h-screen overflow-y-auto">
      {/* Top logo & tab toggle (only once) */}
      <div className="p-4 border-b border-gray-200 sticky top-0 bg-white z-10">
        <div className="flex items-center justify-center mb-4">
          <h1 className="text-xl font-bold text-green-800">PRO DAIRY</h1>
        </div>

        {/* Tab Switch */}
        <div className="flex space-x-2">
          <button
            onClick={() => setActiveTab('application')}
            className={`flex-1 py-2 rounded-lg text-sm font-medium ${
              activeTab === 'application' ? 'bg-blue-100 text-blue-700' : 'hover:bg-gray-100'
            }`}
          >
            Application
          </button>
          <button
            onClick={() => setActiveTab('dashboard')}
            className={`flex-1 py-2 rounded-lg text-sm font-medium ${
              activeTab === 'dashboard' ? 'bg-blue-100 text-blue-700' : 'hover:bg-gray-100'
            }`}
          >
            Dashboard DD RR
          </button>
        </div>
      </div>

      {/* Sidebar Menu Items */}
      <nav className="p-4 space-y-1">
        {activeTab === 'dashboard' &&
          dashboardMenuItems.map((item, index) => (
            <button
              key={index}
              onClick={() => setActiveComponent(item)}
              className={`w-full text-left px-3 py-2 text-sm font-medium rounded-lg ${
                activeComponent === item ? 'bg-blue-50 text-blue-700 font-semibold' : 'hover:bg-gray-100'
              }`}
            >
              {item}
            </button>
          ))}

        {activeTab === 'application' && (
          <p className="text-sm text-gray-400 mt-4">No application content added yet.</p>
        )}
      </nav>
    </div>
  );
}
