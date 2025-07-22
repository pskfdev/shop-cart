import { Outlet } from "react-router";
//Components
import AdminNavbar from "@/components/navbar/AdminNavbar";


function AdminLayout() {
  return (
    <div className="min-h-screen flex bg-slate-200">
      <AdminNavbar />

      <main className="grow">
        <Outlet />
      </main>
    </div>
  )
}

export default AdminLayout