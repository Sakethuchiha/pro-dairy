// src/app/dashboard/page.tsx

import { redirect } from 'next/navigation';

export default function DashboardHome() {
  // Redirect to location-network or your desired default route
  redirect('/dashboard/location-network');
}
