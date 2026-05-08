import {
  Users,
  Calendar,
  Image,
  Droplet,
} from "lucide-react";

import StatCard from "../../components/admin/StatCard";
import Chart from "../../components/admin/Chart";

const Dashboard = () => {
  return (
    <div className="p-4 md:p-6">

      {/* HEADER */}
      <div className="flex flex-col md:flex-row justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <p className="text-gray-500">
            Welcome back! Here's an overview of your NSS unit.
          </p>
        </div>

        <button className="border px-3 py-1 rounded mt-3 md:mt-0">
          ⏱ Last 30 days
        </button>
      </div>

      {/* STATS */}
      <div className="grid md:grid-cols-4 gap-4 mb-6">
        <StatCard title="Total Volunteers" value="248" icon={Users} color="bg-blue-100 text-blue-600" />
        <StatCard title="Active Events" value="8" icon={Calendar} color="bg-green-100 text-green-600" />
        <StatCard title="Gallery Items" value="156" icon={Image} color="bg-purple-100 text-purple-600" />
        <StatCard title="Blood Donors" value="89" icon={Droplet} color="bg-red-100 text-red-600" />
      </div>

      {/* QUICK ACTIONS */}
      <div className="bg-white p-5 rounded-xl shadow mb-6">
        <h2 className="font-semibold">Quick Actions</h2>
        <p className="text-gray-500 mb-4">Common tasks you can perform</p>

        <div className="grid md:grid-cols-4 gap-4">
          <button className="border p-3 rounded">Add Volunteer</button>
          <button className="bg-orange-400 text-white p-3 rounded">Create Event</button>
          <button className="border p-3 rounded">Upload Photos</button>
          <button className="border p-3 rounded">Add Donor</button>
        </div>
      </div>

      {/* CHART + ACTIVITY */}
      <div className="grid md:grid-cols-2 gap-4">
        <Chart />

        <div className="bg-white p-5 rounded-xl shadow">
          <h2 className="font-semibold mb-4">Recent Activity</h2>

          <ul className="space-y-3 text-sm">
            <li>• New volunteer registered</li>
            <li>• Event created</li>
            <li>• Gallery updated</li>
            <li>• Blood donor added</li>
          </ul>
        </div>
      </div>

    </div>
  );
};

export default Dashboard;