import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

export default function AppLayout() {
  return (
    <div className="min-h-screen w-full flex flex-auto bg-gray-100 items-stretch">
      <Sidebar />
      <div className="w-full sm:ml-64 p-6">
        <Outlet />
      </div>
    </div>
  )
}