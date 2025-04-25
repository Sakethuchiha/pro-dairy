'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image'; // Import Image from Next.js

// Updated blueMenuItems with modern names, if you want
const blueMenuItems = [
  "Location Network", "Rate Chart", "TM Batch Preparation", "Bulk Production Entry", "Testing Equipment Register",
  "Feed-Seed-Medicine Register", "Location Map", "Procurement Entry", "Procurement Cartage", "Chemical-Laboratory Page",
  "Milk Transfers", "Output Entry", "Billing Adjustments", "Billing", "Reports", "Daily Sales Entry",
  "Producer Data", "Producer Procurement Entry", "Producer Billing","New Time Period", "Procurement Time period","Shed Maintenance","Bank Master","Shed Procurement Daywise Data","Stock Register Report",
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [activeTab, setActiveTab] = useState<'application' | 'dashboard'>('dashboard');
  const pathname = usePathname();

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-[#F5F5F5] to-[#E0E0E0]">
      {/* Top Header with Logo */}
      <div className="bg-white shadow-lg p-6 flex items-center justify-between rounded-b-3xl mb-6">
        <div className="flex justify-center mb-4">
          <Image
            src="/logo.png"  // Your logo file inside the public folder
            alt="PRO DAIRY Logo"
            width={160}
            height={60}
            className="object-contain"
            priority
          />
        </div>
        <div className="space-x-4">
          <button
            onClick={() => setActiveTab('application')}
            className={`px-6 py-3 rounded-xl transition-all duration-300 ease-in-out border-2 ${activeTab === 'application' ? 'bg-[#FF6F00] text-white' : 'bg-white text-[#2F4F4F] border-[#2F4F4F]'}`}
          >
            Application
          </button>
          <button
            onClick={() => setActiveTab('dashboard')}
            className={`px-6 py-3 rounded-xl transition-all duration-300 ease-in-out border-2 ${activeTab === 'dashboard' ? 'bg-[#FF6F00] text-white' : 'bg-white text-[#2F4F4F] border-[#2F4F4F]'}`}
          >
            Dashboard for:dd rr
          </button>
        </div>
      </div>

      {/* Sidebar */}
      <div className="flex flex-1">
        <aside className="w-72 bg-[#163bb7] text-white h-screen overflow-y-auto p-6 rounded-tr-3xl rounded-bl-3xl shadow-2xl transition-all duration-300 ease-in-out">
          {activeTab === 'dashboard' ? (
            blueMenuItems.map((item, index) => {
              const slug = item.toLowerCase().replace(/\s+/g, '-').replace(/[()]/g, '');
              const route = `/dashboard/${slug}`;
              const isActive = pathname === route;

              return (
                <Link href={route} key={index}>
                  <div
                    className={`cursor-pointer px-6 py-3 rounded-xl transition-all duration-300 ease-in-out mb-4 hover:bg-[#FF6F00] hover:text-white ${isActive ? 'bg-[#FF6F00] text-black font-semibold' : ''}`}
                  >
                    {item}
                  </div>
                </Link>
              );
            })
          ) : (
            <p className="text-sm text-gray-300">No components in Application tab yet.</p>
          )}
        </aside>

        {/* Main Content */}
        <main className="flex-1 bg-gray-50 p-8 rounded-tl-3xl shadow-lg">
          {children}
        </main>
      </div>
    </div>
  );
}
