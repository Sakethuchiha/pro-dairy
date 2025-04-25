export default function DashboardOverview() {
  const procurementRoutes = [
    { id: 1, name: 'Route 1', quantity: 1250, unit: 'Liters' },
    { id: 2, name: 'Route 2', quantity: 980, unit: 'Liters' },
    { id: 3, name: 'Route 3', quantity: 1560, unit: 'Liters' }
  ];

  return (
    <>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Dashboard Overview</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-sm font-medium text-gray-500">Total Procurement</h3>
          <p className="text-3xl font-bold mt-2">
            3,790 <span className="text-sm font-normal text-gray-500">Liters</span>
          </p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          <h3 className="text-sm font-medium text-gray-500">Today's Collection</h3>
          <p className="text-3xl font-bold mt-2">
            1,245 <span className="text-sm font-normal text-gray-500">Liters</span>
          </p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-sm font-medium text-gray-500">Quality Pass Rate</h3>
          <p className="text-3xl font-bold mt-2">
            98<span className="text-sm">%</span>
          </p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-4 border-b border-gray-100">
          <h2 className="text-lg font-semibold text-gray-800">Procurement Routes</h2>
        </div>
        <div className="divide-y divide-gray-100">
          {procurementRoutes.map(route => (
            <div key={route.id} className="p-4 flex justify-between items-center hover:bg-gray-50">
              <div>
                <p className="font-medium">{route.name}</p>
                <p className="text-sm text-gray-500">Route ID: {route.id}</p>
              </div>
              <p className="font-semibold">
                {route.quantity} {route.unit}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
