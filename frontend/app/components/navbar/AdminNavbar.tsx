import { Link } from "react-router";

function AdminNavbar() {
  return (
    <div className="w-44 bg-amber-200">
      <div className="w-full bg-amber-100 py-5 text-center">Shop Cart</div>

      <div className="mt-20">
        <ul>
          <li className="bg-amber-100 px-5 py-2 rounded-xl">
            <Link to="/admin">Dashboard</Link>
          </li>
          <li className="px-5 py-2 rounded-xl">
            <Link to="/admin/manage-user">Manage user</Link>
          </li>
          <li className="px-5 py-2 rounded-xl">
            <Link to="/admin/manage-product">Manage product</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default AdminNavbar;
