import { NavLink } from "react-router-dom";

export default function SidebarLink({ to, children }) {
  return (
    <NavLink to={to} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
      {children}
    </NavLink>
  )
}